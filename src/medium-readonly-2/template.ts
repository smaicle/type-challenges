type MyReadonly2<T, K = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}