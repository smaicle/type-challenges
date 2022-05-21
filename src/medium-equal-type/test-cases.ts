import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EqualType<'0', '0'>, true>>,
  Expect<Equal<EqualType<0, '0'>, false>>,
  // @ts-expect-error
  Expect<Equal<EqualType<0, '0' | number>, true>>,
  Expect<Equal<EqualType<'', ' '>, false>>,
  Expect<Equal<EqualType<string, string>, true>>,
]