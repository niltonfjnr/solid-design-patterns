import { Product, ProductFilter, Specification, SpecificationCombiner } from '.';
import { ATTRIBUTES_NAMES, COLORS, SIZES } from './constants';

import { describe, test, expect } from '@jest/globals';

const makeMock = () => {
    const apple = new Product('Apple', COLORS.GREEN, SIZES.SMALL);
    const tree = new Product('Tree', COLORS.GREEN, SIZES.LARGE);
    const house = new Product('House', COLORS.BLUE, SIZES.LARGE);
    const products = [apple, tree, house];
    return products;
};

const makeSut = () => new ProductFilter();
const functionsReference = makeSut();

describe(functionsReference.name, () => {
    describe(functionsReference.filterBySpecification.name, () => {
        test(`GIVEN a defined set os products WHEN filtered by ${COLORS.GREEN} THEN should return a list with this color`, () => {
            const sut = makeSut();
            const filterSpecifications = new SpecificationCombiner(
                new Specification(COLORS.GREEN, ATTRIBUTES_NAMES.COLOR),
            );
            const mock = makeMock();

            const result = sut.filterBySpecification(mock, filterSpecifications);

            expect(result).toEqual([
                { 'color': 'green', 'name': 'Apple', 'size': 'small' },
                { 'color': 'green', 'name': 'Tree', 'size': 'large' }
            ]);
        });

        test(`GIVEN a defined set os products WHEN filtered by ${COLORS.GREEN} and ${SIZES.LARGE} THEN should return a list with this color`, () => {
            const sut = makeSut();
            const mock = makeMock();
            const filterSpecifications = new SpecificationCombiner(
                new Specification(COLORS.GREEN, ATTRIBUTES_NAMES.COLOR),
                new Specification(SIZES.LARGE, ATTRIBUTES_NAMES.SIZE),
            );

            const result = sut.filterBySpecification(mock, filterSpecifications);

            expect(result).toEqual([
                { 'color': 'green', 'name': 'Tree', 'size': 'large' }
            ]);
        });
    });
});
