type MyEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

type Sub<T extends any[]> = T extends [any, ...infer R] ? R : []

type LastIndexOf<T extends any[], U, R extends any[] = T> = T extends [...infer F, infer L]
  ? MyEqual<L, U> extends true 
    ? Sub<R>['length'] 
    : LastIndexOf<F, U, Sub<R>>
  : -1