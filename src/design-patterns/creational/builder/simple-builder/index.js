import { Tag } from './tag';

class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    // non-fluent
    addChild(childName, childText) {
        const child = new Tag(childName, childText);
        this.root.children.push(child);
    }

    // fluent
    addChildFluent(childName, childText) {
        const child = new Tag(childName, childText);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    clear() {
        this.root = new Tag(this.rootName);
    }

    build() {
        return this.root;
    }
}

export {
    HtmlBuilder
};
