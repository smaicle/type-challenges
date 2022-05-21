type EqualOfType<T, R> = T extends R ? (R extends T ? true : false) : false

type DropChar<S extends string, C extends string> = S extends `${infer L}${infer R}`
  ? `${EqualOfType<L, C> extends true ? '' : L}${DropChar<R, C>}`
  : ''