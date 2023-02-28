import { Person } from './domain/person-model';

import { RelationshipManager } from '.';

import { describe, test, expect } from '@jest/globals';

const makeRelationSut = () => new RelationshipManager();
const functionsRelationReference = makeRelationSut();

describe(RelationshipManager.name, () => {
    describe(functionsRelationReference.addParentChildRelation.name, () => {
        test('GIVEN a relationship manager WHEN added a parent and children THEN should respect the structure', () => {
            const sut = makeRelationSut();
            const parent = new Person();
            const firstChild = new Person();
            const secondChild = new Person();
            const firstRelationshipIndex = 0;
            const secondRelationshipIndex = 1;

            sut.addParentChildRelation(parent, firstChild);
            sut.addParentChildRelation(parent, secondChild);

            expect(sut.relationships[firstRelationshipIndex].to).toBe(firstChild);
            expect(sut.relationships[firstRelationshipIndex].from).toBe(parent);
            expect(sut.relationships[secondRelationshipIndex].to).toBe(secondChild);
            expect(sut.relationships[secondRelationshipIndex].from).toBe(parent);
        });
    });

    describe(functionsRelationReference.findAllChildrenOf.name, () => {
        test('GIVEN a researcher WHEN called by a parent name THEN should filter the relationships', () => {
            const sut = makeRelationSut();
            const firstParent = new Person('any_value');
            const secondParent = new Person('other_value');
            const firstChild = new Person();
            const secondChild = new Person();
            const thirdChild = new Person();
            const mockResultLength = 2;
            sut.addParentChildRelation(firstParent, firstChild);
            sut.addParentChildRelation(firstParent, thirdChild);
            sut.addParentChildRelation(secondParent, secondChild);

            const result = sut.findAllChildrenOf(firstParent.name);
            const allFromFirstParent = result.every((value) => value.from.name === firstParent.name);

            expect(result.length).toBe(mockResultLength);
            expect(allFromFirstParent).toBe(true);
        });
    });
});
