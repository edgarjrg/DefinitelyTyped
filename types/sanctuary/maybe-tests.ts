/// <reference types="node"/>
import {
  create,
  env,
  Maybe,
} from 'sanctuary';

const S = create({ checkTypes: true, env });

// Maybe

S.of(S.Maybe)(4); // $ExpectType Maybe<number>
((): Maybe<number> => { // $ExpectType Maybe<number>
  const r = S.of(S.Maybe)(4); // $ExpectType Maybe<number>
  return r;
})();
const x: Maybe<number> = S.Just("X"); // $ExpectError
S.Just<string>("X"); // $ExpectType Maybe<string>

S.lte(S.Just(1))(S.Just(4)); // $ExpectType boolean
// S.concat(S.Just(1))(S.Just(4)); // $ExpectType boolean

// Maybe Nothing

// Maybe Just
S.Just('a')["@@show"](); // $ExpectType string
S.show(S.Just(1)); // $ExpectType string

S.Just('a')["fantasy-land/equals"](S.Nothing);
S.equals(S.Just(1))(S.Just(4)); // $ExpectType boolean

// S.Just(1)["fantasy-land/lte"](S.Just(4)); // $ExpectType string
S.lte(S.Just(1))(S.Just(4)); // $ExpectType boolean
