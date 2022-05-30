type Length2Array<L extends number, A extends any[] = []> =
  A['length'] extends L
  ? [...A]
  : Length2Array<L, [...A, A['length']]>

type NumberRange<L extends number, H extends number> =
  Length2Array<H> extends [...Length2Array<L>, ...infer F]
  ? [...F, H] extends [...infer F1]
  ? F1[number] : never
  : never