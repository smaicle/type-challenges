type Include<T extends unknown[], U> = T extends [infer F, ...infer L]
  ? F extends U
    ? U extends F
      ? true
      : false
    : Include<L, U>
  : false

type Unique<T extends unknown[], R extends unknown[] = []> = T extends [infer F, ...infer L]
  ? Unique<L, Include<R, F> extends true ? R : [...R, F] >
  : R