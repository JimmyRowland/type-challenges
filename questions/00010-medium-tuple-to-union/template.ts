type TupleToUnion<T> = T extends Array<any> ? T[number] : never
