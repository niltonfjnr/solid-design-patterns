const CLASS_NAME_ATTRIBUTE = 'name';

class CodeBuilder {
    constructor(classNameValue) {
        const InnerClass = Object.defineProperty(class { }, CLASS_NAME_ATTRIBUTE, { value: classNameValue });
        this.innerClassInstance = new InnerClass();
        this.fieldsMap = {};
    }

    addField(name, value) {
        this.fieldsMap[name] = value;
        // fluent interface        
        return this;
    }

    build() {
        return Object.assign(this.innerClassInstance, this.fieldsMap);
    }

    toString() {
        return JSON.stringify(this.fieldsMap);
    }
}

export {
    CodeBuilder
};
