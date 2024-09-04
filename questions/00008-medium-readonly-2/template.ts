// type Diff<A, B> = A extends B ? never : A
// type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [Key in K]: T[Key] } & { [Key in Diff<keyof T, K>]: T[Key] }

type MyReadonly2<T, K extends keyof T> = T & { readonly [S in K]: T[S]}
