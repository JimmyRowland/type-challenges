type GetRequired<T extends Record<string, any>> = { [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K] }
