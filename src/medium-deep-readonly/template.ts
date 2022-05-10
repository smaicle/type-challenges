type DeepReadonly<T> = {
  readonly [P in keyof T]: (keyof T[P] extends never ? false : true) extends true ? DeepReadonly<T[P]> : T[P]
}