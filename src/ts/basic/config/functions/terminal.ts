import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { EnvFn } from "$ts/basic/functions/env";
import { FsreadFn } from "$ts/basic/functions/fsread";
import { InputFn } from "$ts/basic/functions/input";
import { MathFn } from "$ts/basic/functions/math";
import { PrefFn } from "$ts/basic/functions/pref";
import { TypeofFn } from "$ts/basic/functions/typeof";
import { UuidFn } from "$ts/basic/functions/uuid";

export function BasicTerminalFunctions(term: IArcTerminal) {
  return {
    env: EnvFn(),
    input: InputFn(),
    math: MathFn(),
    fsread: FsreadFn(term),
    uuid: UuidFn(),
    pref: PrefFn(),
    typeof: TypeofFn(),
  };
}
