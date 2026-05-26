// !tpa-prop
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export type LiteralUnion<LiteralType extends BaseType, BaseType extends Primitive> = LiteralType | (BaseType & { _?: never });

export interface Constructs<T, R extends Array<unknown> = any[]> {
  new (...args: R): T;
}
// !endtpa
