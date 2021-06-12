/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2021, Avonni Labs, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * - Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { createElement } from 'lwc';
import PrimitiveSelect from 'c/primitiveSelect';

const OPTIONS = [
    {
        label: 'Option 1',
        value: 'option-1'
    },
    {
        label: 'Option 2',
        value: 'option-2'
    },
    {
        label: 'Option 3',
        value: 'option-3'
    }
];

describe('PrimitiveSelect', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Default attributes', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        expect(element.accessKey).toBeUndefined();
        expect(element.disabled).toBeFalsy();
        expect(element.fieldLevelHelp).toBeUndefined();
        expect(element.label).toBeUndefined();
        expect(element.messageWhenValueMissing).toBeUndefined();
        expect(element.multiple).toBeFalsy();
        expect(element.name).toBeUndefined();
        expect(element.options).toMatchObject([]);
        expect(element.required).toBeFalsy();
        expect(element.size).toBeNull();
        expect(element.tabIndex).toBeUndefined();
        expect(element.validity.valid).toBeTruthy();
        expect(element.value).toBeUndefined();
        expect(element.variant).toBe('standard');
    });

    /* ----- ATTRIBUTES ----- */

    // accessKey
    it('accessKey', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.accessKey = 'K';

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.accessKey).toBe('K');
        });
    });

    // disabled
    it('disabled = true', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.disabled = true;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.disabled).toBeTruthy();
        });
    });

    it('disabled = false', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.disabled = false;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.disabled).toBeFalsy();
        });
    });

    // field-level-help
    it('fieldLevelHelp', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.fieldLevelHelp = 'A string help';

        return Promise.resolve().then(() => {
            const help = element.shadowRoot.querySelector('lightning-helptext');
            expect(help).toBeTruthy();
            expect(help.content).toBe('A string help');
        });
    });

    // label
    it('label', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.label = 'A string label';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');
            expect(label.textContent).toBe('A string label');
        });
    });

    // message-when-value-missing
    // Depends on required and reportValidity method
    it('messageWhenValueMissing', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.messageWhenValueMissing = 'A string message';
        element.required = true;
        element.reportValidity();

        return Promise.resolve().then(() => {
            const message = element.shadowRoot.querySelector(
                '[data-help-message]'
            );
            expect(message.textContent).toBe('A string message');
        });
    });

    // multiple
    it('multiple = true', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.multiple = true;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.multiple).toBeTruthy();
        });
    });

    it('multiple = false', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.multiple = false;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.multiple).toBeFalsy();
        });
    });

    // name
    it('name', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.name = 'a-string-name';

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.name).toBe('a-string-name');
        });
    });

    // options
    it('options', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.options = OPTIONS;

        return Promise.resolve().then(() => {
            const options = element.shadowRoot.querySelectorAll('option');

            expect(options).toHaveLength(3);
            options.forEach((option, index) => {
                expect(option.value).toBe(OPTIONS[index].value);
                expect(option.textContent).toBe(OPTIONS[index].label);
            });
        });
    });

    // required
    it('required = true', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.required = true;

        return Promise.resolve().then(() => {
            const abbr = element.shadowRoot.querySelector('abbr');

            expect(abbr).toBeTruthy();
        });
    });

    it('required = false', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.required = false;

        return Promise.resolve().then(() => {
            const abbr = element.shadowRoot.querySelector('abbr');

            expect(abbr).toBeFalsy();
        });
    });

    // size
    // Depends on multiple
    it('size, unset with multiple', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.multiple = true;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');

            expect(element.size).toBe('4');
            expect(select.size).toBe(4);
        });
    });

    it('size, set with multiple', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.multiple = true;
        element.size = '6';

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');

            expect(element.size).toBe('6');
            expect(select.size).toBe(6);
        });
    });

    // tab-index
    it('tabIndex', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.tabIndex = -1;

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');

            expect(select.tabIndex).toBe(-1);
        });
    });

    // validity
    // Depends on disabled, required and value
    it('validity, with required = true and disabled = true', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.disabled = true;
        element.required = true;

        return Promise.resolve().then(() => {
            expect(element.validity.valid).toBeTruthy();
        });
    });

    it('validity, with required = true and disabled = false', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.disabled = false;
        element.required = true;

        return Promise.resolve().then(() => {
            expect(element.validity.valid).toBeFalsy();
        });
    });

    it('validity, with required = true, disabled = true, and a value', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.disabled = false;
        element.required = true;
        element.options = OPTIONS;
        element.value = 'option-1';

        return Promise.resolve().then(() => {
            expect(element.validity.valid).toBeTruthy();
        });
    });

    // value
    it('value', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.options = OPTIONS;
        element.value = 'option-1';

        return Promise.resolve().then(() => {
            const select = element.shadowRoot.querySelector('select');
            expect(select.value).toBe('option-1');
        });
    });

    // variant
    it('variant = standard', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.variant = 'standard';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');

            expect(element.classList).not.toContain(
                'slds-form-element_stacked'
            );
            expect(element.classList).not.toContain(
                'slds-form-element_horizontal'
            );
            expect(label.classList).not.toContain('slds-assistive-text');
        });
    });

    it('variant = label-hidden', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.variant = 'label-hidden';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');

            expect(element.classList).not.toContain(
                'slds-form-element_stacked'
            );
            expect(element.classList).not.toContain(
                'slds-form-element_horizontal'
            );
            expect(label.classList).toContain('slds-assistive-text');
        });
    });

    it('variant = label-stacked', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.variant = 'label-stacked';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');

            expect(element.classList).toContain('slds-form-element_stacked');
            expect(element.classList).not.toContain(
                'slds-form-element_horizontal'
            );
            expect(label.classList).not.toContain('slds-assistive-text');
        });
    });

    it('variant = label-inline', () => {
        const element = createElement('base-primitive-select', {
            is: PrimitiveSelect
        });

        document.body.appendChild(element);

        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');

            expect(element.classList).not.toContain(
                'slds-form-element_stacked'
            );
            expect(element.classList).toContain('slds-form-element_horizontal');
            expect(label.classList).not.toContain('slds-assistive-text');
        });
    });
});
