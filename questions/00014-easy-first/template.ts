type First<T extends any[]> = T extends [infer R, ...any] ? R : never
// https://www.youtube.com/watch?v=dZWJrjzqvv8
