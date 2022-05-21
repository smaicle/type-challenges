type IsAny<T> = unknown extends T
  ? [T] extends [string]
  ? true
  : false
  : false