type Eq<A, B> = 
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) 
  ? true 
  : false 

type IndexOf<T extends any[], U, R extends any[] = []> = T extends [infer F, ...infer L]
  ? Eq<F, U> extends true
    ? R['length']
    : IndexOf<L, U, [...R, 1]>
  : -1