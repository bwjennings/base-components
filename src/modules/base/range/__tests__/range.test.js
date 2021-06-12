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
import Range from 'c/range';

// Not tested because not used:
// messageWhenRangeOverflow
// messageWhenRangeUnderflow
// messageWhenStepMismatch
// messageWhenValueMissing
// messageWhenTooLong
// messageWhenBadInput
// messageWhenPatternMismatch
// messageWhenTypeMismatch

describe('Range', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Default attributes', () => {
        const element = createElement('base-range', {
            is: Range
        });

        expect(element.disabled).toBeFalsy();
        expect(element.label).toBeUndefined();
        expect(element.max).toBe(100);
        expect(element.messageWhenRangeOverflow).toBeUndefined();
        expect(element.messageWhenRangeUnderflow).toBeUndefined();
        expect(element.messageWhenStepMismatch).toBeUndefined();
        expect(element.messageWhenValueMissing).toBeUndefined();
        expect(element.messageWhenTooLong).toBeUndefined();
        expect(element.messageWhenBadInput).toBeUndefined();
        expect(element.messageWhenPatternMismatch).toBeUndefined();
        expect(element.messageWhenTypeMismatch).toBeUndefined();
        expect(element.min).toBe(0);
        expect(element.pin).toBeFalsy();
        expect(element.size).toBe('');
        expect(element.step).toBe(1);
        expect(element.unit).toBe('decimal');
        expect(element.unitAttributes).toMatchObject({});
        expect(element.type).toBe('horizontal');
        expect(element.valueLower).toBe(0);
        expect(element.valueUpper).toBe(0);
        expect(element.validity).toBeTruthy();
        expect(element.variant).toBe('standard');
    });

    /* ----- ATTRIBUTES ----- */

    // disabled
    it('disabled = false', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.disabled = false;

        return Promise.resolve().then(() => {
            const inputs = element.shadowRoot.querySelectorAll('input');
            inputs.forEach((input) => {
                expect(input.disabled).toBeFalsy();
            });
        });
    });

    it('disabled = true', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.disabled = true;

        return Promise.resolve().then(() => {
            const inputs = element.shadowRoot.querySelectorAll('input');
            inputs.forEach((input) => {
                expect(input.disabled).toBeTruthy();
            });
        });
    });

    // label
    it('label', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.label = 'A string label';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('label');
            expect(label.textContent).toBe('A string label');
        });
    });

    // max
    it('max', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.max = 45;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-right input'
            );
            const formattedNumbers = element.shadowRoot.querySelectorAll(
                'lightning-formatted-number'
            );
            expect(formattedNumbers[1].value).toBe(45);
            expect(input.max).toBe('45');
        });
    });

    // min
    it('min', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.min = 34;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-left input'
            );
            const formattedNumbers = element.shadowRoot.querySelectorAll(
                'lightning-formatted-number'
            );
            expect(formattedNumbers[0].value).toBe(34);
            expect(input.min).toBe('34');
        });
    });

    // pin
    it('pin = false', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.pin = false;

        return Promise.resolve().then(() => {
            const bubbles = element.shadowRoot.querySelectorAll(
                '.avonni-bubble'
            );
            expect(bubbles).toHaveLength(0);
        });
    });

    it('pin = true', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.pin = true;

        return Promise.resolve().then(() => {
            const bubbles = element.shadowRoot.querySelectorAll(
                '.avonni-bubble'
            );
            expect(bubbles).toHaveLength(2);
        });
    });

    // size
    it('size = ""', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.size = '';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector('div');
            expect(wrapper.classList).toHaveLength(0);
        });
    });

    it('size = x-small', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.size = 'x-small';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector('div');
            expect(wrapper.classList).toContain('avonni-container_x-small');
        });
    });

    it('size = small', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.size = 'small';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector('div');
            expect(wrapper.classList).toContain('avonni-container_small');
        });
    });

    it('size = medium', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.size = 'medium';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector('div');
            expect(wrapper.classList).toContain('avonni-container_medium');
        });
    });

    it('size = large', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.size = 'large';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector('div');
            expect(wrapper.classList).toContain('avonni-container_large');
        });
    });

    // step
    it('step', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.step = 3;

        return Promise.resolve().then(() => {
            const inputs = element.shadowRoot.querySelectorAll('input');
            inputs.forEach((input) => {
                expect(input.step).toBe('3');
            });
        });
    });

    // unit
    it('unit', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.unit = 'currency';

        return Promise.resolve().then(() => {
            const formattedNumbers = element.shadowRoot.querySelectorAll(
                'lightning-formatted-number'
            );
            formattedNumbers.forEach((formattedNumber) => {
                expect(formattedNumber.formatStyle).toBe('currency');
            });
        });
    });

    // unit-attributes
    it('unitAttributes', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        const unitAttributes = {
            currencyCode: 'CAD',
            currencyDisplayAs: 'name',
            maximumFractionDigits: 3,
            maximumSignificantDigits: 6,
            minimumFractionDigits: 2,
            minimumIntegerDigits: 4,
            minimumSignificantDigits: 1
        };
        element.unitAttributes = unitAttributes;

        return Promise.resolve().then(() => {
            const formattedNumbers = element.shadowRoot.querySelectorAll(
                'lightning-formatted-number'
            );
            formattedNumbers.forEach((formattedNumber) => {
                expect(formattedNumber.currencyCode).toBe(
                    unitAttributes.currencyCode
                );
                expect(formattedNumber.currencyDisplayAs).toBe(
                    unitAttributes.currencyDisplayAs
                );
                expect(formattedNumber.maximumFractionDigits).toBe(
                    unitAttributes.maximumFractionDigits
                );
                expect(formattedNumber.maximumSignificantDigits).toBe(
                    unitAttributes.maximumSignificantDigits
                );
                expect(formattedNumber.minimumFractionDigits).toBe(
                    unitAttributes.minimumFractionDigits
                );
                expect(formattedNumber.minimumIntegerDigits).toBe(
                    unitAttributes.minimumIntegerDigits
                );
                expect(formattedNumber.minimumSignificantDigits).toBe(
                    unitAttributes.minimumSignificantDigits
                );
            });
        });
    });

    // type
    // Depends on pin
    it('type = horizontal', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.type = 'horizontal';
        element.pin = true;

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.avonni-vertical'
            );
            const verticalMaxLabel = element.shadowRoot.querySelector(
                'label + .avonni-unit-container'
            );
            const verticalMinLabel = element.shadowRoot.querySelector(
                '.avonni-vertical + .avonni-unit-container'
            );
            const horizontalMinMaxLabels = element.shadowRoot.querySelector(
                '.avonni-container + .avonni-unit-container'
            );
            const bubbles = element.shadowRoot.querySelectorAll(
                '.avonni-bubble'
            );

            expect(wrapper).toBeFalsy();
            expect(verticalMaxLabel).toBeFalsy();
            expect(verticalMinLabel).toBeFalsy();
            expect(horizontalMinMaxLabels).toBeTruthy();
            expect(bubbles).toHaveLength(2);
        });
    });

    it('type = vertical', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.type = 'vertical';
        element.pin = true;

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.avonni-vertical'
            );
            const verticalMaxLabel = element.shadowRoot.querySelector(
                'label + .avonni-unit-container'
            );
            const verticalMinLabel = element.shadowRoot.querySelector(
                '.avonni-vertical + .avonni-unit-container'
            );
            const horizontalMinMaxLabels = element.shadowRoot.querySelector(
                '.avonni-container + .avonni-unit-container'
            );
            const bubbles = element.shadowRoot.querySelectorAll(
                '.avonni-bubble-vertical'
            );

            expect(wrapper).toBeTruthy();
            expect(verticalMaxLabel).toBeTruthy();
            expect(verticalMinLabel).toBeTruthy();
            expect(horizontalMinMaxLabels).toBeFalsy();
            expect(bubbles).toHaveLength(2);
        });
    });

    // value-lower
    // Depends on pin
    it('valueLower', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.valueLower = 34;
        element.pin = true;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-left input'
            );
            const bubble = element.shadowRoot.querySelector(
                '.left-bubble lightning-formatted-number'
            );
            expect(input.value).toBe('34');
            expect(bubble.value).toBe(34);
        });
    });

    // value-upper
    // Depends on pin
    it('valueUpper', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.valueUpper = 34;
        element.pin = true;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-right input'
            );
            const bubble = element.shadowRoot.querySelector(
                '.right-bubble lightning-formatted-number'
            );
            expect(input.value).toBe('34');
            expect(bubble.value).toBe(34);
        });
    });

    // variant
    // Depends on label
    it('variant = standard', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.variant = 'standard';
        element.label = 'A string label';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector(
                '.slds-slider-label span'
            );
            expect(label.classList).not.toContain('slds-assistive-text');
            expect(label.classList).toContain('slds-slider-label__label');
        });
    });

    it('variant = label-hidden', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.variant = 'label-hidden';
        element.label = 'A string label';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector(
                '.slds-slider-label span'
            );
            expect(label.classList).toContain('slds-assistive-text');
            expect(label.classList).not.toContain('slds-slider-label__label');
        });
    });

    // inputs width
    // Depends on valueLower, valueUpper, min, max and step
    it('inputs width', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        element.valueLower = 34;
        element.valueUpper = 48;
        element.min = 10;
        element.max = 50;
        element.step = 2;

        return Promise.resolve().then(() => {
            const leftInputWrapper = element.shadowRoot.querySelector(
                '.inverse-left'
            );
            const rightInputWrapper = element.shadowRoot.querySelector(
                '.inverse-right'
            );
            expect(leftInputWrapper.style.width).toBe('75%');
            expect(rightInputWrapper.style.width).toBe('25%');
        });
    });

    /* ----- EVENTS ----- */

    // change
    // Depends on valueLower and valueUpper
    it('change event on left input', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        const handler = jest.fn();
        element.addEventListener('change', handler);

        element.valueLower = 34;
        element.valueUpper = 48;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-left input'
            );
            input.dispatchEvent(new CustomEvent('input'));

            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.valueUpper).toBe(48);
            expect(handler.mock.calls[0][0].detail.valueLower).toBe(34);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });

    it('change event on right input', () => {
        const element = createElement('base-range', {
            is: Range
        });

        document.body.appendChild(element);

        const handler = jest.fn();
        element.addEventListener('change', handler);

        element.valueLower = 34;
        element.valueUpper = 48;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '.inverse-right input'
            );
            input.dispatchEvent(new CustomEvent('input'));

            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.valueUpper).toBe(48);
            expect(handler.mock.calls[0][0].detail.valueLower).toBe(34);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });
});
