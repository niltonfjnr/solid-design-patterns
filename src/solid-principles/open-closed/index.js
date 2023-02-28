class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class Specification {
    constructor(value, attributeName) {
        this.value = value;
        this.attributeName = attributeName;
    };
    isSatisfied(item) {
        return item[this.attributeName] === this.value;
    };
}

class SpecificationCombiner {
    constructor(...specs) {
        this.specs = specs;
    }
    isSatisfied(item) {
        return this.specs.every((spec) => spec.isSatisfied(item));
    }
}

class ProductFilter {
    /**
     * @param {Product[]} items 
     * @param {SpecificationCombiner} specificationCombiner
     * @returns {Product[]}
     */
    filterBySpecification(items, specificationCombiner) {
        return items.filter(item => specificationCombiner.isSatisfied(item));
    }
}

export {
    Product,
    ProductFilter,
    SpecificationCombiner,
    Specification,
};
