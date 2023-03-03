import { Point, PointFactory } from '.';

import { describe, test, expect } from '@jest/globals';

const NUMBER_TWO = 2;
const NUMBER_THREE = 3;

const makeSut = () => PointFactory;
const functionsReference = makeSut();

describe(functionsReference.name, () => {
    describe(new functionsReference().newCartesianPoint.name, () => {
        test('GIVEN a cartesian point data WHEN building an object THEN should use the especilized factory method and expect the result as below', () => {
            const sut = makeSut();
            const sutInstance = new sut();

            const result = sutInstance.newCartesianPoint(NUMBER_TWO, NUMBER_THREE);

            expect(result instanceof Point).toBe(true);
            expect(result.x).toBe(NUMBER_TWO);
            expect(result.y).toBe(NUMBER_THREE);
        });
    });

    describe(functionsReference.newPolarPoint.name, () => {
        test('GIVEN a polar point data WHEN building an object THEN should use the especilized factory method and expect the result as below', () => {
            const sut = makeSut();

            const result = sut.newPolarPoint(NUMBER_TWO, NUMBER_THREE);

            expect(result instanceof Point).toBe(true);
            expect(result.x).toBe(NUMBER_TWO * Math.cos(NUMBER_THREE));
            expect(result.y).toBe(NUMBER_TWO * Math.sin(NUMBER_THREE));
        });
    });
});
