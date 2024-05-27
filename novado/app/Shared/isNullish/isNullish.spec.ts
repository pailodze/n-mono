import { describe, it, expect } from '@jest/globals';
import { isNullish } from './isNullish';

describe('isNullish', () => {
    it('should return true for nullish object', () => {
        const nullishObject = { key1: null, key2: '', key3: undefined };
        expect(isNullish(nullishObject)).toBe(true);
    });

    it('should return false for non-nullish object', () => {
        const nonNullishObject = { key1: 'value1', key2: 0, key3: false };
        expect(isNullish(nonNullishObject)).toBe(false);
    });

    it('should return true for nullish array', () => {
        const nullishArray = [null, '', undefined];
        expect(isNullish(nullishArray)).toBe(true);
    });

    it('should return false for non-nullish array', () => {
        const nonNullishArray = ['item1', 0, false];
        expect(isNullish(nonNullishArray)).toBe(false);
    });

    it('should return false for non-nullish mixed object and array', () => {
        const mixedNonNullish = { key1: 'value1', key2: [0, false], key3: true };
        expect(isNullish(mixedNonNullish)).toBe(false);
    });
});
