import { PersonFactory } from '.';

import { describe, test, expect } from '@jest/globals';

const makeSut = () => new PersonFactory();
const functionsReference = makeSut();

describe(functionsReference.createPerson.name, () => {
    test('GIVEN a person factory WHEN using multiple instances THEN should maintain only one list', () => {
        const firstSut = makeSut();
        const secondSut = makeSut();
        const firstIndex = 0;
        const firstName = 'Peter';
        const secondIndex = 1;
        const secondName = 'John';
        const thirdIndex = 2;
        const thirdName = 'Mary';

        const firstResult = firstSut.createPerson(firstName);
        const secondResult = secondSut.createPerson(secondName);
        const thirdResult = firstSut.createPerson(thirdName);

        expect(firstResult.id).toBe(firstIndex);
        expect(firstResult.name).toBe(firstName);
        expect(secondResult.id).toBe(secondIndex);
        expect(secondResult.name).toBe(secondName);
        expect(thirdResult.id).toBe(thirdIndex);
        expect(thirdResult.name).toBe(thirdName);
    });
});
