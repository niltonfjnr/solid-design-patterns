import { PersonBuilder } from '.';

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withPostcode(postcode) {
        this.person.postcode = postcode;
        return this;
    }

    in(city) {
        this.person.city = city;
        return this;
    }
}

export {
    PersonAddressBuilder
};
