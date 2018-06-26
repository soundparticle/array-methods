const assert = require('assert');
const { map, filter } = require('../lib/arrays');



describe('array methods', () => {
    // map array
    describe('map assumptions', () => {
        it('maps an array', () => {
            const numbers = [1, 2, 3]; 
            const mapped = numbers.map(n => n + 1);
            assert.deepEqual(mapped, [2, 3, 4]);
        });
    });
    describe('map', () => {
        it('maps numbers', () => {
            const numbers = [1, 2, 3]; 
            const mapped = map(numbers, (n) => n + 1);
            assert.deepEqual(mapped, [2, 3, 4]);
        });
    });
    // Filter arrays
    describe('filter assumptions', () => {
        it('filters an array', () => {
            const numbers = [1, 2, 3];
            const filtered = numbers.filter(n => n < 3);
            assert.deepEqual(filtered, [1, 2]);
        });
    });
    describe('filter', () => {
        it('filter numbers', () => {
            const numbers = [1, 2, 3];
            const filtered = filter(numbers, (n) => n < 3);
            assert.deepEqual(filtered, [1, 2]);
        });
    });
});