type Merge<T> = {
  [P in keyof T]: T[P]
}

type AppendToObject<T extends object, U extends string, V> = Merge<
  {[P in keyof T]: T[P]} & {[P in U]: V}
>