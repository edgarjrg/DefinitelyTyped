export type Thunk<A> = () => A;

export type Fn<A, B> = (a: A) => B;
export type Fn2<A, B, C> = (a: A) => (b: B) => C;
export type Fn3<A, B, C, D> = (a: A) => (b: B) => (c: C) => D;
export type Fn4<A, B, C, D, E> = (a: A) => (b: B) => (c: C) => (d: D) => E;
export type Fn5<A, B, C, D, E, F> = (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;
export type Fn2_<A, B, C> = (a: A, b: B) => C;
export type Fn3_<A, B, C, D> = (a: A, b: B, c: C) => D;
export type Fn4_<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
export type Fn5_<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;

export type Predicate<A> = (a: A) => boolean;
