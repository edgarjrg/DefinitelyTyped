import { ISetoid } from './Setoid';
import { StrMap } from './aliases';

export interface IOrd<A> extends ISetoid<A> {
    'fantasy-land/lte'(other: A): boolean;
}
//  `fantasy-land/lte` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, String,
//  Array, Arguments, and Object.
export type Ord<A> = null | undefined | boolean | number | Date | string | ArrayOrd<A> | StrMap<A> | IOrd<A>;
export interface ArrayOrd<A> extends Array<Ord<A>> {}
