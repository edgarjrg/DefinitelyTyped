export type TK = any; // temporary type used in unfinished type definitions

export type Nullable<A> = A | null;

export interface StrMap<A> {
    [k: string]: A;
}

export type ValidNumber = number;
export type FiniteNumber = number;
export type NonZeroFiniteNumber = number;
export type Integer = number;
export type NonNegativeInteger = number;

export interface TypeRep {}

export type Radix =
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36;

export type RegexFlags = '' | 'g' | 'i' | 'm' | 'gi' | 'gm' | 'im' | 'gim';
