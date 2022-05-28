type MyEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Sub1<A extends any[]> = A extends [any, ...infer AR1] ? AR1 : []
type LastIndexOf<T extends any[], U extends number, Copy extends any[] = T> = T extends [...infer R1, infer R2]
  ? MyEqual<R2, U> extends true 
    ? Sub1<Copy>['length'] 
    : LastIndexOf<R1, U, Sub1<Copy>>
  : -1