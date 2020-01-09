import { TypeIdent } from './TR';
import { IOrd } from './Ord';
import { Bifunctor2 } from './Bifunctor';
// Pair
export type PairTI = 'sanctuary-pair/Pair@1';
declare module './TR' {
    interface TItoTR2<L, R> {
        'sanctuary-pair/Pair@1': Pair<L, R>;
    }
}
export interface PairTypeRep {}
export interface Pair<A, B> extends IOrd<Pair<A, B>>, Bifunctor2<PairTI>, TypeIdent<PairTI> {
    constructor: PairTypeRep;
}
