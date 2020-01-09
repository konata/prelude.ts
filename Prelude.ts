namespace Std {
  export type Match<F, S> = F extends S ? (S extends F ? true : false) : false
  export type Overwrite<S, O extends any> = { [K in keyof S]: O[K] }
}

namespace Tuple {
  export type Define = any[] & { '0': any }
  export type Is<T> = T extends Define ? true : false
  export type AssertTuple<T> = T extends Define ? T : never
  export type Length<T extends Define> = T['length']
  export type LengthMatch<F extends Define, S extends Define> = Length<F> extends Length<S> ? true : false
  export type Head<T extends Define> = T[0]
  export type Tail<T extends Define> = ((..._: T) => void) extends (head: any, ...tail: infer R) => void ? R : never
  export type Prepend<T extends Define, E> = ((_: E, ...__: T) => void) extends ((..._: infer R) => void) ? R : never
  export type Append<T extends Define, E> = Std.Overwrite<Prepend<T, Define>, T & { [_: string]: E }>
}

namespace Array {
  type Define = any[]
  type Is<T extends Define> = T extends { '0': any } ? false : true
}

namespace Algebraic {
  type Union2Intersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
}



