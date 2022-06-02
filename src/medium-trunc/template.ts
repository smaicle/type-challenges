type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer R}` ? F : `${T}`;