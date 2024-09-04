type MyOmit<T, K> = { [I in keyof T as I extends K ? never : I]: T[I] }
