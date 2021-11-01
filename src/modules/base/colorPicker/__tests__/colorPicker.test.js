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
import ColorPicker from 'c/colorPicker';

// not tested
// Positioning of the dropdown menu.

const colors = [
    '#e3abec',
    '#c2dbf6',
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

const tokens = [
    {
        label: 'brand-accessible',
        value: '--lwc-brand-accessible',
        color: '#0176d3'
    },
    {
        label: 'brand-accessible-active',
        value: '--lwc-brand-accessible-active',
        color: 'rgb(1, 68, 134)'
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

let element;
describe('Color Picker', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-color-picker', {
            is: ColorPicker
        });
        document.body.appendChild(element);
    });

    it('Default attributes', () => {
        expect(element.accessKey).toBeUndefined();
        expect(element.colors).toMatchObject(colors);
        expect(element.disabled).toBeFalsy();
        expect(element.fieldLevelHelp).toBeUndefined();
        expect(element.hideColorInput).toBeFalsy();
        expect(element.isLoading).toBeFalsy();
        expect(element.label).toBeUndefined();
        expect(element.menuVariant).toBe('border');
        expect(element.menuIconName).toBeUndefined();
        expect(element.menuIconSize).toBe('x-small');
        expect(element.menuLabel).toBeUndefined();
        expect(element.menuAlignment).toBe('left');
        expect(element.menuNubbin).toBeFalsy();
        expect(element.messageWhenBadInput).toBeUndefined();
        expect(element.messageWhenValueMissing).toBeUndefined();
        expect(element.name).toBeUndefined();
        expect(element.opacity).toBeFalsy();
        expect(element.tokens).toMatchObject([]);
        expect(element.readOnly).toBeFalsy();
        expect(element.required).toBeFalsy();
        expect(element.value).toBeUndefined();
        expect(element.validity).toMatchObject({});
        expect(element.variant).toBe('standard');
        expect(element.type).toBe('base');
    });

    /* ----- ATTRIBUTES ----- */

    // access key
    it('access key', () => {
        element.accessKey = 'K';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.accessKey).toBe('K');
        });
    });

    // disabled
    it('disabled', () => {
        element.disabled = true;

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.disabled).toBeTruthy();
        });
    });

    // field level help
    it('field level help', () => {
        element.fieldLevelHelp = 'This is a field level help text';

        return Promise.resolve().then(() => {
            const helpText = element.shadowRoot.querySelector(
                '[data-element-id="lightning-helptext"]'
            );
            expect(helpText.content).toBe('This is a field level help text');
        });
    });

    // isLoading
    it('isLoading', () => {
        element.isLoading = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const spinner = element.shadowRoot.querySelector(
                    '[data-element-id="lightning-spinner"]'
                );
                expect(spinner).toBeTruthy();
            });
    });

    // label
    it('label', () => {
        element.label = 'This is a label text';

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector(
                '[data-element-id="label"]'
            );
            expect(label.textContent).toBe('This is a label text');
        });
    });

    // name
    it('name', () => {
        element.name = 'This is a name text';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '[data-element-id="input"]'
            );
            expect(input.name).toBe('This is a name text');
        });
    });

    // readOnly
    it('readOnly', () => {
        element.readOnly = true;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '[data-element-id="input"]'
            );
            const readOnly = element.shadowRoot.querySelector(
                '[data-element-id="lightning-input-read-only"]'
            );
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );

            expect(readOnly).toBeTruthy();
            expect(input).toBeFalsy();
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-swatch-read-only'
            );
        });
    });

    // required
    it('required', () => {
        element.required = true;

        return Promise.resolve().then(() => {
            const required = element.shadowRoot.querySelector('.slds-required');
            expect(required).toBeTruthy();
            expect(required.textContent).toBe('*');
        });
    });

    // value
    it('value', () => {
        element.value = 'rgb(65, 159, 236)';

        return Promise.resolve()
            .then(() => {
                const input = element.shadowRoot.querySelector(
                    '[data-element-id="input"]'
                );
                expect(input.value).toBe('rgb(65, 159, 236)');
            })
            .then(() => {
                const swatch = element.shadowRoot.querySelector(
                    '[data-element-id="swatch"]'
                );
                expect(swatch.style.background).toBe('rgb(65, 159, 236)');
            });
    });

    it('value with a token', () => {
        element.tokens = tokens;
        element.value = tokens[1].value;

        return Promise.resolve()
            .then(() => {
                const input = element.shadowRoot.querySelector(
                    '[data-element-id="input"]'
                );
                expect(input.value).toBe(tokens[1].label);
            })
            .then(() => {
                const swatch = element.shadowRoot.querySelector(
                    '[data-element-id="swatch"]'
                );
                expect(swatch.style.background).toBe(tokens[1].color);
            });
    });

    // variant
    it('variant standard', () => {
        element.variant = 'standard';

        return Promise.resolve().then(() => {
            const labelHidden = element.shadowRoot.querySelector(
                '[data-element-id="label"].slds-assistive-text'
            );
            const labelStacked = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-form-element_stacked'
            );
            const labelInline = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-grid.slds-grid_vertical-align-center'
            );
            expect(labelInline).toBeFalsy();
            expect(labelStacked).toBeFalsy();
            expect(labelHidden).toBeFalsy();
        });
    });

    it('variant label-stacked', () => {
        element.variant = 'label-stacked';

        return Promise.resolve().then(() => {
            const labelHidden = element.shadowRoot.querySelector(
                '[data-element-id="label"].slds-assistive-text'
            );
            const labelStacked = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-form-element_stacked'
            );
            const labelInline = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-grid.slds-grid_vertical-align-center'
            );
            expect(labelInline).toBeFalsy();
            expect(labelStacked).toBeTruthy();
            expect(labelHidden).toBeFalsy();
        });
    });

    it('variant label-hidden', () => {
        element.variant = 'label-hidden';
        element.label = 'label-hidden';

        return Promise.resolve().then(() => {
            const labelHidden = element.shadowRoot.querySelector(
                '[data-element-id="label"].slds-assistive-text'
            );
            const labelStacked = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-form-element_stacked'
            );
            const labelInline = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-grid.slds-grid_vertical-align-center'
            );
            expect(labelInline).toBeFalsy();
            expect(labelStacked).toBeFalsy();
            expect(labelHidden).toBeTruthy();
            expect(labelHidden.textContent).toBe('label-hidden');
        });
    });

    it('variant label-inline', () => {
        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            const labelHidden = element.shadowRoot.querySelector(
                '[data-element-id="label"].slds-assistive-text'
            );
            const labelStacked = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-form-element_stacked'
            );
            const labelInline = element.shadowRoot.querySelector(
                '[data-element-id="div-container"].slds-grid.slds-grid_vertical-align-center'
            );
            expect(labelInline).toBeTruthy();
            expect(labelStacked).toBeFalsy();
            expect(labelHidden).toBeFalsy();
        });
    });

    // type
    it('type base', () => {
        element.type = 'base';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const palette =
                    element.shadowRoot.querySelector('.slds-tabs_default');
                expect(palette).toBeTruthy();
            });
    });

    it('type predefined', () => {
        element.type = 'predefined';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const gradient = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette-custom"]'
                );
                expect(gradient).toBeTruthy();
            });
    });

    // Menu variant without menu icon name
    it('menu variant bare', () => {
        element.menuVariant = 'bare';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-more slds-button_icon-bare'
            );
        });
    });

    it('menu variant container', () => {
        element.menuVariant = 'container';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-container-more'
            );
        });
    });

    it('menu variant border', () => {
        element.menuVariant = 'border';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-more'
            );
        });
    });

    it('menu variant border-filled', () => {
        element.menuVariant = 'border-filled';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-more slds-button_icon-border-filled'
            );
        });
    });

    it('menu variant bare-inverse', () => {
        element.menuVariant = 'bare-inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-bare slds-button_icon-container-more slds-button_icon-inverse'
            );
        });
    });

    it('menu variant border-inverse', () => {
        element.menuVariant = 'border-inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon slds-button_icon-container-more slds-button_icon-border-inverse'
            );
        });
    });

    // Menu variant with menu icon name
    it('menu variant bare without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'bare';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-bare'
            );
        });
    });

    it('menu variant container without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'container';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-container'
            );
        });
    });

    it('menu variant border without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'border';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-border'
            );
        });
    });

    it('menu variant border-filled without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'border-filled';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-border-filled'
            );
        });
    });

    it('menu variant bare-inverse without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'bare-inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-bare slds-button_icon-inverse'
            );
        });
    });

    it('menu variant border-inverse without menu icon down', () => {
        element.menuIconName = 'utility:down';
        element.menuVariant = 'border-inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.className).toBe(
                'slds-button avonni-color-picker__main-button slds-button_icon-border-inverse'
            );
        });
    });

    // Menu icon size without menu icon name
    it('menu icon size xx-small', () => {
        element.menuIconSize = 'xx-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-no-menu-icon-name"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('menu icon size x-small', () => {
        element.menuIconSize = 'x-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-no-menu-icon-name"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('menu icon size medium', () => {
        element.menuIconSize = 'medium';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-no-menu-icon-name"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('menu icon size large', () => {
        element.menuIconSize = 'large';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-no-menu-icon-name"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    // Menu icon size with menu icon name
    it('menu icon size xx-small with menu icon name', () => {
        element.menuIconSize = 'xx-small';
        element.menuIconName = 'utility:down';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-menu-icon-name"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('menu icon size x-small with menu icon name', () => {
        element.menuIconSize = 'x-small';
        element.menuIconName = 'utility:down';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-menu-icon-name"]'
            );
            expect(icon.size).toBe('x-small');
        });
    });

    it('menu icon size medium with menu icon name', () => {
        element.menuIconSize = 'medium';
        element.menuIconName = 'utility:down';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-menu-icon-name"]'
            );
            expect(icon.size).toBe('medium');
        });
    });

    it('menu icon size large with menu icon name', () => {
        element.menuIconSize = 'large';
        element.menuIconName = 'utility:down';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon-menu-icon-name"]'
            );
            expect(icon.size).toBe('large');
        });
    });

    // Menu label
    it('menu label border', () => {
        element.menuLabel = 'This is a menu label text';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.textContent).toBe('This is a menu label text');
            expect(button.className).toContain('slds-button');
        });
    });

    it('menu label border-inverse', () => {
        element.menuLabel = 'This is a menu label text';
        element.menuVariant = 'border-inverse';

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            expect(button.textContent).toBe('This is a menu label text');
            expect(button.className).toContain('slds-button_inverse');
        });
    });

    // Menu alignment & menu nubbin
    it('menu alignment left', () => {
        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_left');
            });
    });

    it('menu alignment left and menu nubbin', () => {
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_left');
                expect(dropdown.className).toContain('slds-nubbin_top-left');
            });
    });

    it('menu alignment right', () => {
        element.menuAlignment = 'right';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_right');
            });
    });

    it('menu alignment right and menu nubbin', () => {
        element.menuAlignment = 'right';
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_right');
                expect(dropdown.className).toContain('slds-nubbin_top-right');
            });
    });

    it('menu alignment center', () => {
        element.menuAlignment = 'center';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_center');
            });
    });

    it('menu alignment center and menu nubbin', () => {
        element.menuAlignment = 'center';
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_center');
                expect(dropdown.className).toContain('slds-nubbin_top');
            });
    });

    it('menu alignment bottom-center', () => {
        element.menuAlignment = 'bottom-center';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_bottom');
            });
    });

    it('menu alignment bottom-center and menu nubbin', () => {
        element.menuAlignment = 'bottom-center';
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain('slds-dropdown_bottom');
                expect(dropdown.className).toContain('slds-nubbin_bottom');
            });
    });

    it('menu alignment bottom-left', () => {
        element.menuAlignment = 'bottom-left';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain(
                    'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left'
                );
            });
    });

    it('menu alignment bottom-left and menu nubbin', () => {
        element.menuAlignment = 'bottom-left';
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain(
                    'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left'
                );
                expect(dropdown.className).toContain('slds-nubbin_bottom-left');
            });
    });

    it('menu alignment bottom-right', () => {
        element.menuAlignment = 'bottom-right';

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain(
                    'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right'
                );
            });
    });

    it('menu alignment bottom-right and menu nubbin', () => {
        element.menuAlignment = 'bottom-right';
        element.menuNubbin = true;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const dropdown =
                    element.shadowRoot.querySelector('.slds-dropdown');
                expect(dropdown.className).toContain(
                    'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right'
                );
                expect(dropdown.className).toContain(
                    'slds-nubbin_bottom-right'
                );
            });
    });

    // message when bad input
    it('Color Picker message when bad input value', () => {
        element.messageWhenBadInput = 'Something is wrong';
        element.value = 'hello';
        element.showHelpMessageIfInvalid();

        return Promise.resolve().then(() => {
            const help = element.shadowRoot.querySelector(
                '[data-help-message]'
            );
            expect(help.textContent).toBe('Something is wrong');
        });
    });

    // message when missing value
    it('Color Picker message when missing value', () => {
        element.messageWhenValueMissing = 'Something is wrong';
        element.required = true;
        element.showHelpMessageIfInvalid();

        return Promise.resolve().then(() => {
            const help = element.shadowRoot.querySelector(
                '[data-help-message]'
            );
            expect(help.textContent).toBe('Something is wrong');
        });
    });

    // colors
    it('colors', () => {
        const simpleColors = ['#fff', '#333', '#555'];
        element.colors = simpleColors;

        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const palette = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette-default"]'
                );
                expect(palette.colors).toMatchObject(simpleColors);
            });
    });

    // Hide color input
    it('hide color input', () => {
        element.hideColorInput = true;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector(
                '[data-element-id="input"]'
            );
            expect(input).toBeFalsy();
        });
    });

    // opacity
    it('opacity', () => {
        element.opacity = true;
        element.type = 'custom';
        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve().then(() => {
            const gradient = element.shadowRoot.querySelector(
                '[data-element-id="avonni-color-gradient"]'
            );
            expect(gradient.opacity).toBe(true);
        });
    });

    // swatch initialization
    it('Color Picker swatch initialization', () => {
        element.value = '#e3abec';
        return Promise.resolve().then(() => {
            const swatch = element.shadowRoot.querySelector(
                '[data-element-id="swatch"]'
            );
            expect(swatch.style.background).toBe('rgb(227, 171, 236)');
        });
    });

    // done button
    it('Color Picker done button', () => {
        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const doneButton = element.shadowRoot.querySelector(
                    '[data-element-id="lightning-button-done"]'
                );
                expect(doneButton).toBeTruthy();
                doneButton.click();
            });
    });

    // tokens
    it('tokens', () => {
        element.tokens = tokens;

        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve()
            .then(() => {
                const tabLink = element.shadowRoot.querySelector(
                    '[data-element-id="a-tokens-tab"]'
                );
                tabLink.click();
            })
            .then(() => {
                const tab = element.shadowRoot.querySelector(
                    '[data-element-id="li-tokens-tab"]'
                );
                expect(tab.classList).toContain('slds-is-active');
                const palette = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette-default"]'
                );
                expect(palette.colors).toMatchObject(tokens);
            });
    });

    // focus and blur on tab
    it('focus', () => {
        return Promise.resolve()
            .then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button"]'
                );
                button.click();
            })
            .then(() => {
                const tab = element.shadowRoot.querySelector('li > a');
                const popover = element.shadowRoot.querySelector(
                    '.slds-popover__body'
                );

                element.addEventListener('handleprivatefocus', (event) => {
                    expect(event.bubbles).toBeFalsy();
                    expect(event.cancelable).toBeFalsy();
                    expect(event.composed).toBeFalsy();
                });

                element.addEventListener('handleprivateblur', (event) => {
                    expect(event.bubbles).toBeFalsy();
                    expect(event.cancelable).toBeFalsy();
                    expect(event.composed).toBeFalsy();
                });

                tab.focus();
                tab.blur();
                popover.focus();
                popover.blur();
            });
    });

    // clear
    it('clear', () => {
        element.value = '#ffffff';
        const handler = jest.fn();
        element.addEventListener('change', handler);

        return Promise.resolve()
            .then(() => {
                const input = element.shadowRoot.querySelector(
                    '[data-element-id="input"]'
                );
                input.value = '#ffffff';
            })
            .then(() => {
                const clearButton = element.shadowRoot.querySelector(
                    '.avonni-builder-icon-picker-clear-icon'
                );
                clearButton.click();
                expect(handler).toHaveBeenCalled();
                expect(handler.mock.calls[0][0].detail.hex).toBeUndefined();
                expect(handler.mock.calls[0][0].detail.hexa).toBeUndefined();
                expect(handler.mock.calls[0][0].detail.rgb).toBeUndefined();
                expect(handler.mock.calls[0][0].detail.rgba).toBeUndefined();
                expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                expect(handler.mock.calls[0][0].composed).toBeFalsy();
                expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
            });
    });

    // checkValidity
    // Depends on required
    it('Color picker checkValidity method, valid', () => {
        element.required = false;

        return Promise.resolve().then(() => {
            expect(element.checkValidity()).toBeTruthy();
        });
    });

    it('Color picker checkValidity method, invalid', () => {
        element.required = true;

        return Promise.resolve().then(() => {
            expect(element.checkValidity()).toBeFalsy();
        });
    });

    // reportValidity
    // Depends on required
    it('Color picker reportValidity method', () => {
        element.required = true;
        element.reportValidity();

        return Promise.resolve().then(() => {
            const help = element.shadowRoot.querySelector(
                '[data-help-message]'
            );
            expect(help).toBeTruthy();
        });
    });

    // showHelpMessageIfInvalid
    // Depends on required
    it('Color picker showHelpMessageIfInvalid method', () => {
        element.required = true;
        element.showHelpMessageIfInvalid();

        return Promise.resolve().then(() => {
            const help = element.shadowRoot.querySelector(
                '[data-help-message]'
            );
            expect(help).toBeTruthy();
        });
    });

    /* ----- EVENTS ----- */

    // cancel button
    it('cancel button in the dropdown', () => {
        const handler = jest.fn();
        element.addEventListener('change', handler);

        const color = {
            hex: '#014486',
            hexa: '#014486ff',
            rgb: 'rgb(1,68,134)',
            rgba: 'rgba(1,68,134,1)',
            label: 'brand-accessible-active',
            token: '--lwc-brand-accessible-active'
        };

        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve()
            .then(() => {
                const palette = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette-default"]'
                );
                palette.dispatchEvent(
                    new CustomEvent('change', {
                        detail: color,
                        bubbles: true,
                        cancelable: true
                    })
                );

                const cancelButton = element.shadowRoot.querySelector(
                    '[data-element-id="lightning-button-cancel"]'
                );
                cancelButton.click();
            })
            .then(() => {
                expect(handler).not.toHaveBeenCalled();
            });
    });

    // change
    it('change event in the input', () => {
        const handler = jest.fn();
        element.addEventListener('change', handler);
        const input = element.shadowRoot.querySelector(
            '[data-element-id="input"]'
        );
        input.value = '#ffffff';

        return Promise.resolve().then(() => {
            input.value = '#e3abec';
            input.dispatchEvent(new CustomEvent('change'));
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.hex).toBe('#e3abec');
            expect(handler.mock.calls[0][0].detail.hexa).toBe('#e3abecff');
            expect(handler.mock.calls[0][0].detail.rgb).toBe(
                'rgb(227,171,236)'
            );
            expect(handler.mock.calls[0][0].detail.rgba).toBe(
                'rgba(227,171,236,1)'
            );
            expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
        });
    });

    it('change event in the dropdown', () => {
        const handler = jest.fn();
        element.addEventListener('change', handler);

        const color = {
            hex: '#014486',
            hexa: '#014486ff',
            rgb: 'rgb(1,68,134)',
            rgba: 'rgba(1,68,134,1)',
            label: 'brand-accessible-active',
            token: '--lwc-brand-accessible-active'
        };

        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve()
            .then(() => {
                const palette = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette-default"]'
                );
                palette.dispatchEvent(
                    new CustomEvent('change', {
                        detail: color,
                        bubbles: true,
                        cancelable: true
                    })
                );

                const doneButton = element.shadowRoot.querySelector(
                    '[data-element-id="lightning-button-done"]'
                );
                doneButton.click();
            })
            .then(() => {
                expect(handler).toHaveBeenCalled();
                expect(handler.mock.calls[0][0].detail.hex).toBe(color.hex);
                expect(handler.mock.calls[0][0].detail.hexa).toBe(color.hexa);
                expect(handler.mock.calls[0][0].detail.rgb).toBe(color.rgb);
                expect(handler.mock.calls[0][0].detail.rgba).toBe(color.rgba);
                expect(handler.mock.calls[0][0].detail.token).toBe(color.token);
                expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                expect(handler.mock.calls[0][0].composed).toBeFalsy();
                expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
            });
    });

    // focus event
    it('focus event', () => {
        const handler = jest.fn();
        const input = element.shadowRoot.querySelector(
            '[data-element-id="input"]'
        );

        element.addEventListener('focus', handler);
        input.dispatchEvent(new CustomEvent('focus'));

        expect(handler).toHaveBeenCalled();
        expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
        expect(handler.mock.calls[0][0].composed).toBeFalsy();
        expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
    });

    // blur
    it('close dropdown on button blur', () => {
        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve()
            .then(() => {
                const dropdownTrigger = element.shadowRoot.querySelector(
                    '[data-element-id="div-dropdown-trigger"]'
                );
                expect(dropdownTrigger.classList).toContain('slds-is-open');
                button.dispatchEvent(new CustomEvent('blur'));
            })
            .then(() => {
                const dropdownTrigger = element.shadowRoot.querySelector(
                    '[data-element-id="div-dropdown-trigger"]'
                );
                expect(dropdownTrigger.classList).not.toContain('slds-is-open');
            });
    });

    it('do not close dropdown on button blur if focus is inside dropdown', () => {
        const button = element.shadowRoot.querySelector(
            '[data-element-id="button"]'
        );
        button.click();

        return Promise.resolve()
            .then(() => {
                const dropdownTrigger = element.shadowRoot.querySelector(
                    '[data-element-id="div-dropdown-trigger"]'
                );
                expect(dropdownTrigger.classList).toContain('slds-is-open');

                const event = new CustomEvent('mousedown');
                event.button = 0;
                const dropdown = element.shadowRoot.querySelector(
                    '[data-element-id="div-dropdown"]'
                );
                dropdown.dispatchEvent(event);
            })
            .then(() => {
                const dropdownTrigger = element.shadowRoot.querySelector(
                    '[data-element-id="div-dropdown-trigger"]'
                );
                expect(dropdownTrigger.classList).toContain('slds-is-open');
            });
    });
});
