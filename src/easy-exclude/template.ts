type MyExclude<T, U> = T extends U ? never : T

/* 
  1. 接受2个参数：
      参数1：union
      参数2：任意  union
  2. 返回一个 union
  3. extends + 三元运算符 判断参数1是否继承于参数2，是赋值 never 排除，否则返回参数1

  注意：如果参数是泛型且代入参数的是联合类型时，extends就会使用 分配律
        type P<T> = T extends 'x' ? string : number
        type A = P<'x' | 'y'>
        相当于
        type A =  ('x' extends 'x' ? string : number) | ('y' extends 'x' ? string : number)
*/