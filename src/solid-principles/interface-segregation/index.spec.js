
import { CustomDocument, CustomMachine, DigitalDocument, NotImplementedError, PrintedDocument, PrinterMachine, ScannerMachine } from '.';
import { DOCUMENT_TYPES } from './constants';

import { describe, test, expect } from '@jest/globals';

describe(CustomMachine.name, () => {
    const makeSut = () => new CustomMachine();
    const stubPrefix = 'processed data :: ';
    const makeStub = () => {
        class ImplementedMachine extends CustomMachine {
            processDocument(data) {
                return `${stubPrefix} ${data}`;
            }
        };

        return new ImplementedMachine();
    };
    const functionsReference = makeSut();

    describe(functionsReference.processDocument.name, () => {
        test('GIVEN a not implemented class WHEN calling THEN should throw an error', () => {
            const sut = makeSut();

            try {
                sut.processDocument();

            } catch (error) {
                expect(error instanceof NotImplementedError).toBe(true);
            }

        });
        test('GIVEN an implemented class WHEN calling THEN should process the document', () => {
            const stub = makeStub();
            const mockData = 'any_data';

            const result = stub.processDocument(mockData);

            expect(result).toBe(`${stubPrefix} ${mockData}`);
        });
    });
});

describe(CustomDocument.name, () => {
    const makeSut = (type, content) => new CustomDocument(type, content);
    const functionsReference = makeSut();

    describe(functionsReference.name, () => {
        test('GIVEN a custom document class WHEN constructed THEN should respect the structure', () => {
            const mockType = 'any_type';
            const mockContent = 'any_content';
            const sut = makeSut(mockType, mockContent);

            const { type, content } = sut;

            expect(type).toBe(mockType);
            expect(content).toBe(mockContent);
        });
    });
});

describe(PrinterMachine.name, () => {
    const makeSut = () => new PrinterMachine();
    const functionsReference = makeSut();

    describe(functionsReference.processDocument.name, () => {
        test('GIVEN an implemented class WHEN calling THEN should process the document', () => {
            const stub = makeSut();
            const mockContent = 'any_digital_content';
            const mock = new DigitalDocument(mockContent);

            const result = stub.processDocument(mock);

            expect(result).toBe(`PRINTED :: ${DOCUMENT_TYPES.DIGITAL} | ${mockContent}`);
        });
    });
});

describe(ScannerMachine.name, () => {
    const makeSut = () => new ScannerMachine();
    const functionsReference = makeSut();

    describe(functionsReference.processDocument.name, () => {
        test('GIVEN an implemented class WHEN calling THEN should process the document', () => {
            const stub = makeSut();
            const mockContent = 'any_printed_content';
            const mock = new PrintedDocument(mockContent);

            const result = stub.processDocument(mock);

            expect(result).toBe(`SCANNED :: ${DOCUMENT_TYPES.PRINTED} | ${mockContent}`);
        });
    });
});
