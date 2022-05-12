// TODO
type IsUnion<T> = (T extends any ? (arg: T) => void : never) extends (
  arg: infer U
) => void
  ? [T] extends [U]
    ? false
    : true
  : never