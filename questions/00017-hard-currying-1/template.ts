declare function Currying<F extends Function>(fn: F): Curried<F>
type Curried<F extends Function> = F extends (...args: infer A) => infer R ? A extends [infer F, ... infer Rest] ? (a: F) => Rest['length'] extends 0 ? R : Curried<(...args: Rest) => R> : F : F
/**
 * 2
 * type Curried<T> = T extends  (...args: infer A) => infer R ? A extends [] ? () => R : A extends [infer P] ? (p: P) => R : (A extends [infer V, ...infer rest] ? (p: V) => Curried<(...args: rest) => R> : never) : never
 */
