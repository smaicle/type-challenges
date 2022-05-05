type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}

/* 
  1. 接受1个参数：tuple
  2. 返回一个对象结构 {}
  3. 遍历参数数组 [P in T[number]]，赋值 P
*/