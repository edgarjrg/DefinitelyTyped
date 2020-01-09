import { Maybe } from './Maybe';
export interface MatchObj {
    match: string;
    groups: Array<Maybe<string>>;
}
