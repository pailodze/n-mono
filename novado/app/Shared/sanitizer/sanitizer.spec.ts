import { describe, expect, it } from '@jest/globals';
import { sanitize } from '@/app/shared/sanitizer/sanitizer';

describe('sanitizer', () => {
    it('should sanitize an object and remove nullish values', () => {
        const inputData = {
            name: 'John Doe',
            age: null,
            address: {
                street: '123 Main St',
                city: null,
                zip: '12345',
            },
            hobbies: ['reading', null, 'coding'],
        };

        const expectedOutput = {
            name: 'John Doe',
            address: {
                street: '123 Main St',
                zip: '12345',
            },
            hobbies: ['reading', 'coding'],
        };

        const result = sanitize(inputData);

        expect(result).toStrictEqual(expectedOutput);
    });

    it('should handle arrays and remove nullish values', () => {
        const inputArray = ['apple', null, 'banana', ''];

        const expectedOutput = ['apple', 'banana'];

        const result = sanitize(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should handle nested arrays and objects', () => {
        const inputData = {
            name: 'Alice',
            details: {
                age: null,
                hobbies: ['painting', null, 'music'],
                address: {
                    street: '456 Oak St',
                    city: null,
                    zip: '67890',
                },
            },
        };

        const expectedOutput = {
            name: 'Alice',
            details: {
                hobbies: ['painting', 'music'],
                address: {
                    street: '456 Oak St',
                    zip: '67890',
                },
            },
        };

        const result = sanitize(inputData);

        expect(result).toEqual(expectedOutput);
    });

    it('should handle nested object in array', () => {
        const inputData = {
            name: 'Alice',
            details: {
                age: null,
                hobbies: [
                    'painting',
                    {
                        age: null,
                        fullName: {
                            firstName: null,
                            lastName: 'potter',
                        },
                    },
                    'music',
                ],
                address: {
                    street: '456 Oak St',
                    city: null,
                    zip: '67890',
                },
            },
        };

        const excpectedOutput = {
            name: 'Alice',
            details: {
                hobbies: [
                    'painting',
                    {
                        fullName: {
                            lastName: 'potter',
                        },
                    },
                    'music',
                ],
                address: {
                    street: '456 Oak St',
                    zip: '67890',
                },
            },
        };

        const result = sanitize(inputData);
        expect(result).toStrictEqual(excpectedOutput);
    });
});
