import { describe, test, expect } from '@jest/globals';
import { CodeBuilder } from '.';

const CLASS_NAME = 'Person';
const NAME_ATRIBUTE = 'name';
const NAME_ATRIBUTE_VALUE = 'Peter';
const AGE_ATRIBUTE = 'age';
const AGE_ATRIBUTE_VALUE = 25;

const makeSut = () => new CodeBuilder(CLASS_NAME);
const functionsReference = makeSut();
const makeStub = () => functionsReference
    .addField(NAME_ATRIBUTE, NAME_ATRIBUTE_VALUE)
    .addField(AGE_ATRIBUTE, AGE_ATRIBUTE_VALUE);

describe(functionsReference.toString.name, () => {
    test('GIVEN a custom class builder WHEN creating one with name "Person" THEN after add attributes as below and stringify should result as expected', () => {
        const stub = makeStub();

        const result = stub.toString();

        expect(result).toBe('{"name":"Peter","age":25}');
    });

    test('GIVEN a custom class builder WHEN creating one with name "Person" THEN after add attributes as below and stringify should result as expected', () => {
        const stub = makeStub();

        const result = stub.build();

        expect(result).toEqual({ 'name': 'Peter', 'age': 25 });
        expect(result instanceof CodeBuilder).toBe(false);
        expect(result.constructor.name).toBe(CLASS_NAME);
    });
});
