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

import { ColorPicker } from '../__examples__/colorPicker';

export default {
    title: 'Example/Color Picker',
    argTypes: {
        accessKey: {
            name: 'access-key',
            control: {
                type: 'text'
            },
            description:
                'Specifies a shortcut key to activate or focus an element.',
            table: {
                type: { summary: 'string' }
            }
        },
        colors: {
            control: {
                type: 'object'
            },
            description: 'Color values displayed in the default palette.',
            table: {
                type: { summary: 'string[]' }
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If present, the input field is disabled and users cannot interact with it.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        fieldLevelHelp: {
            name: 'field-level-help',
            control: {
                type: 'text'
            },
            description:
                "Help text detailing the purpose and function of the input. This attribute isn't supported for file, radio, toggle, and checkbox-button types.",
            table: {
                type: { summary: 'string' }
            }
        },
        hideColorInput: {
            name: 'hide-color-input',
            control: {
                type: 'boolean'
            },
            description: 'If true, hide the input color value.',
            defaultValue: false,
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        isLoading: {
            name: 'is-loading',
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If present, a spinner is displayed to indicate that data is loading. ',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        label: {
            control: {
                type: 'text'
            },
            description: 'Text label for the input.',
            table: {
                type: { summary: 'string' }
            }
        },
        menuAlignment: {
            name: 'menu-alignment',
            control: {
                type: 'select'
            },
            options: [
                'auto',
                'left',
                'center',
                'right',
                'bottom-left',
                'bottom-center',
                'bottom-right'
            ],
            defaultValue: 'left',
            description:
                'Determines the alignment of the menu relative to the button. Available options are: auto, left, center, right, bottom-left, bottom-center, bottom-right. The auto option aligns the dropdown menu based on available space. ',
            table: {
                defaultValue: { summary: 'left' },
                type: { summary: 'string' },
                category: 'menu'
            }
        },
        menuIconName: {
            name: 'menu-icon-name',
            control: {
                type: 'text'
            },
            table: {
                type: { summary: 'string' },
                category: 'menu'
            }
        },
        menuIconSize: {
            name: 'menu-icon-size',
            control: {
                type: 'select'
            },
            options: ['xx-small', 'x-small', 'small', 'medium', 'large'],
            defaultValue: 'x-small',
            description:
                'The size of the icon. Options include xx-small, x-small, small, medium, or large.',
            table: {
                defaultValue: { summary: 'x-small' },
                type: { summary: 'string' },
                category: 'menu'
            }
        },
        menuLabel: {
            name: 'menu-label',
            control: {
                type: 'text'
            },
            description: 'Optional text to be shown on the button.',
            table: {
                type: { summary: 'string' },
                category: 'menu'
            }
        },
        menuNubbin: {
            name: 'menu-nubbin',
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If present, a nubbin is present on the menu. A nubbin is a stub that protrudes from the menu item towards the button menu. The nubbin position is based on the menu-alignment.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
                category: 'menu'
            }
        },
        menuVariant: {
            name: 'menu-variant',
            control: {
                type: 'select'
            },
            options: [
                'bare',
                'container',
                'border',
                'border-filled',
                'bare-inverse',
                'border-inverse'
            ],
            defaultValue: 'border',
            description:
                'The variant changes the look of the button. Accepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse. This value defaults to border.',
            table: {
                defaultValue: { summary: 'border' },
                type: { summary: 'string' },
                category: 'menu'
            }
        },
        messageWhenBadInput: {
            name: 'message-when-bad-input',
            control: {
                type: 'text'
            },
            description:
                'Error message to be displayed when a bad input is detected.',
            table: {
                type: { summary: 'string' }
            }
        },
        messageWhenValueMissing: {
            name: 'message-when-value-missing',
            control: {
                type: 'text'
            },
            description:
                'Error message to be displayed when the value is missing and input is required.',
            table: {
                type: { summary: 'string' }
            }
        },
        name: {
            control: {
                type: 'text'
            },
            description: 'Specifies the name of an input element.',
            table: {
                type: { summary: 'string' }
            }
        },
        opacity: {
            control: {
                type: 'boolean'
            },
            description: 'Defines whether the alpha slider will be displayed.',
            defaultValue: false,
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        readOnly: {
            name: 'read-only',
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If present, the palette is read-only and cannot be edited by users.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        required: {
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If present, the input field must be filled out before the form is submitted.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        type: {
            control: {
                type: 'select'
            },
            options: ['base', 'custom', 'predefined'],
            defaultValue: 'base',
            description: 'Values include base, custom and predefined.',
            table: {
                defaultValue: { summary: 'base' },
                type: { summary: 'string' }
            }
        },
        value: {
            control: {
                type: 'text'
            },
            description: 'Specifies the value of an input element.',
            table: {
                type: { summary: 'string' }
            }
        },
        variant: {
            control: {
                type: 'select'
            },
            options: [
                'standard',
                'label-inline',
                'label-hidden',
                'label-stacked'
            ],
            defaultValue: 'standard',
            description:
                'The variant changes the appearance of an input field. Accepted variants include standard, label-inline, label-hidden, and label-stacked. This value defaults to standard, which displays the label above the field. Use label-hidden to hide the label but make it available to assistive technology. Use label-inline to horizontally align the label and input field. Use label-stacked to place the label above the input field.',
            table: {
                defaultValue: { summary: 'standard' },
                type: { summary: 'string' }
            }
        },
        tokens: {
            control: {
                type: 'object'
            },
            description:
                'Array of token objects. If present, a token tab will be added in the menu.',
            table: {
                type: { summary: 'object[]' }
            }
        }
    },
    args: {
        disabled: false,
        readOnly: false,
        isLoading: false,
        menuNubbin: false,
        hideColorInput: false,
        opacity: false
    }
};

const tokens = [
    {
        label: 'brand-accessible',
        value: '--lwc-brand-accessible',
        color: '#0176d3'
    },
    {
        label: 'brand-accessible-active',
        value: '--lwc-brand-accessible-active',
        color: '#014486'
    },
    {
        label: 'color-text-action-label',
        value: '--lwc-colorTextActionLabel',
        color: '#3e3e3c'
    },
    {
        label: 'color-text-customer',
        value: '--lwc-colorTextCustomer',
        color: '#fe9339'
    },
    {
        label: 'color-text-error',
        value: '--lwc-colorTextError',
        color: '#ea001e'
    }
];

const colorsValue = [
    '#e3abec',
    '#c2dbf7',
    '#9fd6ff',
    '#9de7da',
    '#9df0bf',
    '#fff099',
    '#fed49a',
    '#d073df',
    '#86b9f3',
    '#5ebbff',
    '#44d8be',
    '#3be281',
    '#ffe654',
    '#ffb758',
    '#bd35bd',
    '#5778c1',
    '#5ebbff',
    '#00aea9',
    '#3bba4c',
    '#f4bc25',
    '#f99120',
    '#580d8c',
    '#001870',
    '#0a2399',
    '#097476',
    '#096a50',
    '#b67d11',
    '#b85d0d'
];

const Template = (args) => ColorPicker(args);

export const Base = Template.bind({});
Base.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    colors: colorsValue
};

export const StandardWithTokens = Template.bind({});
StandardWithTokens.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '--lwc-colorTextActionLabel',
    messageWhenBadInput: 'Please ensure value is correct',
    colors: colorsValue,
    tokens: tokens
};

export const BaseWithIcon = Template.bind({});
BaseWithIcon.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuLabel: 'Pick a color',
    colors: colorsValue
};

export const BaseWithIconWithoutColorInput = Template.bind({});
BaseWithIconWithoutColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Read Only',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuLabel: 'Pick a color',
    hideColorInput: 'true',
    colors: colorsValue
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    colors: colorsValue,
    readOnly: true
};

export const LabelInlineWithMenuVariantContainer = Template.bind({});
LabelInlineWithMenuVariantContainer.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#0a2399',
    variant: 'label-inline',
    menuVariant: 'container',
    colors: colorsValue
};

export const LabelInlineWithoutColorInput = Template.bind({});
LabelInlineWithoutColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#096a50',
    variant: 'label-inline',
    menuVariant: 'container',
    hideColorInput: 'true',
    colorsValue: colorsValue
};

export const LabelHiddenWithoutHelpMessage = Template.bind({});
LabelHiddenWithoutHelpMessage.args = {
    label: 'Color label',
    value: '#ffb758',
    variant: 'label-hidden',
    hideColorInput: 'true',
    menuVariant: 'bare-inverse',
    colors: colorsValue
};

export const LabelHiddenWithoutHelpMessageBorderInverse = Template.bind({});
LabelHiddenWithoutHelpMessageBorderInverse.args = {
    label: 'Color label',
    value: '#3be281',
    variant: 'label-hidden',
    hideColorInput: 'true',
    menuVariant: 'border-inverse',
    colors: colorsValue
};

export const LabelHiddenWithMenuLabel = Template.bind({});
LabelHiddenWithMenuLabel.args = {
    label: 'Color label',
    value: '#d073df',
    variant: 'label-hidden',
    hideColorInput: 'true',
    menuVariant: 'border-inverse',
    menuLabel: 'Pick a color',
    colors: colorsValue
};

export const Xx_smallIconWithColorInput = Template.bind({});
Xx_smallIconWithColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuIconSize: 'xx-small',
    colorsValue: colorsValue
};

export const X_smallIconWithColorInput = Template.bind({});
X_smallIconWithColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuIconSize: 'x-small',
    colors: colorsValue
};

export const SmallIconWithColorInput = Template.bind({});
SmallIconWithColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuIconSize: 'small',
    colors: colorsValue
};

export const MediumIconWithColorInput = Template.bind({});
MediumIconWithColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuIconSize: 'medium',
    colors: colorsValue
};

export const LargeIconWithColorInput = Template.bind({});
LargeIconWithColorInput.args = {
    label: 'Color label',
    fieldLevelHelp: 'Help text',
    value: '#419fec',
    menuIconName: 'utility:down',
    menuIconSize: 'large',
    colors: colorsValue
};
