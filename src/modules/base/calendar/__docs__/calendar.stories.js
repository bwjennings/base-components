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

import { Calendar } from '../__examples__/calendar';

export default {
    title: 'Example/Calendar',
    argTypes: {
        value: {
            control: {
                type: 'text'
            },
            description:
                'The value of the date selected, which can be a Date object, timestamp, or an ISO8601 formatted string.',
            table: {
                type: { summary: 'string' }
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description: 'If true, the calendar is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        disabledDates: {
            name: 'disabled-dates',
            control: {
                type: 'object'
            },
            description:
                'An array that will be used to determine which dates to be disabled in the calendar.',
            defaultValue: [],
            table: {
                type: { summary: 'object[]' }
            }
        },
        markedDates: {
            name: 'marked-dates',
            control: {
                type: 'object'
            },
            description:
                'An array that will be used to determine which dates to be marked in the calendar.',
            defaultValue: [],
            table: {
                type: { summary: 'object[]' }
            }
        },
        min: {
            control: {
                type: 'date'
            },
            description:
                'Specifies the minimum date, which the calendar can show.',
            defaultValue: Date(1900, 0, 1),
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: 'Date(1900, 0, 1)' }
            }
        },
        max: {
            control: {
                type: 'date'
            },
            description:
                'Specifies the maximum date, which the calendar can show.',
            defaultValue: Date(2099, 11, 31),
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: 'Date(2099, 11, 31)' }
            }
        },
        weekNumber: {
            name: 'week-number',
            control: {
                type: 'boolean'
            },
            description: 'If true, display a week number column',
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        multiValue: {
            name: 'multi-value',
            control: {
                type: 'text'
            },
            description:
                'The value of the date which will use for the draw multi-select line. Multi-value can be before or after the selected date value.',
            table: {
                type: { summary: 'string' }
            }
        }
    },
    args: {
        disabled: false,
        weekNumber: false
    }
};

const Template = (args) => Calendar(args);

export const Base = Template.bind({});
Base.args = {
    value: '05/03/2021',
    disabled: false,
    weekNumber: false,
    disabledDates: [
        new Date(2021, 4, 9),
        new Date(2021, 4, 26),
        13,
        14,
        20,
        21,
        'Wed',
        'Thu'
    ],
    min: new Date('04/15/2021'),
    max: new Date('06/10/2021')
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '05/05/2021',
    disabled: true,
    weekNumber: false,
    disabledDates: [],
    min: new Date('04/15/2021'),
    max: new Date('06/10/2021')
};

export const BaseWithWeekNumber = Template.bind({});
BaseWithWeekNumber.args = {
    value: '05/09/2021',
    multiValue: '05/11/2021',
    disabled: false,
    weekNumber: true,
    disabledDates: [
        new Date(2021, 4, 9),
        new Date(2021, 4, 26),
        13,
        14,
        20,
        21,
        'Wed',
        'Thu'
    ],
    min: new Date('04/15/2021'),
    max: new Date('06/10/2021')
};

export const MarkedDates = Template.bind({});
MarkedDates.args = {
    value: '05/09/2021',
    disabledDates: [20, 'Sat'],
    markedDates: [new Date(2021, 4, 9), new Date(2021, 4, 26), 14, 20, 'Wed'],
    min: new Date('04/15/2021'),
    max: new Date('06/10/2021')
};
