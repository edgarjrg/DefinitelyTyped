import { Functor } from './Functor';
import { Foldable } from './Foldable';
export interface Traversable<A> extends Functor<A>, Foldable<A> {}
