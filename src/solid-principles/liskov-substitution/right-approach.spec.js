
import { Quadrilateral } from './right-approach';

import { describe, test, expect } from '@jest/globals';

describe(Quadrilateral.name, () => {
    const reactangleWidth = 2;
    const reactangleHeigth = 3;
    const squareSize = 2;

    const makeSut = () => ({
        rectangle: new Quadrilateral(reactangleWidth, reactangleHeigth),
        square: new Quadrilateral(squareSize),
    });
    const functionsReference = makeSut();

    describe(functionsReference.rectangle.area.name, () => {
        test('GIVEN quadrilaterals WHEN getting area THEN should return the values below', () => {
            const sut = makeSut();
            const mockRectangleResult = 6;
            const mockSquareResult = 4;
            
            const { rectangle, square } = sut;

            expect(rectangle.area).toBe(mockRectangleResult);
            expect(rectangle.isSquare()).toBe(false);
            expect(square.area).toBe(mockSquareResult);
            expect(square.isSquare()).toBe(true);
        });
        test('GIVEN quadrilaterals WHEN setting width and/or heigth THEN should modify the value(s)', () => {
            const sut = makeSut();
            const { rectangle, square } = sut;
            const mockWidthValue = 4;
            const mockHeigthValue = 6;
            const mockResult = 24;
            
            rectangle.width = mockWidthValue;
            rectangle.heigth = mockHeigthValue;
            square.width = mockWidthValue;
            square.heigth = mockHeigthValue;

            expect(rectangle.area).toBe(mockResult);
            expect(rectangle.isSquare()).toBe(false);
            expect(square.area).toBe(mockResult);
            expect(square.isSquare()).toBe(false);
        });
    });
});
