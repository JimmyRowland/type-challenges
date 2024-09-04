type DeepReadonly<T> = {readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] extends Array<any> ? DeepReadonly<T[K][number]> : T[K]}
