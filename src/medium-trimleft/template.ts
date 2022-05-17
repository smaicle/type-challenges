type TWhiteSpaceL = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${TWhiteSpaceL}${infer R}` ? TrimLeft<R> : S