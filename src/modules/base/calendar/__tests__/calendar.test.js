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
import Calendar from 'c/calendar';

// not tested : mouse over, mouse out events on calendar

let element;
describe('Calendar', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-calendar', {
            is: Calendar
        });
        document.body.appendChild(element);
    });

    it('Calendar default attributes', () => {
        element = createElement('base-calendar', {
            is: Calendar
        });

        expect(element.disabled).toBeFalsy();
        expect(element.disabledDates).toMatchObject([]);
        expect(element.markedDates).toMatchObject([]);
        expect(element.max).toMatchObject(new Date(2099, 11, 31));
        expect(element.min).toMatchObject(new Date(1900, 0, 1));
        expect(element.selectionMode).toBe('single');
        expect(element.value).toMatchObject([]);
        expect(element.weekNumber).toBeFalsy();
    });

    /* ----- ATTRIBUTES ----- */

    // disabled
    it('Calendar disabled', () => {
        element.value = 1618459200000;
        element.disabled = true;
        return Promise.resolve().then(() => {
            const buttons = element.shadowRoot.querySelectorAll(
                '[data-element-id^="lightning-button-icon"]'
            );
            buttons.forEach((button) => {
                expect(button.disabled).toBeTruthy();
            });
            const combobox = element.shadowRoot.querySelector(
                '[data-element-id="lightning-combobox"]'
            );
            expect(combobox.disabled).toBeTruthy();
            const tds = element.shadowRoot.querySelectorAll(
                '[data-element-id^="span-day-label"]'
            );
            tds.forEach((td) => {
                expect(td.className).toBe('avonni-disabled-cell');
            });
        });
    });

    // disabled dates
    it('Calendar disabled dates', () => {
        element.value = 1620532800000;
        element.disabledDates = [5, 10, 15, 20, 25];
        element.min = 1619841600000;
        element.max = 1622433600000;

        return Promise.resolve().then(() => {
            const dates = [];
            const disabledDates = element.shadowRoot.querySelectorAll(
                '.avonni-disabled-cell'
            );
            disabledDates.forEach((date) => {
                dates.push(date.textContent);
            });
            expect(dates.includes('5')).toBeTruthy();
            expect(dates.includes('10')).toBeTruthy();
            expect(dates.includes('15')).toBeTruthy();
            expect(dates.includes('20')).toBeTruthy();
            expect(dates.includes('25')).toBeTruthy();
        });
    });

    // marked dates
    it('Calendar marked dates', () => {
        element.value = 1620532800000;
        element.markedDates = [
            { date: new Date('05/05/2021'), color: 'rgb(255, 0, 0)' },
            { date: new Date('05/10/2021'), color: 'rgb(0, 0, 0)' },
            { date: new Date(1621051200000), color: 'rgb(255, 255, 255)' }
        ];
        element.min = 1619841600000;
        element.max = 1622433600000;

        return Promise.resolve().then(() => {
            const markedDates = element.shadowRoot.querySelectorAll(
                '[data-element-id="div-marked-cells"]'
            );
            expect(markedDates).toHaveLength(3);
            expect(markedDates[0].style.background).toBe('rgb(255, 0, 0)');
            expect(markedDates[1].style.background).toBe('rgb(0, 0, 0)');
            expect(markedDates[2].style.background).toBe('rgb(255, 255, 255)');
        });
    });

    // min & max
    it('Calendar min and max', () => {
        element.value = 1620532800000;
        element.min = 1619841600000;
        element.max = 1622433600000;

        return Promise.resolve().then(() => {
            const dateArray = [];
            const dates = element.shadowRoot.querySelectorAll('.slds-day');
            dates.forEach((date) => {
                dateArray.push(date.textContent);
            });
            expect(dateArray.slice(0, 1)[0]).toBe('1');
            expect(dateArray.slice(-1)[0]).toBe('31');
        });
    });

    // values
    it('Calendar values selection-mode: single', () => {
        element.value = 1618459200000;
        return Promise.resolve().then(() => {
            const day = element.shadowRoot.querySelector('.slds-is-selected');
            expect(day.textContent).toBe('15');
            const month = element.shadowRoot.querySelector(
                '[data-element-id="h2"]'
            );
            expect(month.textContent).toBe('April');
            const year = element.shadowRoot.querySelector(
                '[data-element-id="lightning-combobox"]'
            );
            expect(year.value).toBe(2021);
        });
    });

    it('Calendar values selection-mode: single no value', () => {
        element.value = 1621051200000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'single';
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([new Date(1620964800000)]);
        });
    });

    it('Calendar values selection-mode: single same value', () => {
        element.value = 1620964800000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([]);
        });
    });

    it('Calendar values selection-mode: multiple', () => {
        element.value = [1618459200000, 1618545600000, 1618632000000];
        element.selectionMode = 'multiple';
        return Promise.resolve().then(() => {
            const days =
                element.shadowRoot.querySelectorAll('.slds-is-selected');
            const dates = [];
            days.forEach((day) => {
                dates.push(day.textContent);
            });

            expect(dates.includes('15')).toBeTruthy();
            expect(dates.includes('16')).toBeTruthy();
            expect(dates.includes('17')).toBeTruthy();

            const month = element.shadowRoot.querySelector(
                '[data-element-id="h2"]'
            );
            expect(month.textContent).toBe('April');
            const year = element.shadowRoot.querySelector(
                '[data-element-id="lightning-combobox"]'
            );
            expect(year.value).toBe(2021);
        });
    });

    it('Calendar values selection-mode: multiple no value', () => {
        element.value = 1621051200000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'multiple';
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([
                new Date(1621051200000),
                new Date(1620964800000)
            ]);
        });
    });

    it('Calendar values selection-mode: interval no value', () => {
        element.value = 1620964800000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([]);
            day14.click();
            expect(element.value).toMatchObject([new Date(1620964800000)]);
        });
    });

    it('Calendar values selection-mode: interval startDate < newDate', () => {
        element.value = 1621051200000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([new Date(1620964800000)]);
        });
    });

    it('Calendar values selection-mode: interval startDate > newDate', () => {
        element.value = 1621051200000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';
        return Promise.resolve().then(() => {
            const day17 = element.shadowRoot.querySelector(
                'span[data-day="1621224000000"]'
            );
            day17.click();
            expect(element.value).toMatchObject([
                new Date(1621051200000),
                new Date(1621224000000)
            ]);
        });
    });

    it('Calendar values selection-mode: interval endDate < newDate', () => {
        element.value = [1621051200000, 1621137600000];
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';
        return Promise.resolve().then(() => {
            const day17 = element.shadowRoot.querySelector(
                'span[data-day="1621224000000"]'
            );
            day17.click();
            expect(element.value).toMatchObject([
                new Date(1621051200000),
                new Date(1621224000000)
            ]);
        });
    });

    it('Calendar values selection-mode: interval endDate > newDate < startDate', () => {
        element.value = [1621051200000, 1621137600000];
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';
        return Promise.resolve().then(() => {
            const day14 = element.shadowRoot.querySelector(
                'span[data-day="1620964800000"]'
            );
            day14.click();
            expect(element.value).toMatchObject([new Date(1620964800000)]);
        });
    });

    // week number
    it('Calendar week number', () => {
        element.value = 1620532800000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.weekNumber = true;

        return Promise.resolve().then(() => {
            const weekNumbers = [];
            const weeks =
                element.shadowRoot.querySelectorAll('.avonni-week-cell');
            expect(weeks).toHaveLength(6);

            weeks.forEach((week) => {
                weekNumbers.push(week.textContent);
            });
            expect(weekNumbers.includes('18')).toBeTruthy();
            expect(weekNumbers.includes('19')).toBeTruthy();
            expect(weekNumbers.includes('20')).toBeTruthy();
            expect(weekNumbers.includes('21')).toBeTruthy();
            expect(weekNumbers.includes('22')).toBeTruthy();
            expect(weekNumbers.includes('23')).toBeTruthy();
        });
    });

    /* ----- EVENTS ----- */

    // calendar private focus event
    it('Calendar event privatefocus', () => {
        const handler = jest.fn();
        element.addEventListener('privatefocus', handler);

        return Promise.resolve().then(() => {
            const previousButton = element.shadowRoot.querySelector(
                '[data-element-id="previous-lightning-button-icon"]'
            );
            previousButton.dispatchEvent(new CustomEvent('focus'));
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
        });
    });

    // calendar private blur event
    it('Calendar event privateblur', () => {
        const handler = jest.fn();
        element.addEventListener('privateblur', handler);

        return Promise.resolve().then(() => {
            const previousButton = element.shadowRoot.querySelector(
                '[data-element-id="previous-lightning-button-icon"]'
            );
            previousButton.dispatchEvent(new CustomEvent('blur'));
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
            expect(handler.mock.calls[0][0].composed).toBeTruthy();
            expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
        });
    });

    // calendar change
    it('Calendar event change', () => {
        element.value = 1620532800000;
        element.min = 1619841600000;
        element.max = 1622433600000;

        const handler = jest.fn();
        element.addEventListener('change', handler);

        return Promise.resolve().then(() => {
            element.dispatchEvent(
                new CustomEvent('change', {
                    detail: {
                        value: element.value
                    }
                })
            );
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.value).toMatchObject([
                new Date(1620532800000)
            ]);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });

    it('Calendar event change selection-mode: multiple unselect', () => {
        element.value = 1620532800000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'multiple';

        const handler = jest.fn();
        element.addEventListener('change', handler);

        return Promise.resolve().then(() => {
            const day9 = element.shadowRoot.querySelector(
                'span[data-day="1620532800000"]'
            );
            day9.click();
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.value).toMatchObject([]);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });

    it('Calendar event change selection-mode: interval', () => {
        element.value = 1620532800000;
        element.min = 1619841600000;
        element.max = 1622433600000;
        element.selectionMode = 'interval';

        const handler = jest.fn();
        element.addEventListener('change', handler);

        return Promise.resolve().then(() => {
            const day11 = element.shadowRoot.querySelector(
                'span[data-day="1620705600000"]'
            );
            day11.click();
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.value).toMatchObject([
                new Date(1620532800000),
                new Date(1620705600000)
            ]);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });
});
