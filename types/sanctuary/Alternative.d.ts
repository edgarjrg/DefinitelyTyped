import { Applicative } from './Applicative';
import { Plus } from './Plus';
export interface Alternative<A> extends Applicative<A>, Plus<A> {}
