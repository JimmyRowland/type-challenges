type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R extends Promise<unknown> ? MyAwaited<R> : R : never

// https://ghaiklor.github.io/type-challenges-solutions/en/easy-awaited.html
