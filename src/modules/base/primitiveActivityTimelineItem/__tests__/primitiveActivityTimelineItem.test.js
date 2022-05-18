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
import ActivityTimelineItem from '../primitiveActivityTimelineItem';

// not tested
// event action clicked because actions come from parent

const FIELDS = [
    {
        label: 'Name',
        value: 'Charlie Gomez',
        type: 'url',
        typeAttributes: {
            label: 'Charlie Gomez'
        }
    },
    {
        label: 'Related To',
        value: 'Tesla Cloudhub + Anypoint Connectors',
        type: 'url',
        typeAttributes: {
            label: 'Tesla Cloudhub + Anypoint Connectors'
        }
    },
    {
        label: 'Description',
        value: 'Need to finalize proposals and brand details before the meeting',
        type: 'text'
    }
];

let element;
describe('Primitive Activity Timeline Item', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('avonni-activity-timeline-item', {
            is: ActivityTimelineItem
        });
        document.body.appendChild(element);
    });

    it('Activity Timeline Item: Default attributes', () => {
        expect(element.title).toBeUndefined();
        expect(element.description).toBeUndefined();
        expect(element.datetimeValue).toBeUndefined();
        expect(element.href).toBeUndefined();
        expect(element.iconName).toBeUndefined();
        expect(element.iconSize).toBe('small');
        expect(element.fields).toMatchObject([]);
        expect(element.hasCheckbox).toBeFalsy();
        expect(element.hasError).toBeFalsy();
        expect(element.isLoading).toBeFalsy();
        expect(element.loadingStateAlternativeText).toBe('Loading');
        expect(element.closed).toBeFalsy();
        expect(element.buttonLabel).toBeUndefined();
        expect(element.buttonIconName).toBeUndefined();
        expect(element.buttonIconPosition).toBe('left');
        expect(element.buttonVariant).toBe('neutral');
        expect(element.buttonDisabled).toBeFalsy();
        expect(element.isActive).toBeUndefined();
    });

    /* ----- ATTRIBUTES ----- */

    // title
    it('Activity timeline item: title', () => {
        element.title = 'This is an title text';

        return Promise.resolve().then(() => {
            const title = element.shadowRoot.querySelector('h3');
            expect(title.textContent).toBe('This is an title text');
        });
    });

    // description
    it('Activity timeline item: description', () => {
        element.description = 'This is an description text';

        return Promise.resolve().then(() => {
            const description = element.shadowRoot.querySelector('p');
            expect(description.textContent).toBe('This is an description text');
        });
    });

    // datetime value
    it('Activity timeline item: datetimeValue', () => {
        element.datetimeValue = 1621605600000;

        return Promise.resolve().then(() => {
            const date = element.shadowRoot.querySelector(
                'lightning-formatted-date-time'
            );
            expect(date.value).toBe(1621605600000);
        });
    });

    // href
    it('Activity timeline item: href', () => {
        element.title = 'This is an title link text';
        element.href = 'salesforce.com';

        return Promise.resolve().then(() => {
            const link = element.shadowRoot.querySelector('a');
            expect(link.href).toContain('salesforce.com');
            expect(link.textContent).toBe('This is an title link text');
        });
    });

    // icon name
    it('Activity timeline item: icon name no bullet', () => {
        element.iconName = 'standard:case';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '.slds-timeline__icon'
            );
            expect(icon.iconName).toBe('standard:case');
            expect(icon.classList).not.toContain(
                'avonni-timeline-item__bullet'
            );
        });
    });

    // icon size
    it('Activity Timeline item: icon size (xx-small)', () => {
        element.iconName = 'standard:case';
        element.iconSize = 'xx-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('Activity Timeline item: icon size (x-small)', () => {
        element.iconName = 'standard:case';
        element.iconSize = 'x-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );
            expect(icon.size).toBe('x-small');
        });
    });

    it('Activity Timeline item: icon size (small)', () => {
        element.iconName = 'standard:case';
        element.iconSize = 'small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );
            expect(icon.size).toBe('small');
        });
    });

    it('Activity Timeline item: icon size (medium)', () => {
        element.iconName = 'standard:case';
        element.iconSize = 'medium';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );
            expect(icon.size).toBe('medium');
        });
    });

    it('Activity Timeline item: icon size (large)', () => {
        element.iconName = 'standard:case';
        element.iconSize = 'large';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );
            expect(icon.size).toBe('large');
        });
    });

    // fields
    it('Activity timeline item: fields', () => {
        element.fields = FIELDS;

        return Promise.resolve().then(() => {
            const fields = element.shadowRoot.querySelectorAll(
                '[data-element-id="avonni-output-data"]'
            );

            expect(fields).toHaveLength(3);

            fields.forEach((field, index) => {
                const correspondingField = FIELDS[index];
                expect(correspondingField).toBeTruthy();
                expect(field.label).toBe(correspondingField.label);
                expect(field.value).toBe(correspondingField.value);
                expect(field.type).toBe(correspondingField.type);
                if (correspondingField.typeAttributes) {
                    // eslint-disable-next-line jest/no-conditional-expect
                    expect(field.typeAttributes).toMatchObject(
                        correspondingField.typeAttributes
                    );
                }
            });
        });
    });

    // variant
    it('Activity timeline item: isActive blue bullet', () => {
        element.isActive = true;

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );

            expect(icon.classList).toContain('avonni-timeline-item__bullet');
            expect(icon.classList).toContain(
                'avonni-timeline-item__active-bullet'
            );
        });
    });

    it('Activity timeline item: not isActive gray bullet', () => {
        element.isActive = false;

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="item-marker"]'
            );

            expect(icon.classList).toContain('avonni-timeline-item__bullet');
            expect(icon.classList).not.toContain(
                'avonni-timeline-item__active-bullet'
            );
        });
    });

    // has checkbox
    it('Activity timeline item: has checkbox', () => {
        element.hasCheckbox = true;

        return Promise.resolve().then(() => {
            const checkbox =
                element.shadowRoot.querySelector('lightning-input');
            expect(checkbox).toBeTruthy();
            expect(checkbox.type).toBe('checkbox');
        });
    });

    // has error
    it('Activity timeline item: has error', () => {
        element.hasError = true;

        return Promise.resolve().then(() => {
            const error = element.shadowRoot.querySelector(
                '.slds-grid.slds-text-color_error'
            );
            const errorIcon = element.shadowRoot.querySelector(
                '.slds-grid.slds-text-color_error > lightning-icon'
            );
            expect(error).toBeTruthy();
            expect(error.textContent).toBe(
                'There was an error loading the details'
            );
            expect(errorIcon).toBeTruthy();
            expect(errorIcon.iconName).toBe('utility:error');
        });
    });

    // is loading and loading text
    it('Activity timeline item: is loading', () => {
        element.isLoading = true;
        element.loadingStateAlternativeText = 'This is a loading text';

        return Promise.resolve().then(() => {
            const spinner =
                element.shadowRoot.querySelector('lightning-spinner');
            expect(spinner).toBeTruthy();
            expect(spinner.alternativeText).toBe('This is a loading text');
        });
    });

    // closed
    it('Activity timeline item: closed', () => {
        element.fields = FIELDS;
        element.closed = true;

        return Promise.resolve().then(() => {
            const buttonIcon = element.shadowRoot.querySelector(
                'lightning-button-icon'
            );
            expect(buttonIcon.iconName).toBe('utility:chevronright');
            expect(buttonIcon.ariaExpanded).toBe('false');
        });
    });

    // button label
    it('Activity timeline item: button label', () => {
        element.buttonLabel = 'This is a button label';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.label).toBe('This is a button label');
        });
    });

    // button icon name
    // needs a label
    it('Activity timeline item: button icon name', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonIconName = 'utility:close';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.iconName).toBe('utility:close');
            expect(button.iconPosition).toBe('left');
        });
    });

    // button icon position
    // needs a label
    it('Activity timeline item: button icon position', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonIconName = 'utility:close';
        element.buttonIconPosition = 'right';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.iconPosition).toBe('right');
        });
    });

    // button variant
    // needs a label
    it('Activity timeline item: button variant neutral', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'neutral';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('neutral');
        });
    });

    it('Activity timeline item: button variant base', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'base';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('base');
        });
    });

    it('Activity timeline item: button variant brand', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'brand';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('brand');
        });
    });

    it('Activity timeline item: button variant brand-outline', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'brand-outline';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('brand-outline');
        });
    });

    it('Activity timeline item: button variant destructive', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'destructive';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('destructive');
        });
    });

    it('Activity timeline item: button variant destructive-text', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'destructive-text';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('destructive-text');
        });
    });

    it('Activity timeline item: button variant inverse', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('inverse');
        });
    });

    it('Activity timeline item: button variant success', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonVariant = 'success';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.variant).toBe('success');
        });
    });

    // button disabled
    it('Activity timeline item: button disabled', () => {
        element.buttonLabel = 'This is a button label';
        element.buttonDisabled = true;

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.disabled).toBeTruthy();
        });
    });

    /* ----- EVENTS ----- */

    // check
    it('check event', () => {
        element.hasCheckbox = true;

        const handler = jest.fn();
        element.addEventListener('check', handler);

        return Promise.resolve().then(() => {
            const checkbox = element.shadowRoot.querySelector(
                '[data-element-id="lightning-input-checkbox"]'
            );
            checkbox.dispatchEvent(
                new CustomEvent('change', {
                    detail: {
                        checked: true
                    }
                })
            );
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.checked).toBeTruthy();
            expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
            expect(handler.mock.calls[0][0].composed).toBeTruthy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });

    // button clicked
    it('button clicked event', () => {
        element.buttonLabel = 'button';

        const handler = jest.fn();
        element.addEventListener('buttonclick', handler);

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            button.click();
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });
});
