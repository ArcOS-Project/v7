import type { IDisposable } from "xterm";
import { Terminal } from "xterm";

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
      this.resolve = resolve;

      // Recalculate visible items in case terminal size changed
      this.updateVisibleItems();
      this.draw();

      this.keyListener = this.terminal.onKey((e) => {
        const event = e.domEvent;

        if (event.key === "Enter") {
          this.keyListener?.dispose();
          this.clearList();
          this.resolve?.(this.items[this.selectedIndex]);
        } else if (event.key === "ArrowUp") {
          this.moveUp();
        } else if (event.key === "ArrowDown") {
          this.moveDown();
        } else if (event.key === "Escape") {
          this.keyListener?.dispose();
          this.clearList();
          this.resolve?.(undefined);
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
    this.terminal.write(this.prompt + "\r\n");

    // No items case
    if (this.items.length === 0) {
      this.terminal.write("No items available.\r\n");
      return;
    }

    // Determine if we need scroll indicators
    const needsScroll = this.items.length > this.visibleItems;

    // Show top scroll indicator if needed
    if (needsScroll && this.scrollOffset > 0) {
      this.terminal.write("\x1b[33m↑ More above\x1b[0m\r\n");
    }

    // Calculate range to display
    const start = this.scrollOffset;
    const end = Math.min(this.scrollOffset + this.visibleItems, this.items.length);

    // Display items
    for (let i = start; i < end; i++) {
      if (i === this.selectedIndex) {
        this.terminal.write(`\x1b[30;47m> ${this.items[i]}\x1b[0m\r\n`);
      } else {
        this.terminal.write(`  ${this.items[i]}\r\n`);
      }
    }

    // Show bottom scroll indicator if needed
    if (needsScroll && end < this.items.length) {
      this.terminal.write("\x1b[33m↓ More below\x1b[0m\r\n");
    }
  }

  private moveUp(): void {
    // Move selection up
    this.selectedIndex = (this.selectedIndex - 1 + this.items.length) % this.items.length;

    // Ensure selection is visible after moving
    this.ensureSelectionVisible();

    this.clearList();
    this.draw();
  }

  private moveDown(): void {
    // Move selection down
    this.selectedIndex = (this.selectedIndex + 1) % this.items.length;

    // Ensure selection is visible after moving
    this.ensureSelectionVisible();

    this.clearList();
    this.draw();
  }

  private moveToTop(): void {
    this.selectedIndex = 0;
    this.scrollOffset = 0;
    this.clearList();
    this.draw();
  }

  private moveToBottom(): void {
    this.selectedIndex = this.items.length - 1;
    this.scrollOffset = Math.max(0, this.items.length - this.visibleItems);
    this.clearList();
    this.draw();
  }

  private pageUp(): void {
    // Move selection up by visible items count
    this.selectedIndex = Math.max(0, this.selectedIndex - this.visibleItems);

    // Adjust scroll to ensure selection remains visible
    this.scrollOffset = Math.max(0, this.scrollOffset - this.visibleItems);
    this.ensureSelectionVisible();

    this.clearList();
    this.draw();
  }

  private pageDown(): void {
    // Move selection down by visible items count
    this.selectedIndex = Math.min(this.items.length - 1, this.selectedIndex + this.visibleItems);

    // Adjust scroll to ensure selection remains visible
    this.scrollOffset = Math.min(Math.max(0, this.items.length - this.visibleItems), this.scrollOffset + this.visibleItems);
    this.ensureSelectionVisible();

    this.clearList();
    this.draw();
  }

  private clearList(): void {
    // Calculate lines to clear
    let linesToClear = this.promptLines;

    // No items message
    if (this.items.length === 0) {
      linesToClear += 1;
    } else {
      // Displayed items
      const displayedItems = Math.min(this.visibleItems, this.items.length);
      linesToClear += displayedItems;

      // Scroll indicators
      if (this.scrollOffset > 0) {
        linesToClear++;
      }
      if (this.scrollOffset + this.visibleItems < this.items.length) {
        linesToClear++;
      }
    }

    // Clear lines
    for (let i = 0; i < linesToClear; i++) {
      this.terminal.write("\x1b[1A\x1b[2K\r");
    }
  }
}
