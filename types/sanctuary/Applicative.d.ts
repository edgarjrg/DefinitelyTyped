import { TR, TIS, TR2, TIS2 } from './TR';
import { Apply } from './Apply';

export interface Applicative<A> extends Apply<A> {}
export interface Applicative1<F extends TIS> extends Apply<F> {
    readonly 'fantasy-land/of': <A>(a: A) => TR<F, A>;
}
export interface Applicative2<F extends TIS2> extends Apply<F> {
    readonly 'fantasy-land/of': <R>(value: R) => TR2<F, any, R>;
}
