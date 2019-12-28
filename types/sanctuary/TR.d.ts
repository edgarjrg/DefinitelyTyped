// TI = Type Identifier
export interface TypeIdent<TI extends TIS | TIS2> {
  readonly '@@type': TI;
}
// TR = Type Identifier to Type Representative
export interface TItoTR<A> { }
export interface TItoTR2<L, R> { }

// TI = Type Identifiers
export type TIS = keyof TItoTR<any>;
export type TIS2 = keyof TItoTR2<any, any>;

// TR = Type Representatives
export type TR<TI extends TIS, A> = TI extends TIS ? TItoTR<A>[TI] : any;
export type TR2<TI extends TIS2, L, R> = TI extends TIS2 ? TItoTR2<L, R>[TI] : any;
