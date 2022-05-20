type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}`
  ? `${F}` extends `${number}`
  ? `${F}${Absolute<R>}`
  : `${Absolute<R>}`
  : T