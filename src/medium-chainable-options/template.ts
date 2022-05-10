// TODO
type Chainable<P = {}> = {
  option<K extends string, V>(
    key: K extends keyof P ? never : K,
    value: V
  ): Chainable<P & {[key in K]: V}>
  get(): P
}