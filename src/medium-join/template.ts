type Join<T, U extends string | number> = T extends [infer F, ...infer R]
  ? R['length'] extends 0
  ? F
  : F extends string | number
  ? `${F}${U}${Join<R, U>}`
  : F
  : ''