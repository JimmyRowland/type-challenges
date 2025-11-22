declare function PromiseAll<T extends Array<any>>(values: T): {[K in keyof T]: Awaited<T[K]>}
