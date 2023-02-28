import { Relationship } from '../domain/relationship-model';

// HIGH-LEVEL MODULE
class RelationshipData {
    /**
     * @param {Relationship[]} list 
     */
    constructor(list = []) {
        this.list = list;
    }
}

export {
    RelationshipData
};
