type TWhiteSpace = ' ' | '\n' | '\t'
type TrimOfLeft<S extends string> = S extends `${TWhiteSpace}${infer R}` ? TrimOfLeft<R> : S
type TrimOfRight<S extends string> = S extends `${infer R}${TWhiteSpace}` ? TrimOfRight<R> : S

type Trim<T extends string> = TrimOfRight<TrimOfLeft<T>>