import { JournalManager } from '.';

import { describe, it, expect } from '@jest/globals';
import { existsSync, rmSync } from 'fs';

const makeSut = () => new JournalManager();
const functionsReference = makeSut();

describe(JournalManager.name, () => {
    it(functionsReference.addEntry.name, () => {
        const sut = makeSut();
        const expectedCount = 2;

        sut.addEntry('any_value');
        const result = sut.addEntry('other_value');

        expect(result).toBe(expectedCount);
    });
    it(functionsReference.toString.name, () => {
        const sut = makeSut();
        sut.addEntry('any_value');
        sut.addEntry('other_value');
        const mockResultValue = '{\n  "1": "any_value",\n  "2": "other_value"\n}';

        const result = sut.toString();

        expect(result).toBe(mockResultValue);
    });
    it(functionsReference.save.name, () => {
        const sut = makeSut();
        const fileReference = './any.json';
        sut.addEntry('any_value');
        sut.addEntry('other_value');

        sut.save(fileReference);
        const exists = existsSync(fileReference);
        rmSync(fileReference);

        expect(exists).toBe(true);
    });
}); 
