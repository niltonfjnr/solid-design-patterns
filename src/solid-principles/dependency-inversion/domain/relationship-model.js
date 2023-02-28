import { Person } from './person-model';

// HIGH-LEVEL MODULE
class Relationship {
    /**
     * @param {Person} parent 
     * @param {string} relationshipType 
     * @param {Person} child 
     */
    constructor(parent, relationshipType, child) {
        this.from = parent;
        this.type = relationshipType;
        this.to = child;
    }
}

export {
    Relationship
};
