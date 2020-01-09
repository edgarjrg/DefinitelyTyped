import { TIS, TR, TIS2, TR2 } from './TR';
import { Fn } from './function';

export interface Functor<A> {}

export interface Functor1<TI extends TIS> {
    'fantasy-land/map'<A, B>(this: TR<TI, A>, p: Fn<A, B>): TR<TI, B>;
}

export interface Functor1<TI extends TIS> {
    'fantasy-land/map'<A, B>(this: TR<TI, A>, p: Fn<A, B>): TR<TI, B>;
}

export interface Functor2<TI extends TIS2> {
    'fantasy-land/map'<L, RA, RB>(this: TR2<TI, L, RA>, p: Fn<RA, RB>): TR2<TI, L, RB>;
}
