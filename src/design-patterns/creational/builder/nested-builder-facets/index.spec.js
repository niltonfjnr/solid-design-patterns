import { Person } from './person-model';
import { PersonBuilder } from '.';

import { describe, test, expect } from '@jest/globals';

const makeSut = () => new PersonBuilder();
const functionsReference = makeSut();
const anualSalary = 123000;

describe(PersonBuilder.name, () => {
    describe(functionsReference.build.name, () => {
        test('GIVEN some persons data WHEN using builder THEN after built and stringified should return a string as expected below', () => {
            const builder = makeSut();
            const person = builder
                .lives().at('123 London Road').in('London').withPostcode('SW12BC')
                .works().at('Fabrikam').asA('Engineer').earning(anualSalary)
                .build();

            const result = person.toString();

            expect(builder instanceof PersonBuilder).toBe(true);
            expect(person instanceof Person).toBe(true);
            expect(result).toBe('Person lives at 123 London Road, London, SW12BC\nand works at Fabrikam as a Engineer earning 123000');
        });
    });
});
