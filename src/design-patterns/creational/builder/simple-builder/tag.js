import { HtmlBuilder } from '.';

const FIXED_IDENT_SIZE = 2;
const EMPTY_LIMIT = 0;
const INCREMENT_VALUE = 1;

class Tag {
    static get indentSize() {
        return FIXED_IDENT_SIZE;
    }

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        const html = [];
        const i = ' '.repeat(indent * Tag.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > EMPTY_LIMIT) {
            html.push(' '.repeat(Tag.indentSize * (indent + INCREMENT_VALUE)));
            html.push(this.text);
            html.push('\n');
        }

        for (const child of this.children)
            html.push(child.toStringImpl(indent + INCREMENT_VALUE));

        html.push(`${i}</${this.name}>\n`);
        return html.join('');
    }

    toString() {
        return this.toStringImpl(EMPTY_LIMIT);
    }

    static create(name) {
        return new HtmlBuilder(name);
    }
}

export {
    Tag
};
