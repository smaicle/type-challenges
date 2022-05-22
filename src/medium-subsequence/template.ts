type Subsequence<T extends any[], K extends any[] = []> = T extends [infer L, ...infer R]
  ? Subsequence<
      R extends any[] ? R : [],
      K | [...K, L]
    >
  : K