// TODO
type PreFix<T extends string[], P extends string> = `${T extends [infer _, ...infer __] ? `${P}${T[number]}` : ''}`
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${PreFix<E, '__'>}${PreFix<M, '--'>}`