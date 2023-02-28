import { Relationship } from '../domain/relationship-model';

import { RELATIONSHIP } from '../constants';
import { RelationshipData } from './relationship-data';

// LOW-LEVEL MODULE
class FilterRelationshipData {
    /**
     * @param {RelationshipData} relationshipData 
     * @param {string} parentName
     */
    filter(relationshipData, parentName) {
        /**
         * @param {Relationship} relationship 
         * @param {string} name
         */
        const filterImplementation = (relationship, name) => (
            relationship.from.name === name && relationship.type === RELATIONSHIP.PARENT
        );
        return relationshipData.list.filter(relationship => filterImplementation(relationship, parentName));
    }
}

export {
    FilterRelationshipData
};
