type AppendArgument<Fn extends (...arg: any) => any, A> = Fn extends (
  ...arg: infer T
) => infer R
  ? (...arg: [...T, A]) => R
  : never
  