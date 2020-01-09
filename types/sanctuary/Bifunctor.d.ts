import { TR2, TIS2 } from './TR';
import { Fn } from './function.';
import { Functor } from './Functor';

export interface Bifunctor<LA, LB> extends Functor<LB> {
    'fantasy-land/bimap'<LB>(p: Fn<LA, LB>): <RA, RB>(q: Fn<RA, RB>) => (r: Bifunctor<LA, RA>) => Bifunctor<LB, RB>;
}
export interface Bifunctor2<TI extends TIS2> extends Functor<TI> {
    'fantasy-land/bimap'<LA, RA, LB, RB>(this: TR2<TI, LA, RA>, p: Fn<LA, LB>, q: Fn<RA, RB>): TR2<TI, LB, RB>;
}
