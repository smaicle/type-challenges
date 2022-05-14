type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...T, L]> : T['length']

/* 
  定义一个空数组 []
  将字符串逐个放到数组中
  返回数组长度 T['length']
*/