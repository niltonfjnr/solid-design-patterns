import { DOCUMENT_TYPES } from './constants';

class NotImplementedError extends Error {
    constructor(stack) {
        super();
        this.message = `${this.constructor.name} :: ${stack}`;
    }
}

class CustomMachine {
    processDocument() {
        throw new NotImplementedError(this.constructor.name);
    }
}

class CustomDocument {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
}

class DigitalDocument extends CustomDocument {
    constructor(content) {
        super(DOCUMENT_TYPES.DIGITAL, content);
    }
}

class PrintedDocument extends CustomDocument {
    constructor(content) {
        super(DOCUMENT_TYPES.PRINTED, content);
    }
}

class ScannerMachine extends CustomMachine {
    /**
     * @param {CustomDocument} document 
     */
    processDocument(document) {
        return `SCANNED :: ${document.type} | ${document.content}`;
    }
}

class PrinterMachine extends CustomMachine {
    /**
     * @param {CustomDocument} document 
     */
    processDocument(document) {
        return `PRINTED :: ${document.type} | ${document.content}`;
    }
}

export {
    NotImplementedError,
    CustomMachine,
    CustomDocument,
    DigitalDocument,
    PrintedDocument,
    ScannerMachine,
    PrinterMachine,
};
