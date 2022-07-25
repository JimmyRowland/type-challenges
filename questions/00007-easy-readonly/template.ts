type MyReadonly<T> = { readonly [key in keyof T]: T[key] }

type RecursiveReadonly<T> = { readonly [key in keyof T]: T[key] extends object ? RecursiveReadonly<T[key]> : T[key] }
