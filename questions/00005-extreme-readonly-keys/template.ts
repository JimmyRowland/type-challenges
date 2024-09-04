type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
type GetReadonlyKeys<T> = { [K in keyof Required<T>]: Equal<{ [k in K]: T[K] }, { -readonly [k in K]: T[K] }> extends true ? never : K }[keyof T]
// -readonly remove readonly
// type GetReadonlyKeys<
//   T,
//   U extends Readonly<T> = Readonly<T>,
//   K extends keyof T = keyof T
// > = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never;
