import { createElement } from 'lwc';
import ColorPicker from 'c/colorPicker';

// not tested
// Positioning of the dropdown menu.

const defaultColors = [
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
    '#1b96ff',
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
const colors = ['#fff', '#333', '#555'];

const tokens = [
    {
        label: 'brand-accessible',
        value: '--lwc-brand-accessible',
        color: '#0176d3'
    },
    {
        label: 'brand-accessible-active',
        value: '--lwc-brand-accessible-active',
        color: 'rgb(1,68,134)'
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
    describe('Attributes', () => {
        it('Default attributes', () => {
            expect(element.accessKey).toBeUndefined();
            expect(element.colors).toMatchObject(defaultColors);
            expect(element.columns).toBe(7);
            expect(element.disabled).toBeFalsy();
            expect(element.fieldLevelHelp).toBeUndefined();
            expect(element.groups).toMatchObject([]);
            expect(element.hideClearIcon).toBeFalsy();
            expect(element.hideColorInput).toBeFalsy();
            expect(element.inline).toBeFalsy();
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
            expect(element.paletteHideOutline).toBeFalsy();
            expect(element.paletteShowCheckmark).toBeFalsy();
            expect(element.paletteTileHeight).toBeUndefined();
            expect(element.paletteTileWidth).toBeUndefined();
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

        // columns
        // Depends on type
        it('columns', () => {
            element.columns = 5;
            const button = element.shadowRoot.querySelector(
                '[data-element-id="button"]'
            );
            button.click();

            return Promise.resolve().then(() => {
                const palette = element.shadowRoot.querySelector(
                    '[data-element-id="avonni-color-palette"]'
                );
                expect(palette.columns).toBe(5);
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
                expect(helpText.content).toBe(
                    'This is a field level help text'
                );
            });
        });

        // groups
        it('groups', () => {
            const groups = ['firstGroup', 'secondGroup'];
            element.groups = groups;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.groups).toMatchObject(groups);
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
                const required =
                    element.shadowRoot.querySelector('.slds-required');
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
                    // Spaces are added in css styles.
                    expect(swatch.style.background).toBe('rgb(1, 68, 134)');
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
        // Depends on colors and tokens
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
                    const tabs = element.shadowRoot.querySelector(
                        '[data-element-id="ul-tabs"]'
                    );
                    expect(tabs).toBeTruthy();
                });
        });

        it('type predefined', () => {
            element.type = 'predefined';
            element.colors = colors;
            element.tokens = tokens;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const tabs = element.shadowRoot.querySelector(
                        '[data-element-id="ul-tabs"]'
                    );
                    expect(tabs).toBeFalsy();

                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette).toBeTruthy();
                    expect(palette.colors).toMatchObject(colors);
                    expect(palette.variant).toBe('grid');
                });
        });

        it('type custom', () => {
            element.type = 'custom';

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const tabs = element.shadowRoot.querySelector(
                        '[data-element-id="ul-tabs"]'
                    );
                    expect(tabs).toBeFalsy();

                    const gradient = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-gradient"]'
                    );
                    expect(gradient).toBeTruthy();
                });
        });

        it('type tokens', () => {
            element.type = 'tokens';
            element.tokens = tokens;
            element.colors = colors;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const tabs = element.shadowRoot.querySelector(
                        '[data-element-id="ul-tabs"]'
                    );
                    expect(tabs).toBeFalsy();

                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette).toBeTruthy();
                    expect(palette.colors).toMatchObject(tokens);
                    expect(palette.variant).toBe('list');
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
                    expect(dropdown.className).toContain(
                        'slds-nubbin_top-left'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-nubbin_top-right'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-dropdown_center'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-dropdown_center'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-dropdown_bottom'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-dropdown_bottom'
                    );
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
                    expect(dropdown.className).toContain(
                        'slds-nubbin_bottom-left'
                    );
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
        it('message when bad input value', () => {
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
        it('message when missing value', () => {
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
            element.colors = colors;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.colors).toMatchObject(colors);
                });
        });

        // Hide clear icon
        it('hideClearIcon = false', () => {
            element.hideClearIcon = false;
            element.value = '#333';

            return Promise.resolve().then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button-clear"]'
                );
                expect(button).toBeTruthy();
            });
        });

        it('hideClearIcon = true', () => {
            element.hideClearIcon = true;
            element.value = '#333';

            return Promise.resolve().then(() => {
                const button = element.shadowRoot.querySelector(
                    '[data-element-id="button-clear"]'
                );
                expect(button).toBeFalsy();
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

        // Inline
        it('inline', () => {
            const groups = ['firstGroup', 'secondGroup'];
            element.colors = colors;
            element.groups = groups;
            element.paletteHideOutline = true;
            element.paletteShowCheckmark = true;
            element.inline = true;
            element.paletteTileHeight = 100;
            element.paletteTileWidth = 30;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    expect(button).toBeFalsy();

                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette).toBeTruthy();
                    expect(palette.groups).toEqual(groups);
                    expect(palette.colors).toEqual(colors);
                    expect(palette.hideOutline).toBe(true);
                    expect(palette.showCheckmark).toBe(true);
                    expect(palette.tileHeight).toBe(100);
                    expect(palette.tileWidth).toBe(30);

                    const tab = element.shadowRoot.querySelector(
                        '[data-element-id="custom"]'
                    );
                    tab.click();
                })
                .then(() => {
                    const footer = element.shadowRoot.querySelector(
                        '.slds-popover__footer'
                    );
                    expect(footer).toBeFalsy();
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

        // palette-hide-outline
        it('paletteHideOutline', () => {
            element.paletteHideOutline = true;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.hideOutline).toBeTruthy();
                });
        });

        // palette-show-checkmark
        it('paletteShowCheckmark', () => {
            element.paletteShowCheckmark = true;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.showCheckmark).toBeTruthy();
                });
        });

        // palette-tile-height
        it('paletteTileHeight', () => {
            element.paletteTileHeight = 45;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.tileHeight).toBe(45);
                });
        });

        // palette-tile-width
        it('paletteTileWidth', () => {
            element.paletteTileWidth = 45;

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.tileWidth).toBe(45);
                });
        });
    });

    describe('Methods', () => {
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
                    expect(
                        handler.mock.calls[0][0].detail.hexa
                    ).toBeUndefined();
                    expect(handler.mock.calls[0][0].detail.rgb).toBeUndefined();
                    expect(
                        handler.mock.calls[0][0].detail.rgba
                    ).toBeUndefined();
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
                });
        });

        // checkValidity
        // Depends on required
        it('checkValidity method, valid', () => {
            element.required = false;

            return Promise.resolve().then(() => {
                expect(element.checkValidity()).toBeTruthy();
            });
        });

        it('checkValidity method, invalid', () => {
            element.required = true;

            return Promise.resolve().then(() => {
                expect(element.checkValidity()).toBeFalsy();
            });
        });

        // reportValidity
        // Depends on required
        it('reportValidity method', () => {
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
        it('showHelpMessageIfInvalid method', () => {
            element.required = true;
            element.showHelpMessageIfInvalid();

            return Promise.resolve().then(() => {
                const help = element.shadowRoot.querySelector(
                    '[data-help-message]'
                );
                expect(help).toBeTruthy();
            });
        });
    });

    describe('Events', () => {
        it('blur', () => {
            const handler = jest.fn();
            element.addEventListener('blur', handler);
            const input = element.shadowRoot.querySelector(
                '[data-element-id="input"]'
            );

            return Promise.resolve().then(() => {
                input.blur();
                input.dispatchEvent(new CustomEvent('blur'));
                expect(handler).toHaveBeenCalled();
                expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
                expect(handler.mock.calls[0][0].composed).toBeFalsy();
                expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
            });
        });

        it('focus', () => {
            const handler = jest.fn();
            element.addEventListener('focus', handler);
            const input = element.shadowRoot.querySelector(
                '[data-element-id="input"]'
            );

            return Promise.resolve().then(() => {
                input.focus();
                input.dispatchEvent(new CustomEvent('focus'));
                expect(handler).toHaveBeenCalled();
                expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
                expect(handler.mock.calls[0][0].composed).toBeFalsy();
                expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
            });
        });

        it('close popover on outside click', () => {
            return Promise.resolve()
                .then(() => {
                    element.shadowRoot
                        .querySelector('[data-element-id="button"]')
                        .click();
                })
                .then(() => {
                    const popoverElement = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    );
                    popoverElement.dispatchEvent(new CustomEvent('blur'));
                    expect(popoverElement.classList).not.toContain(
                        'slds-is-open'
                    );
                });
        });

        it('do not close popover on inside click', () => {
            return Promise.resolve()
                .then(() => {
                    element.shadowRoot
                        .querySelector('[data-element-id="button"]')
                        .click();
                })
                .then(() => {
                    const popover = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    ).parentElement;
                    popover.dispatchEvent(new CustomEvent('mouseenter'));
                })
                .then(() => {
                    const popover = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    ).parentElement;
                    popover.dispatchEvent(new CustomEvent('blur'));
                })
                .then(() => {
                    const popoverElement = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    );
                    expect(popoverElement).not.toBeNull();
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
                        '.slds-dropdown-trigger'
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
                        '.slds-dropdown-trigger'
                    );
                    expect(dropdownTrigger.classList).toContain('slds-is-open');
                });
        });

        it('click on custom tab', () => {
            return Promise.resolve()
                .then(() => {
                    element.shadowRoot
                        .querySelector('[data-element-id="button"]')
                        .click();
                })
                .then(() => {
                    const dropdownElement = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    );
                    const customTab = dropdownElement.querySelector(
                        '[data-element-id="custom"]'
                    );
                    customTab.click();
                    const defaultTab = dropdownElement.querySelector(
                        '[data-element-id="default"]'
                    );
                    expect(defaultTab.classList).not.toContain(
                        'slds-is-active'
                    );
                });
        });

        it('do not close popover on blur', () => {
            element.type = 'custom';
            return Promise.resolve()
                .then(() => {
                    element.shadowRoot
                        .querySelector('[data-element-id="button"]')
                        .click();
                })
                .then(() => {
                    const dropdownElement = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    );
                    dropdownElement.blur();

                    expect(dropdownElement).not.toBeNull();
                });
        });

        it('do not close popover on shift + tab', () => {
            return Promise.resolve()
                .then(() => {
                    element.shadowRoot
                        .querySelector('[data-element-id="button"]')
                        .click();
                })
                .then(() => {
                    const dropdownElement = element.shadowRoot.querySelector(
                        '[data-element-id="div-dropdown"]'
                    );

                    dropdownElement.dispatchEvent(
                        new KeyboardEvent('keydown', {
                            keyCode: 9,
                            shiftKey: true
                        })
                    );

                    expect(dropdownElement).not.toBeNull();
                });
        });

        // cancel button
        // Depends on type
        it('cancel button in the dropdown', () => {
            element.type = 'custom';

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

            return Promise.resolve()
                .then(() => {
                    const button = element.shadowRoot.querySelector(
                        '[data-element-id="button"]'
                    );
                    button.click();
                })
                .then(() => {
                    const gradient = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-gradient"]'
                    );
                    gradient.dispatchEvent(
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
            element.tokens = tokens;
            jest.useFakeTimers();

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
                    // The palette is loading when we open the popover
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.isLoading).toBeTruthy();
                    jest.runAllTimers();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.isLoading).toBeFalsy();
                    palette.dispatchEvent(
                        new CustomEvent('change', {
                            detail: color,
                            bubbles: true,
                            cancelable: true
                        })
                    );
                })
                .then(() => {
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.hex).toBe(color.hex);
                    expect(handler.mock.calls[0][0].detail.hexa).toBe(
                        color.hexa
                    );
                    expect(handler.mock.calls[0][0].detail.rgb).toBe(color.rgb);
                    expect(handler.mock.calls[0][0].detail.rgba).toBe(
                        color.rgba
                    );
                    expect(handler.mock.calls[0][0].detail.token).toBe(
                        color.token
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeTruthy();

                    const dropdownTrigger = element.shadowRoot.querySelector(
                        '.slds-dropdown-trigger'
                    );
                    expect(dropdownTrigger.classList).not.toContain(
                        'slds-is-open'
                    );
                });
        });

        it('change event after "default" tab click in inline mode with lastSelectedToken', () => {
            const handler = jest.fn();
            element.addEventListener('change', handler);
            element.inline = true;
            jest.useFakeTimers();

            const color = {
                hex: '#014486',
                hexa: '#014486ff',
                rgb: 'rgb(1,68,134)',
                rgba: 'rgba(1,68,134,1)'
            };

            return Promise.resolve()
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    palette.dispatchEvent(
                        new CustomEvent('change', {
                            detail: color,
                            bubbles: true,
                            cancelable: true
                        })
                    );
                })
                .then(() => {
                    const customTab = element.shadowRoot.querySelector(
                        '[data-element-id="custom"]'
                    );
                    customTab.click();
                })
                .then(() => {
                    const defaultTab = element.shadowRoot.querySelector(
                        '[data-element-id="default"]'
                    );
                    defaultTab.click();
                })
                .then(() => {
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.hex).toBe(color.hex);
                    expect(handler.mock.calls[0][0].detail.hexa).toBe(
                        color.hexa
                    );
                    expect(handler.mock.calls[0][0].detail.rgb).toBe(color.rgb);
                    expect(handler.mock.calls[0][0].detail.rgba).toBe(
                        color.rgba
                    );
                    expect(handler.mock.calls[0][0].detail.token).toBe(
                        color.token
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
                });
        });

        it('change event after "tokens" tab click in inline mode with lastSelectedToken', () => {
            const handler = jest.fn();
            element.addEventListener('change', handler);
            element.tokens = tokens;
            element.inline = true;
            jest.useFakeTimers();

            const color = {
                hex: '#014486',
                hexa: '#014486ff',
                rgb: 'rgb(1,68,134)',
                rgba: 'rgba(1,68,134,1)',
                label: 'brand-accessible-active',
                token: '--lwc-brand-accessible-active'
            };

            return Promise.resolve()
                .then(() => {
                    const tokensTab = element.shadowRoot.querySelector(
                        '[data-element-id="a-tokens-tab"]'
                    );
                    tokensTab.click();
                })
                .then(() => {
                    // The palette is loading when we open the popover
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.isLoading).toBeTruthy();
                    jest.runAllTimers();
                })
                .then(() => {
                    const palette = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-palette"]'
                    );
                    expect(palette.isLoading).toBeFalsy();
                    palette.dispatchEvent(
                        new CustomEvent('change', {
                            detail: color,
                            bubbles: true,
                            cancelable: true
                        })
                    );
                })
                .then(() => {
                    const customTab = element.shadowRoot.querySelector(
                        '[data-element-id="custom"]'
                    );
                    customTab.click();
                })
                .then(() => {
                    const tokensTab = element.shadowRoot.querySelector(
                        '[data-element-id="a-tokens-tab"]'
                    );
                    tokensTab.click();
                })
                .then(() => {
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.hex).toBe(color.hex);
                    expect(handler.mock.calls[0][0].detail.hexa).toBe(
                        color.hexa
                    );
                    expect(handler.mock.calls[0][0].detail.rgb).toBe(color.rgb);
                    expect(handler.mock.calls[0][0].detail.rgba).toBe(
                        color.rgba
                    );
                    expect(handler.mock.calls[0][0].detail.token).toBe(
                        color.token
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeTruthy();
                });
        });

        // done button
        // Depends on type
        it('done button', () => {
            element.type = 'custom';
            const handler = jest.fn();
            element.addEventListener('change', handler);

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

                    const gradient = element.shadowRoot.querySelector(
                        '[data-element-id="avonni-color-gradient"]'
                    );

                    gradient.dispatchEvent(
                        new CustomEvent('change', {
                            detail: {
                                hex: '#e3abec'
                            }
                        })
                    );
                    doneButton.click();
                })
                .then(() => {
                    expect(element.value).toBe('#e3abec');
                    expect(handler).toHaveBeenCalled();
                });
        });
    });
});
