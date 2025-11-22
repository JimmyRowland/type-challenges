import type { Equal, Expect } from '@type-challenges/utils'
const test = {} as GetRequired<{ foo: number, bar?: string }>
type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]
