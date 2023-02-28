import { Person } from '../domain/person-model';
import { Relationship } from '../domain/relationship-model';

import { RELATIONSHIP } from '../constants';
import { RelationshipData } from './relationship-data';

// LOW-LEVEL MODULE
class AddRelationshipData {
    /**
     * @param {RelationshipData} relationshipData 
     * @param {Person} parent 
     * @param {Person} child 
     */
    add(relationshipData, parent, child) {
        relationshipData.list.push(
            new Relationship(parent, RELATIONSHIP.PARENT, child)
        );
    }
}

export {
    AddRelationshipData
};
