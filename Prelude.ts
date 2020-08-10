namespace Std {
  export type Match<F, S> = F extends S ? (S extends F ? true : false) : false;
  export type Overwrite<S, O extends any> = Omit<S, keyof O> &
    { [K in keyof S & keyof O]: O[K] };
}

namespace Tuple {
  export type Define = any[] & { 0: any };
  export type Is<T> = T extends Define ? true : false;
  export type Assert<T> = T extends Define ? T : never;
  export type Length<T extends Define> = T["length"];
  export type LengthMatch<F extends Define, S extends Define> = Length<
    F
  > extends Length<S>
    ? true
    : false;

  export type Head<T extends Define> = T[0];
  export type Tail<T extends Define> = T extends [any, ...infer T] ? T : never;

  export type Prepend<T extends Define, E> = [E, ...T]
  export type Append<T extends Define, E> = [...T, E]

  export type ToUnion<T extends Define> = T extends Array<infer E> ? E : never;

  // required(version >= 4.0)
  export type Init<T extends Define> = T extends [...infer I, any]
    ? I
    : never;
  export type Last<T extends Define> = T extends [...infer _, infer L]
    ? L
    : never;

  export type Reverse<T extends any[], R extends any[] = []> = ReturnType<
    T extends [infer F, ...infer L] ? () => Reverse<L, [F, ...R]> : () => R
  >;
}

namespace Function {
  export type Callable<A extends any[] = [], R = void> = (..._: A) => R;
}

namespace Array {
  export type Define = any[];
  export type Is<T extends Define> = T extends { 0: any } ? false : true;
}

namespace Union {
  export type ToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;
}

namespace Intersection {
  export type ToUnion<I> = never;
  export type ToTuple<I> = never;
}
