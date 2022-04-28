type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/* 
  1. 接受1个参数：interface 或 type
  2. 返回一个对象结构 {}
  3. 遍历参数的联合类型 [P in keyof K]，赋值 T[P]
  4. 给每个属性添加 readonly
*/