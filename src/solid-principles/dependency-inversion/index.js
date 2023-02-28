import { Person } from './domain/person-model';

import { AddRelationshipData } from './data/add-relationship-data';
import { FilterRelationshipData } from './data/filter-relationship-data';
import { GetRelationshipData } from './data/get-relationship-data';
import { RelationshipData } from './data/relationship-data';

// MAIN-LEVEL MODULE
// TRY TO TURN A LOW LEVEL MODULE INTO A HIGH ONE SO IMPLEMENTATIONS ARE SEGREGATED AND AFFECT LAYER SHOLLOWER AS POSSIBLE
class RelationshipManager {
    /**
     * @param {RelationshipData} relationshipData 
     */
    constructor(relationshipData = new RelationshipData()) {
        this.relationshipData = relationshipData;
        this.addRelationshipData = new AddRelationshipData();
        this.filterRelationshipData = new FilterRelationshipData();
        this.getRelationshipData = new GetRelationshipData();
    }

    get relationships() {
        return this.getRelationshipData.get(this.relationshipData);
    }

    /**
     * @param {Person} parent 
     * @param {Person} child 
     */
    addParentChildRelation(parent, child) {
        this.addRelationshipData.add(this.relationshipData, parent, child);
    }
    /**
     * @param {string} parentName
     */
    findAllChildrenOf(parentName) {
        return this.filterRelationshipData.filter(this.relationshipData, parentName);
    }
}

export {
    RelationshipManager,
};
