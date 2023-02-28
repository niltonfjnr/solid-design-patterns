import { Person, RelationshipManager, Research } from '.';

import { describe, test, expect } from '@jest/globals';

const makeRelationSut = () => new RelationshipManager();
const functionsRelationReference = makeRelationSut();

const makeResearchSut = (relationshipManager) => new Research(relationshipManager);
const functionsResearchReference = makeResearchSut();

describe(RelationshipManager.name, () => {
    describe(functionsRelationReference.add.name, () => {
        test('GIVEN a relationship manager WHEN added a parent and children THEN should respect the structure', () => {
            const sut = makeRelationSut();
            const parent = new Person();
            const firstChild = new Person();
            const secondChild = new Person();
            const firstRelationshipIndex = 0;
            const secondRelationshipIndex = 1;

            sut.add(parent, firstChild);
            sut.add(parent, secondChild);

            expect(sut.relationships[firstRelationshipIndex].to).toBe(firstChild);
            expect(sut.relationships[firstRelationshipIndex].from).toBe(parent);
            expect(sut.relationships[secondRelationshipIndex].to).toBe(secondChild);
            expect(sut.relationships[secondRelationshipIndex].from).toBe(parent);
        });
    });
});

describe(Research.name, () => {
    describe(functionsResearchReference.findAllChildrenOf.name, () => {
        test('GIVEN a researcher WHEN called by a parent name THEN should filter the relationships', () => {
            const mock = makeRelationSut();
            const firstParent = new Person('any_value');
            const secondParent = new Person('other_value');
            const firstChild = new Person();
            const secondChild = new Person();
            const thirdChild = new Person();
            const mockResultLength = 2;
            mock.add(firstParent, firstChild);
            mock.add(firstParent, thirdChild);
            mock.add(secondParent, secondChild);
            const sut = makeResearchSut(mock.relationships);

            const result = sut.findAllChildrenOf(firstParent.name);
            const allFromFirstParent = result.every((value) => value.from.name === firstParent.name);

            expect(result.length).toBe(mockResultLength);
            expect(allFromFirstParent).toBe(true);
        });
    });
});
