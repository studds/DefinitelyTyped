import expect = require('unexpected');

expect('orange', 'to be', 'orange');
expect('orange', 'not to be', 'blue');
expect('orange', 'to be one of', ['blue', 'orange']);
expect({ a: 1 }, 'to equal', { a: 1 });
expect({ a: 1 }, 'not to equal', { a: 2 });
expect(undefined, 'not to be undefined');
expect(10, 'to be defined');
expect(false, 'to be falsy');
expect(true, 'not to be falsy');
expect(false, 'not to be truthy');
expect(true, 'to be truthy');
expect(null, 'to be null');
expect(undefined, 'not to be null');
expect('something', 'to satisfy', () => true);

// STRING

expect('a', 'to be non-empty');
expect('', 'to be empty');
expect('a', 'not to be empty');
expect('a', 'to start with', 'a');
expect('a', 'to end with', 'a');
expect('a', 'to contain', 'a');
expect('a', 'to match', /a/);
expect('a', 'to have length', 1);

// NUMBER
expect(5, 'not to be NaN');
expect(5, 'to be close to', 5);
expect(5, 'to be finite');
expect(Infinity, 'to be infinite');
expect(5, 'to be less than', 10);
expect(5, 'to be less than or equal to', 10);
expect(5, 'to be greater than', 1);
expect(5, 'to be greater than or equal to', 1);
expect(5, 'to be positive');
expect(-5, 'to be negative');
expect(5, 'to be within', 0, 10);

// FUNCTION
expect(() => true, 'not to throw');
expect(() => true, 'not to throw', /error/);

// BOOLEAN
expect(true, 'to be true');
expect(false, 'to be false');

// OBJECT
expect({}, 'to be canonical');
expect({}, 'not to have a key', 'a');
expect({}, 'not to have keys', 'a', 'b');
expect({}, 'to have a value satisfying', { a: 1 });
expect({}, 'to have properties', ['a', 'b']);
expect({}, 'to have own properties', ['a', 'b']);
expect({}, 'to have values satisfying', () => true);

// PROMISES
expect(Promise.resolve('ok'), 'to be fulfilled');
expect(Promise.resolve('ok'), 'to be fulfilled with', 'ok');
expect(Promise.resolve('ok'), 'to be fulfilled with value exhaustively satisfying', { a: 1 });
expect(Promise.reject(new Error('not ok')), 'to be rejected');
expect(Promise.reject(new Error('not ok')), 'to be rejected with', /not ok/);

// ERROR
expect(new Error('not ok'), 'to have message', 'not ok');

// ARRAY
expect([], 'to be empty');
expect([], 'to contain', ['a']);
expect([], 'to have an item satisfying', () => true);
expect([], 'to have items exhaustively satisfying', () => true);
expect([], 'to have length', 0);

expect.fail(new Error('bad'));
expect.clone();
expect.addAssertion('what what', () => undefined);
expect.freeze();
