type Head<T extends any[]> = T extends [infer F, ...infer _] ? F : never;
type Tail<T extends any[]> = T extends [infer _, ...infer R] ? R : never;

type Zip<T extends unknown[], U extends unknown[], ALL extends unknown[] = []> = T['length'] extends 0
  ? ALL
  : U['length'] extends 0
    ? ALL
    : Zip<Tail<T>, Tail<U>, [...ALL, [Head<T>, Head<U>]]>