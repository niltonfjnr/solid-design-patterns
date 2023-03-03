class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    static people = [];
    
    /**
     * @param {string} name
     * @returns {Person} 
     */
    createPerson(name) {
        // todo
        const people = PersonFactory.people;
        const peopleLength = people.length;
        people.push(new Person(peopleLength, name));
        return people[peopleLength];
    }
}

export {
    Person,
    PersonFactory
};
