// !tpa
/*
 * The Primitive and LiteralUnion types were copied to the ArcOS Codebase from https://github.com/sindresorhus/type-fest.
 *
 * All rights belong to their respective authors.
 */

/**
 * Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 * @see https://github.com/sindresorhus/type-fest/blob/main/source/primitive.d.ts
 */
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
/**
 * Literal Union
 * @see https://github.com/sindresorhus/type-fest/blob/main/source/literal-union.d.ts
 */
export type LiteralUnion<LiteralType extends BaseType, BaseType extends Primitive> = LiteralType | (BaseType & { _?: never });

/**
 * A loosely typed way to get the constructor of a class interface.
 *
 * T is the type of the class interface
 * R is the arguments for the class' constructor. Defaults to `any[]`.
 */
export interface Constructs<T, R extends Array<unknown> = any[]> {
  new (...args: R): T;
}
// !endtpa
