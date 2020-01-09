import { TypeIdent } from './TR';
import { Bifunctor2 } from './Bifunctor';
// Either
export type EitherTI = 'sanctuary-either/Either@1';
declare module './TR' {
    interface TItoTR2<L, R> {
        'sanctuary-either/Either@1': Either<L, R>;
    }
}
export interface Right<R> extends Bifunctor2<EitherTI>, TypeIdent<EitherTI> {
    constructor: EitherTypeRep;
    readonly value: R;
}
export interface Left<L = never> extends Bifunctor2<EitherTI>, TypeIdent<EitherTI> {
    constructor: EitherTypeRep;
    readonly value: L;
}
export interface EitherTypeRep {
    Left<L = never>(value: L): Either<L, never>;
    Right<R = never>(value: R): Either<never, R>;
    'fantasy-land/of': EitherTypeRep['Right'];
}
export type Either<L, R> = Left<L> | Right<R>;
