import { Functor, Functor1 } from './Functor';
import { TIS, TR } from './TR';
export interface Alt<A> extends Functor<A> {}

export interface Alt1<TI extends TIS> extends Functor1<TI> {
    'fantasy-land/alt'<A>(this: TR<TI, A>, other: TR<TI, A>): TR<TI, A>;
}
