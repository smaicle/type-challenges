type Mutable<T extends object> = {
  -readonly [P in keyof Readonly<T>]: T[P]
}