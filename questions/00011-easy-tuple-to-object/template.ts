type TupleToObject<T extends readonly PropertyKey[]> = { [key in T[number]]: key }
// https://www.youtube.com/watch?v=nK6qW_NsPvc
