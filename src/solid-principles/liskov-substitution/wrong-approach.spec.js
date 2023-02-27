
import { Rectangle, Square } from './wrong-approach';

import { describe, test, expect } from '@jest/globals';

describe(Rectangle.name, () => {
    const reactangleWidth = 2;
    const reactangleHeigth = 3;

    const makeSut = () => new Rectangle(reactangleWidth, reactangleHeigth);
    const functionsReference = makeSut();

    describe(functionsReference.area.name, () => {
        test('GIVEN a rectangle WHEN getting area THEN should return the value', () => {
            const sut = makeSut();
            const mockResult = 6;

            const result = sut.area;

            expect(result).toBe(mockResult);
        });
        test('GIVEN a rectangle WHEN setting width and/or heigth THEN should modify the value(s)', () => {
            const sut = makeSut();
            const mockWidthValue = 4;
            const mockHeigthValue = 6;
            const mockAreaResult = 24;

            sut.width = mockWidthValue;
            sut.heigth = mockHeigthValue;


            expect(sut.width).toBe(mockWidthValue);
            expect(sut.heigth).toBe(mockHeigthValue);
            expect(sut.area).toBe(mockAreaResult);
        });
    });
});

describe(Square.name, () => {
    const size = 2;

    const makeSut = () => new Square(size);
    const functionsReference = makeSut();

    describe(functionsReference.area.name, () => {
        test('GIVEN a rectangle WHEN getting area THEN should return the value', () => {
            const sut = makeSut();
            const mockResult = 4;

            const result = sut.area;

            expect(result).toBe(mockResult);
        });
        test('GIVEN a rectangle WHEN setting width and/or heigth THEN should modify the value(s)', () => {
            const sut = makeSut();
            const mockWidthValue = 4;
            const mockHeigthValue = 6;
            const mockAreaResult = 36;

            sut.width = mockWidthValue;
            sut.heigth = mockHeigthValue;

            expect(sut.width).toBe(mockHeigthValue);
            expect(sut.heigth).toBe(mockHeigthValue);
            expect(sut.area).toBe(mockAreaResult);
        });
    });
});
