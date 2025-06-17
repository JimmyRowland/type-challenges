type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<{ [I in K | keyof T]: I extends K ? V : T[I] }>
  get(): T
}
