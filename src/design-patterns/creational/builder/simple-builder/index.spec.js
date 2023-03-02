import { Tag } from './tag';
import { HtmlBuilder } from '.';

import { describe, test, expect } from '@jest/globals';

const firstWordIndex = 0;
const words = ['hello', 'world'];

describe(Array.name, () => {
    test('GIVEN just a single paragraph WHEN using string concatenation THEN result the string below', () => {
        const html = [];
        html.push('<p>');
        html.push(words[firstWordIndex]);
        html.push('</p>');
        const mockResult = '<p>hello</p>';

        const result = html.join('');

        expect(result).toBe(mockResult);
    });

    test('GIVEN a list with 2 words in it WHEN compiled THEN should result the string below', () => {
        const html = [];
        html.push('<ul>\n');
        for (const word of words)
            html.push(`  <li>${word}</li>\n`);
        html.push('</ul>');
        const mockResult = '<ul>\n  <li>hello</li>\n  <li>world</li>\n</ul>';

        const result = html.join('');

        expect(result).toBe(mockResult);
    });
});

describe(HtmlBuilder.name, () => {
    const makeSut = () => ({
        tag: Tag.create('ul').build(),
        builder: Tag.create('ul'),
    });
    const { tag, builder } = makeSut();

    test(`${builder.build.name} :: GIVEN an ordinary non-fluent builder instance from ${HtmlBuilder.name} WHEN built THEN should returns a ${Tag.name} instance`, () => {
        const { builder } = makeSut();

        const tag = builder.build();

        expect(builder instanceof HtmlBuilder).toBe(true);
        expect(tag instanceof Tag).toBe(true);
    });

    test(`${tag.toString.name} :: GIVEN an ordinary non-fluent builder instance from ${HtmlBuilder.name} WHEN built THEN stringified should returns a string like below`, () => {
        const { builder } = makeSut();
        for (const word of words)
            builder.addChild('li', word);
        const tag = builder.build();

        const result = tag.toString();

        expect(result).toBe('<ul>\n  <li>\n    hello\n  </li>\n  <li>\n    world\n  </li>\n</ul>\n');
    });

    test(`${builder.toString.name} GIVEN a fluent builder WHEN built THEN stringified should returns a string like below`, () => {
        const builder = Tag.create('ul');
        builder
            .addChildFluent('li', 'foo')
            .addChildFluent('li', 'bar')
            .addChildFluent('li', 'baz');

        const result = builder.toString();

        expect(result).toBe('<ul>\n  <li>\n    foo\n  </li>\n  <li>\n    bar\n  </li>\n  <li>\n    baz\n  </li>\n</ul>\n');
    });

    test(`${builder.toString.name} GIVEN a fluent builder WHEN built THEN stringified should returns a string like below`, () => {
        const tagName = 'any_value';
        const builder = Tag.create(tagName);
        builder.addChildFluent('other_value', 'another_value');
        
        builder.clear();
        const result = builder.toString();

        expect(result).toBe(`<${tagName}>\n</${tagName}>\n`);
    });
});
