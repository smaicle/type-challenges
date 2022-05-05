type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never

/* 
  1. 接受1个参数：any[]
  2. 返回第一个元素

  infer只在为true的分支成立
*/