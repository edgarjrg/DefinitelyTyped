import { StrMap } from './aliases';

export interface ISetoid<A> {
    'fantasy-land/equals'(other: A): boolean;
}
export interface Setoid1 {
    'fantasy-land/equals'<A>(this: A, other: A): boolean;
}
//  `fantasy-land/equals` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, RegExp, String,
//  Array, Arguments, Error, Object, and Function.
export type Setoid<A> =
    | null
    | undefined
    | boolean
    | number
    | Date
    | RegExp
    | string
    | ArraySetoid<A>
    | Error
    | StrMap<A>
    // tslint:disable-next-line:ban-types
    | Function
    | ISetoid<A>;

export interface ArraySetoid<A> extends Array<Setoid<A>> {}
