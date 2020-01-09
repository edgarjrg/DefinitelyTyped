import { Applicative } from './Applicative';
import { Chain } from './Chain';
export interface Monad<A> extends Applicative<A>, Chain<A> {}
