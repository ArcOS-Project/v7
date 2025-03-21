import { Terminal } from "xterm";
import { Unicode11Addon } from "xterm-addon-unicode11";
import type { IDisposable } from "xterm";

export class SelectionList {
  private terminal: Terminal;
  private items: string[];
  public selectedIndex: number;
  private prompt: string;
  private resolve: ((value: string | undefined) => void) | null = null;
  private keyListener: IDisposable | null = null;
  private visibleItems: number;
  private scrollOffset: number;
  private promptLines: number;
  private scrollIndicatorSpace: number;
  private isDrawn: boolean = false;
  private totalDrawnLines: number = 0;

  constructor(terminal: Terminal, items: string[], prompt: string = "Select an item:") {
    this.terminal = terminal;
    this.items = items;
    this.selectedIndex = 0;
    this.prompt = prompt;
    this.promptLines = this.calculatePromptLines(prompt);

    // Account for potential scroll indicators (up and down)
    this.scrollIndicatorSpace = this.items.length > this.terminal.rows - this.promptLines ? 2 : 0;

    // Calculate visible items considering prompt lines and scroll indicators
    this.visibleItems = Math.max(1, terminal.rows - this.promptLines - this.scrollIndicatorSpace);
    this.scrollOffset = 0;
  }

  private calculatePromptLines(prompt: string): number {
    const terminalWidth = this.terminal.cols;
    const promptLength = prompt.length;
    return Math.ceil(promptLength / terminalWidth);
  }

  public async show(): Promise<string | undefined> {
    return new Promise((resolve) => {
      // Ensure any previous drawing is cleaned up
      if (this.isDrawn) {
        this.clearList();
      }

      this.resolve = resolve;

      // Recalculate visible items in case terminal size changed
      this.updateVisibleItems();
      this.draw();

      this.keyListener = this.terminal.onKey((e) => {
        const event = e.domEvent;

        if (event.key === "Enter") {
          const selectedItem = this.items[this.selectedIndex];
          this.cleanup();
          resolve(selectedItem);
        } else if (event.key === "ArrowUp") {
          this.moveUp();
        } else if (event.key === "ArrowDown") {
          this.moveDown();
        } else if (event.key === "Escape") {
          this.cleanup();
          resolve(undefined);
        } else if (event.key === "Home") {
          this.moveToTop();
        } else if (event.key === "End") {
          this.moveToBottom();
        } else if (event.key === "PageUp") {
          this.pageUp();
        } else if (event.key === "PageDown") {
          this.pageDown();
        }
      });
    });
  }

  private cleanup(): void {
    // Remove event listener
    if (this.keyListener) {
      this.keyListener.dispose();
      this.keyListener = null;
    }

    // Clear UI elements
    this.clearList();

    // Reset state
    this.resolve = null;
  }

  // Add method to update visible items when terminal size changes
  private updateVisibleItems(): void {
    // Reserve space for scroll indicators if needed
    const needsScrollIndicators = this.items.length > this.terminal.rows - this.promptLines;
    this.scrollIndicatorSpace = needsScrollIndicators ? 2 : 0;

    // Calculate available space - ensure at least 1 item can be shown
    this.visibleItems = Math.max(1, this.terminal.rows - this.promptLines - this.scrollIndicatorSpace);

    // Adjust scroll offset if needed to keep selection in view
    this.ensureSelectionVisible();
  }

  private ensureSelectionVisible(): void {
    // If selected item is above current view, scroll up
    if (this.selectedIndex < this.scrollOffset) {
      this.scrollOffset = this.selectedIndex;
    }

    // If selected item is below current view, scroll down
    else if (this.selectedIndex >= this.scrollOffset + this.visibleItems) {
      this.scrollOffset = this.selectedIndex - this.visibleItems + 1;
    }

    // Make sure scrollOffset doesn't go negative
    this.scrollOffset = Math.max(0, this.scrollOffset);

    // Make sure scrollOffset doesn't go beyond maximum valid position
    const maxOffset = Math.max(0, this.items.length - this.visibleItems);
    this.scrollOffset = Math.min(this.scrollOffset, maxOffset);
  }

  private draw(): void {
    // Reset line counter
    this.totalDrawnLines = 0;

    // Write prompt and count lines
    this.terminal.write(this.prompt + "\r\n");
    this.totalDrawnLines += this.promptLines;

    // No items case
    if (this.items.length === 0) {
      this.terminal.write("No items available.\r\n");
      this.totalDrawnLines++;
      this.isDrawn = true;
      return;
    }

    // Determine if we need scroll indicators
    const needsScroll = this.items.length > this.visibleItems;

    // Show top scroll indicator if needed
    if (needsScroll && this.scrollOffset > 0) {
      this.terminal.write("\x1b[33m↑ More above\x1b[0m\r\n");
      this.totalDrawnLines++;
    }

    // Calculate range to display
    const start = this.scrollOffset;
    const end = Math.min(this.scrollOffset + this.visibleItems, this.items.length);

    // Display items
    for (let i = start; i < end; i++) {
      const itemText = this.items[i];
      const isSelected = i === this.selectedIndex;

      // Apply highlighting for the selected item
      let prefix = isSelected ? "\x1b[30;47m> " : "  ";
      let suffix = isSelected ? "\x1b[0m" : "";

      // Handle wrapping by writing in chunks
      let remainingText = itemText;
      while (remainingText.length > 0) {
        const lineLength = this.terminal.cols - 2;
        const chunk = remainingText.substring(0, lineLength);
        remainingText = remainingText.substring(lineLength);

        this.terminal.write(`${prefix}${chunk}${suffix}\r\n`);
        this.totalDrawnLines++;

        prefix = "  ";
        suffix = "";
      }
    }

    // Show bottom scroll indicator if needed
    if (needsScroll && end < this.items.length) {
      this.terminal.write("\x1b[33m↓ More below\x1b[0m\r\n");
      this.totalDrawnLines++;
    }

    // Mark as drawn
    this.isDrawn = true;
  }

  private moveUp(): void {
    // Move selection up
    this.selectedIndex = (this.selectedIndex - 1 + this.items.length) % this.items.length;

    // Ensure selection is visible after moving
    this.ensureSelectionVisible();

    this.redraw();
  }

  private moveDown(): void {
    // Move selection down
    this.selectedIndex = (this.selectedIndex + 1) % this.items.length;

    // Ensure selection is visible after moving
    this.ensureSelectionVisible();

    this.redraw();
  }

  private moveToTop(): void {
    this.selectedIndex = 0;
    this.scrollOffset = 0;
    this.redraw();
  }

  private moveToBottom(): void {
    this.selectedIndex = this.items.length - 1;
    this.scrollOffset = Math.max(0, this.items.length - this.visibleItems);
    this.redraw();
  }

  private pageUp(): void {
    // Move selection up by visible items count
    this.selectedIndex = Math.max(0, this.selectedIndex - this.visibleItems);

    // Adjust scroll to ensure selection remains visible
    this.scrollOffset = Math.max(0, this.scrollOffset - this.visibleItems);
    this.ensureSelectionVisible();

    this.redraw();
  }

  private pageDown(): void {
    // Move selection down by visible items count
    this.selectedIndex = Math.min(this.items.length - 1, this.selectedIndex + this.visibleItems);

    // Adjust scroll to ensure selection remains visible
    this.scrollOffset = Math.min(Math.max(0, this.items.length - this.visibleItems), this.scrollOffset + this.visibleItems);
    this.ensureSelectionVisible();

    this.redraw();
  }

  private redraw(): void {
    this.clearList();
    this.draw();
  }

  private clearList(): void {
    // Only clear if something was drawn
    if (this.isDrawn && this.totalDrawnLines > 0) {
      for (let i = 0; i < this.totalDrawnLines; i++) {
        this.terminal.write("\x1b[1A\x1b[2K\r");
      }
      // Reset after clearing
      this.isDrawn = false;
      this.totalDrawnLines = 0;
    }
  }
}
