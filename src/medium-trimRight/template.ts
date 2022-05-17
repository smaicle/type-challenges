type TWhiteSpaceR = ' ' | '\n' | '\t'
type TrimRight<S extends string> = S extends `${infer R}${TWhiteSpaceR}` ? TrimRight<R> : S