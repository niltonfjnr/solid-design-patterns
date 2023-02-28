import { writeFileSync } from 'fs';

const INIT_CONTROL_VALUE = 0;
const IDENTATION = 2;

class JournalModel { }

class AddJournal {
    addEntryToMemory(value, manager) {
        const currentKey = ++manager._count;
        manager.entries[currentKey] = value;
        ++manager._length;
        return currentKey;
    }
    addEntryToDatabase(value, collectionName, manager) {
        // some logic
        this.addEntryToMemory(value, manager);
    }
}

class RemoveJournal {
    removeEntryFromMemory(key, manager) {
        delete manager.entries[key];
        --manager._length;
    }
    removeEntryFromDatabase(key, collectionName, manager) {
        // some logic
        this.removeEntryFromMemory(key, manager);
    }
}

class StringifyJournal {
    toJSONString(entries) {
        return JSON.stringify(entries, '\n', IDENTATION);
    }
    toSimpleString(entries) {
        return Object.values(entries).join('\n');
    }
}

class StorageJournal {
    /**
     * @param {string} filename 
     * @param {string} data 
     */
    saveToJsonFile(filename, data) {
        writeFileSync(filename, data);
    }
    /**
     * @param {string} collectionName 
     * @param {Object[]} data 
     */
    saveToDatabase(collectionName, data) {
        // some logic
    }
}

class JournalManager {
    _count = INIT_CONTROL_VALUE;
    _length = INIT_CONTROL_VALUE;

    constructor() {
        this.entries = new JournalModel();
        this.addJournal = new AddJournal();
        this.removeJournal = new RemoveJournal();
        this.stringifyJournal = new StringifyJournal();
        this.storageJournal = new StorageJournal();
    }
    addEntry(value) {
        return this.addJournal.addEntryToMemory(value, this);
    }
    removeEntry(key) {
        this.removeJournal.removeEntryFromMemory(key, this);
    }
    toString() {
        return this.stringifyJournal.toJSONString(this.entries);
    }
    save(filename) {
        this.storageJournal.saveToJsonFile(filename, this.toString());
    }
}

export {
    JournalManager
};
