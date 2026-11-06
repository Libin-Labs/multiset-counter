import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts repeated entries', () => {
  assert.deepEqual(
    [...api.countItems(['a', 'b', 'a'])],
    [
      ['a', 2],
      ['b', 1],
    ],
  );
});
test('preserves insertion order', () => {
  assert.deepEqual([...api.countItems(['z', 'a']).keys()], ['z', 'a']);
});
test('subtracts multiplicities', () => {
  assert.deepEqual(
    [...api.subtractCounts(api.countItems(['a', 'a', 'b']), api.countItems(['a']))],
    [
      ['a', 1],
      ['b', 1],
    ],
  );
});
test('drops zero counts', () => {
  assert.deepEqual([...api.subtractCounts(api.countItems(['x']), api.countItems(['x']))], []);
});
test('checks containment', () => {
  assert.equal(
    api.containsCounts(api.countItems(['a', 'a', 'b']), api.countItems(['a', 'b'])),
    true,
  );
});
test('detects insufficient count', () => {
  assert.equal(api.containsCounts(api.countItems(['a']), api.countItems(['a', 'a'])), false);
});
