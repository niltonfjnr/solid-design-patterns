import { Person } from '../person-model';

import { PersonAddressBuilder, PersonJobBuilder } from '.';

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }
    
    lives = () => {
        return new PersonAddressBuilder(this.person);
    };

    works = () => {
        return new PersonJobBuilder(this.person);
    };

    build() {
        return this.person;
    }
}

export {
    PersonBuilder
};
