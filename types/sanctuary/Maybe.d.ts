import { TypeIdent } from './TR';
import { Setoid1 } from './Setoid';
import { Applicative1 } from './Applicative';
import { Showable } from './Showable';
// Maybe
export type MaybeTI = 'sanctuary-maybe/Maybe@1';
declare module './TR' {
    interface TItoTR<A> {
        'sanctuary-maybe/Maybe@1': Maybe<A>;
    }
}
export type Nothing = TypeIdent<MaybeTI> &
    Applicative1<MaybeTI> &
    Showable &
    Setoid1 & {
        constructor: MaybeTypeRep;
        isNothing: true;
        isJus: false;
    };
export type Just<A> = TypeIdent<MaybeTI> &
    Applicative1<MaybeTI> &
    Setoid1 &
    Showable & {
        constructor: MaybeTypeRep;
        readonly value: A;
        isNothing: false;
        isJus: true;
    };
export type Maybe<A> = Nothing | Just<A>;
export interface MaybeTypeRep {
    Just<A = never>(value: A): Maybe<A>;
    Nothing(): Maybe<never>;
    'fantasy-land/of': MaybeTypeRep['Just'];
}
