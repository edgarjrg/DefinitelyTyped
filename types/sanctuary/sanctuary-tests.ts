/// <reference types="node"/>

import * as assert from "assert";
import { create, env, Either } from 'sanctuary';

const checkTypes = process.env["NODE_ENV"] !== "production";
const S = create({ checkTypes, env });

assert.equal(S.map(S.concat('@'))(['foo', 'bar', 'baz']), ["@foo", "@bar", "@baz"]);
assert.equal(S.reduce(S.add)(0)([1, 2, 3, 4, 5]), 15);
assert.equal(S.flip(S.concat)('foo')('bar'), "barfoo");
assert.equal(S.map(S.fst)(S.zip([1, 2])(['a'])), [1]);
assert.equal(S.zipWith(a => b => [a, b])([1, 2, 3])(['a', 'b', 'c']), [[1, 'a'], [2, 'b'], [3, 'c']]);

S.of(Array)(4); // $ExpectType number[]
S.of(Function)(4)(null); // $ExpectType number
S.of(S.Either)(4); // $ExpectType Either<never, number>

S.id(Function)(42); // Category<any>

S.bimap(S.toUpper)(Math.sqrt)(S.Pair('foo')(64)); // $ExpectType Pair<string, number>

S.Left("X"); // $ExpectType Either<string, never>

const y: Either<number, number> = S.Left("X"); // $ExpectError

// Either
S.Left('foo')['fantasy-land/bimap'](S.toUpper, Math.sqrt); // $ExpectType Either<string, number>
S.Left('foo')['fantasy-land/bimap'](Math.sqrt, S.toUpper); // $ExpectError
S.Right('foo')['fantasy-land/bimap'](Math.sqrt, S.toUpper); // $ExpectType Either<number, string>
S.Right('foo')['fantasy-land/bimap'](S.toUpper, Math.sqrt); // $ExpectError

S.bimap(S.toUpper)(Math.sqrt)(S.Left('foo')); // $ExpectType Either<string, number>
S.bimap(S.toUpper)(Math.sqrt)(S.Left('foo')); // $ExpectType Either<string, number>
