import { RELATIONSHIP } from './constants';

class Person {
    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }
}

class Relationship {
    /**
     * @param {Person} from 
     * @param {string} type 
     * @param {Person} to 
     */
    constructor(from, type, to) {
        this.from = from;
        this.type = type;
        this.to = to;
    }
}

class RelationshipManager {
    /**
     * @param {Relationship[]} relationships 
     */
    constructor(relationships = []) {
        this.relationships = relationships;
    }

    /**
     * @param {Person} parent 
     * @param {Person} child 
     */
    add(parent, child) {
        this.relationships.push(
            new Relationship(parent, RELATIONSHIP.PARENT, child)
        );
    }
}

// HIGH-LEVEL MODULE
class Research {
    /**
     * @param {Relationship[]} relationships 
     */
    constructor(relationships) {
        this.relationships = relationships;
    }
    /**
     * @param {string} value
     */
    findAllChildrenOf(value) {
        /**
         * @param {Relationship} relationship 
         * @param {string} name
         */
        const filterImplementation = (relationship, name) => (
            relationship.from.name === name && relationship.type === RELATIONSHIP.PARENT
        );
        return this.relationships.filter(relationship => filterImplementation(relationship, value));
    }
}

export {
    Person,
    RelationshipManager,
    Research,
};
