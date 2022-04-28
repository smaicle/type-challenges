type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// type MyOmit<T, K extends keyof T> = {
//   [P in K]: T[P]
// }


/* 
  1. 接受2个参数：
      参数1：interface 或 type
      参数2：union 且成员是参数1的属性
            所以用 keyof 获得参数2的联合类型，用 extends 约束参数2只能是参数1的属性
  2. 返回一个对象结构 {}
  3. 遍历参数2的联合类型 [P in K]，赋值 T[P]
*/