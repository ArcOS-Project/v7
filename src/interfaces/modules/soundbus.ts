export interface ISoundbus {
  playSound(id: string, volume?: number): boolean | undefined;
  stopSound(id: string): boolean;
  getStore(): [string, string][];
  loadExternal(source: string, play?: boolean): void;
}
