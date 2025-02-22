import { Store, type ReadableStore } from "$ts/writable";

export interface FsProgressOperation {
  type: "quantity" | "size" | "none";
  icon: string;
  caption: string;
  subtitle: string;
  done: number;
  max: number;
  cancel?: () => void;
  waiting: boolean;
  working: boolean;
  errors: string[];
}

export interface FileProgressMutator {
  progress: ReadableStore<FsProgressOperation>;
  mutateMax: (mutator: number) => void;
  mutDone: (mutator: number) => void;
  mutErr: (mutator: string) => void;
  setMax: (value: number) => void;
  setDone: (value: number) => void;
  setErrors: (value: string[]) => void;
  updateCaption: (caption: string) => void;
  updSub: (subtitle: string) => void;
  setWait: (waiting: boolean) => void;
  setWork: (waiting: boolean) => void;
  stop: () => void;
  show: () => void;
}

export const DummyFileProgress: FileProgressMutator = {
  progress: Store<FsProgressOperation>(),
  mutateMax: (_: number) => {},
  mutDone: (_: number) => {},
  setMax: (_: number) => {},
  setDone: (_: number) => {},
  updateCaption: (_: string) => {},
  updSub: (_: string) => {},
  setWait: (_: boolean) => {},
  setWork: (_: boolean) => {},
  mutErr: (_: string) => {},
  setErrors: (_: string[]) => {},
  stop: () => {},
  show: () => {},
};
