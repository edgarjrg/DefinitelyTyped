/// <reference types="node"/>
import {
  create,
  env,
  Maybe,
} from 'sanctuary';

const S = create({ checkTypes: true, env });

// Maybe
// Alt ✅
S.Nothing['fantasy-land/alt'](S.Nothing); // $ExpectType Maybe<never>
S.Just(1)['fantasy-land/alt'](S.Just(1)); // $ExpectType Maybe<number>
S.alt(S.Nothing)(S.Nothing); // $ExpectType Maybe<never>
S.alt(S.Just(1))(S.Nothing); // $ExpectType Maybe<number>
S.alt(S.Nothing)(S.Just(1)); // $ExpectType Maybe<number>
S.alt(S.Just(1))(S.Just(1)); // $ExpectType Maybe<number>
S.alt(S.Just(1))(S.Just('a')); // $ExpectError
// Alternative 🛠
// Applicative 🛠
S.of(S.Maybe)(4); // $ExpectType Maybe<number>
((): Maybe<number> => { // $ExpectType Maybe<number>
  const r = S.of(S.Maybe)(4); // $ExpectType Maybe<number>
  return r;
})();
// Apply 🛠
// Bifunctor ❌
// Category ❌
// Chain 🛠
// ChainRec 🛠
// Comonad ❌
// Contravariant ❌
// Extend 🛠
// Filterable 🛠
// Foldable 🛠
// Functor 🛠
// Group ❌
// Monad 🛠
// Monoid if ‘a’ satisfies Semigroup 🛠
// Ord if ‘a’ satisfies Ord 🛠
S.lte(S.Just(1))(S.Just(4)); // $ExpectType boolean
// S.Just(1)["fantasy-land/lte"](S.Just(4)); // $ExpectType string
S.lte(S.Just(1))(S.Just(4)); // $ExpectType boolean
// Plus 🛠
// Profunctor ❌
// Semigroup if ‘a’ satisfies Semigroup 🛠
// Semigroupoid ❌
// Setoid if ‘a’ satisfies Setoid 🛠
S.Just('a')["fantasy-land/equals"](S.Nothing);
S.equals(S.Just(1))(S.Just(4)); // $ExpectType boolean
// Showable
S.Just('a')["@@show"](); // $ExpectType string
S.show(S.Just(1)); // $ExpectType string
// Traversable 🛠
// ----
// General
const x: Maybe<number> = S.Just("X"); // $ExpectError
S.Just<string>("X"); // $ExpectType Maybe<string>
