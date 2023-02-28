import { RelationshipData } from './relationship-data';

// LOW-LEVEL MODULE
class GetRelationshipData {
    /**
     * @param {RelationshipData} relationshipData 
     */
    get(relationshipData) {
        return relationshipData.list;
    }
}

export {
    GetRelationshipData
};
