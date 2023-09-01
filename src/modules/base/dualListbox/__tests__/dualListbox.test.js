

import { createElement } from 'lwc';
import { Options, OptionsWithGroups } from '../__docs__/data';
import DualListbox from 'c/dualListbox';

// Not tested
// maxVisibleOptions, because depends on DOM measurements (offsetHeight)

let element = null;
describe('DualListbox', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-dual-listbox', {
            is: DualListbox
        });
        // The options are added to all tests to prevent a console.warn
        element.options = Options;
        document.body.appendChild(element);
    });

    describe('Attributes', () => {
        it('Default attributes', () => {
            expect(element.addButtonIconName).toBe('utility:right');
            expect(element.addButtonLabel).toBeUndefined();
            expect(element.hideBottomDivider).toBeFalsy();
            expect(element.buttonSize).toBe('medium');
            expect(element.buttonVariant).toBe('border');
            expect(element.disableReordering).toBeFalsy();
            expect(element.disabled).toBeFalsy();
            expect(element.downButtonIconName).toBe('utility:down');
            expect(element.downButtonLabel).toBeUndefined();
            expect(element.draggable).toBeFalsy();
            expect(element.enableInfiniteLoading).toBeFalsy();
            expect(element.fieldLevelHelp).toBeUndefined();
            expect(element.isLoading).toBeFalsy();
            expect(element.label).toBeUndefined();
            expect(element.loadMoreOffset).toBe(20);
            expect(element.max).toBeUndefined();
            expect(element.min).toBe(0);
            expect(element.messageWhenRangerOverflow).toBeUndefined();
            expect(element.messageWhenRangerUnderflow).toBeUndefined();
            expect(element.messageWhenValueIsMissing).toBeUndefined();
            expect(element.name).toBeUndefined();
            expect(element.required).toBeFalsy();
            expect(element.requiredOptions).toMatchObject([]);
            expect(element.allowSearch).toBeFalsy();
            expect(element.selectedLabel).toBeUndefined();
            expect(element.selectedPlaceholder).toBeUndefined();
            expect(element.maxVisibleOptions).toBe(5);
            expect(element.sourceLabel).toBeUndefined();
            expect(element.upButtonIconName).toBe('utility:up');
            expect(element.upButtonLabel).toBeUndefined();
            expect(element.validity).toBeUndefined();
            expect(element.value).toMatchObject([]);
            expect(element.variant).toBe('standard');
            expect(element.size).toBe('responsive');
        });

        // add-button-icon-name & add-button-label
        describe('Add button icon name and label', () => {
            it('Add button icon name and label', () => {
                element.addButtonIconName = 'utility:add';
                element.addButtonLabel = 'add';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-add"]'
                        );
                    expect(lightningButtonIcon.iconName).toBe('utility:add');
                    expect(lightningButtonIcon.title).toBe('add');
                });
            });
        });

        // button-size
        describe('Button Size', () => {
            it('xx-small', () => {
                element.buttonSize = 'xx-small';

                return Promise.resolve().then(() => {
                    expect(element.buttonSize).toBe('xx-small');
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.size).toBe('xx-small');
                    });
                });
            });

            it('x-small', () => {
                element.buttonSize = 'x-small';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.size).toBe('x-small');
                    });
                });
            });

            it('small', () => {
                element.buttonSize = 'small';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.size).toBe('small');
                    });
                });
            });

            it('medium', () => {
                element.buttonSize = 'medium';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.size).toBe('medium');
                    });
                });
            });

            it('large', () => {
                element.buttonSize = 'large';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.size).toBe('large');
                    });
                });
            });
        });

        // button-variant
        describe('Button Variant', () => {
            it('bare', () => {
                element.buttonVariant = 'bare';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('bare');
                    });
                });
            });

            it('container', () => {
                element.buttonVariant = 'container';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('container');
                    });
                });
            });

            it('brand', () => {
                element.buttonVariant = 'brand';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('brand');
                    });
                });
            });

            it('border-filled', () => {
                element.buttonVariant = 'border-filled';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('border-filled');
                    });
                });
            });

            it('bare-inverse', () => {
                element.buttonVariant = 'bare-inverse';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('bare-inverse');
                    });
                });
            });

            it('border-inverse', () => {
                element.buttonVariant = 'border-inverse';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    lightningButtonIcon.forEach((button) => {
                        expect(button.variant).toBe('border-inverse');
                    });
                });
            });
        });

        // disable-reordering
        describe('Disable Reordering', () => {
            it('True', () => {
                element.disableReordering = true;
                element.addButtonLabel = 'add';
                element.removeButtonLabel = 'remove';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                    expect(lightningButtonIcon.length).toBe(2);
                    expect(lightningButtonIcon[0].title).toBe('add');
                    expect(lightningButtonIcon[1].title).toBe('remove');
                });
            });
        });

        // disabled
        describe('Disabled', () => {
            it('True', () => {
                element.disabled = true;
                element.addButtonLabel = 'add';
                element.downButtonLabel = 'down';
                element.removeButtonLabel = 'remove';
                element.upButtonLabel = 'up';

                return Promise.resolve()
                    .then(() => {
                        const columns = element.shadowRoot.querySelectorAll(
                            '.slds-dueling-list__options'
                        );

                        columns.forEach((column) => {
                            expect(column.classList).toContain(
                                'slds-is-disabled'
                            );
                        });
                    })
                    .then(() => {
                        const buttons = element.shadowRoot.querySelectorAll(
                            '[data-element-id^="lightning-button-icon"]'
                        );

                        buttons.forEach((button) => {
                            expect(button.disabled).toBeTruthy();
                        });
                    });
            });
        });

        // down-button-icon-name & down-button-label
        describe('Down button icon name and label', () => {
            it('Down button icon name and label', () => {
                element.downButtonIconName = 'utility:apex';
                element.downButtonLabel = 'down';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-down"]'
                        );
                    expect(lightningButtonIcon.iconName).toBe('utility:apex');
                    expect(lightningButtonIcon.title).toBe('down');
                });
            });
        });

        // draggagble
        describe('Draggable', () => {
            it('True', () => {
                element.draggable = true;

                return Promise.resolve().then(() => {
                    const optionsDraggable =
                        element.shadowRoot.querySelectorAll(
                            '.slds-listbox__option'
                        );
                    optionsDraggable.forEach((option) => {
                        expect(option.draggable).toBeTruthy();
                    });
                });
            });

            it('True and disabled is true', () => {
                element.draggable = true;
                element.disabled = true;

                return Promise.resolve().then(() => {
                    const optionsDraggable =
                        element.shadowRoot.querySelectorAll(
                            '.slds-listbox__option'
                        );
                    optionsDraggable.forEach((option) => {
                        expect(option.draggable).toBeFalsy();
                    });
                });
            });
        });

        // field-level-help
        describe('Field level help', () => {
            it('Field level help', () => {
                element.fieldLevelHelp = 'A string help';

                return Promise.resolve().then(() => {
                    const help = element.shadowRoot.querySelector(
                        '[data-element-id="lightning-helptext"]'
                    );
                    expect(help).toBeTruthy();
                });
            });
        });

        // hide bottom divider
        describe('Hide Bottom Divider', () => {
            it('Hidden', () => {
                element.hideBottomDivider = true;

                return Promise.resolve().then(() => {
                    const li = element.shadowRoot.querySelectorAll(
                        '.slds-listbox__item'
                    );
                    li.forEach((item) => {
                        expect(item.className).not.toContain(
                            'avonni-dual-listbox__option_border-bottom'
                        );
                    });
                });
            });
        });

        // isLoading
        describe('Is loading', () => {
            it('True', () => {
                element.isLoading = true;

                return Promise.resolve().then(() => {
                    const spinner = element.shadowRoot.querySelector(
                        '[data-element-id="lightning-spinner"]'
                    );
                    expect(spinner).toBeTruthy();
                });
            });
        });

        // label
        describe('Label', () => {
            it('Label', () => {
                element.label = 'A string label';

                return Promise.resolve().then(() => {
                    const label = element.shadowRoot.querySelector(
                        '.slds-form-element__label'
                    );
                    expect(label.textContent).toBe('A string label');
                });
            });
        });

        describe('Load more offset', () => {
            it('Affects the loadmore event trigger', () => {
                element.loadMoreOffset = 100;
                element.enableInfiniteLoading = true;
                element.options = Options;

                const handler = jest.fn();

                return Promise.resolve().then(() => {
                    const source = element.shadowRoot.querySelector(
                        '[data-element-id="div-source-list"]'
                    );

                    jest.spyOn(
                        source,
                        'scrollHeight',
                        'get'
                    ).mockImplementation(() => 500);
                    jest.spyOn(source, 'scrollTop', 'get').mockImplementation(
                        () => 399
                    );
                    element.addEventListener('loadmore', handler);

                    source.dispatchEvent(new CustomEvent('scroll'));
                    expect(handler).not.toHaveBeenCalled();

                    jest.spyOn(source, 'scrollTop', 'get').mockImplementation(
                        () => 400
                    );
                    source.dispatchEvent(new CustomEvent('scroll'));
                    expect(handler).toHaveBeenCalled();
                });
            });
        });

        // message-when-range-overflow and max
        describe('Message when range overflow and max', () => {
            it('Message is displayed when value is greater than max', () => {
                element.max = 2;
                element.messageWhenRangeOverflow = 'Maximum Capacity!';
                element.value = ['1', '2', '3'];
                element.addButtonLabel = 'add';

                return Promise.resolve()
                    .then(() => {
                        const lightningButtonIcon =
                            element.shadowRoot.querySelector(
                                '[data-element-id="lightning-button-icon-add"]'
                            );
                        element.focus();
                        lightningButtonIcon.click();
                        element.blur();
                    })
                    .then(() => {
                        const div = element.shadowRoot.querySelector(
                            '[data-element-id="div-alert"]'
                        );
                        const message = element.shadowRoot.querySelector(
                            '.slds-has-error.slds-form-element__help'
                        );
                        expect(message.textContent).toBe('Maximum Capacity!');
                        expect(div).toBeTruthy();
                    });
            });
        });

        // message-when-range-underflow and min
        describe('Message when range underflow and min', () => {
            it('Message is displayed when value is lesser than min', () => {
                element.messageWhenRangeUnderflow = 'Minimum Capacity!';
                element.min = 5;
                element.value = ['1', '2', '3', '4', '5'];
                element.removeButtonLabel = 'remove';

                return Promise.resolve()
                    .then(() => {
                        const opt = element.shadowRoot.querySelector(
                            "div[data-value='1']"
                        );
                        opt.click();
                        const lightningButtonIcon =
                            element.shadowRoot.querySelector(
                                '[data-element-id="lightning-button-icon-remove"]'
                            );
                        lightningButtonIcon.click();
                        element.blur();
                    })
                    .then(() => {
                        element.value = [];
                        const message = element.shadowRoot.querySelector(
                            '.slds-has-error.slds-form-element__help'
                        );
                        expect(message.textContent).toBe('Minimum Capacity!');
                    });
            });
        });

        // message-when-value-missing
        describe('Message when value missing', () => {
            it('Message is displayed when it is required and value is empty', () => {
                element.required = true;
                element.messageWhenValueMissing = 'Missing value!';
                element.value = ['1'];
                element.removeButtonLabel = 'remove';

                return Promise.resolve()
                    .then(() => {
                        const opt = element.shadowRoot.querySelector(
                            "div[data-value='1']"
                        );
                        opt.click();
                        const lightningButtonIcon =
                            element.shadowRoot.querySelector(
                                '[data-element-id="lightning-button-icon-remove"]'
                            );
                        lightningButtonIcon.click();
                        element.blur();
                    })
                    .then(() => {
                        element.value = [];
                        const message = element.shadowRoot.querySelector(
                            '.slds-has-error.slds-form-element__help'
                        );
                        expect(message.textContent).toBe('Missing value!');
                    });
            });
        });

        // options
        describe('Options', () => {
            it('Simple options', () => {
                const options = [
                    {
                        value: '1',
                        label: 'Option 1'
                    },
                    {
                        value: '2',
                        label: 'Option 2'
                    }
                ];

                element.options = options;

                return Promise.resolve()
                    .then(() => {
                        const optionValue = element.shadowRoot.querySelector(
                            "div[data-value='1']"
                        );
                        expect(optionValue).toBeTruthy();
                    })
                    .then(() => {
                        const label =
                            element.shadowRoot.querySelector(
                                '.slds-media__body'
                            );
                        expect(label.textContent).toBe('Option 1');
                    });
            });

            it('Options have avatars', () => {
                const options = [
                    {
                        value: '1',
                        label: 'Option 1',
                        iconName: 'standard:address'
                    }
                ];

                element.options = options;

                return Promise.resolve()
                    .then(() => {
                        const optionValue = element.shadowRoot.querySelector(
                            "div[data-value='1']"
                        );
                        expect(optionValue).toBeTruthy();
                    })
                    .then(() => {
                        const label =
                            element.shadowRoot.querySelector(
                                '.slds-media__body'
                            );
                        expect(label.textContent).toBe('Option 1');
                    });
            });

            it('Options are part of groups', () => {
                const options = [
                    {
                        value: '1',
                        label: 'Option 1',
                        groupName: 'Odd'
                    },
                    {
                        value: '2',
                        label: 'Option 2',
                        groupName: 'Even'
                    }
                ];

                element.options = options;

                return Promise.resolve().then(() => {
                    const optionValue = element.shadowRoot.querySelectorAll(
                        '.slds-listbox__option-header'
                    );
                    expect(optionValue[0].textContent).toBe('Odd');
                    expect(optionValue[1].textContent).toBe('Even');
                });
            });
        });

        // remove-button-icon-name & remove-button-label
        describe('Remove button icon name and label', () => {
            it('Remove button icon name and label', () => {
                element.removeButtonIconName = 'utility:apex';
                element.removeButtonLabel = 'remove';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-remove"]'
                        );
                    expect(lightningButtonIcon.iconName).toBe('utility:apex');
                    expect(lightningButtonIcon.title).toBe('remove');
                });
            });
        });

        // required
        describe('Required', () => {
            it('True', () => {
                element.required = true;

                return Promise.resolve().then(() => {
                    const asterisk =
                        element.shadowRoot.querySelector('.slds-required');
                    expect(asterisk).toBeTruthy();
                });
            });
        });

        // required options
        describe('Required options', () => {
            it('Required options are always selected', () => {
                return Promise.resolve()
                    .then(() => {
                        element.requiredOptions = ['1'];
                    })
                    .then(() => {
                        const selected = element.shadowRoot.querySelector(
                            '[data-element-id="ul-selected-list"]'
                        );
                        expect(selected.querySelectorAll('li')).toHaveLength(1);
                    });
            });
        });

        // allow search
        describe('Allow search', () => {
            it('True', () => {
                element.allowSearch = true;

                return Promise.resolve().then(() => {
                    const searchBox = element.shadowRoot.querySelector(
                        '[data-element-id="lightning-input"]'
                    );
                    expect(searchBox).toBeTruthy();
                    expect(searchBox.type).toBe('search');
                });
            });
        });

        // selected label and source label
        describe('Selected and source labels', () => {
            it('Selected and source labels', () => {
                element.sourceLabel = 'A string source label';
                element.selectedLabel = 'A string selected label';

                return Promise.resolve().then(() => {
                    const Labels = element.shadowRoot.querySelectorAll(
                        'span.slds-form-element__label'
                    );
                    expect(Labels[0].textContent).toBe('A string source label');
                    expect(Labels[1].textContent).toBe(
                        'A string selected label'
                    );
                });
            });
        });

        // selected placeholder
        describe('Selected placeholder', () => {
            it('Selected placeholder', () => {
                element.value = [];
                element.selectedPlaceholder = 'A string selected placeholder';

                return Promise.resolve().then(() => {
                    const placeHolder = element.shadowRoot.querySelector(
                        '[data-element-id="span-selected-placeholder"]'
                    );
                    expect(placeHolder.textContent).toBe(
                        'A string selected placeholder'
                    );
                });
            });
        });

        // up-button-icon-name & up-button-label
        describe('Up button icon name and label', () => {
            it('Icon name and label are set on button icon', () => {
                element.upButtonIconName = 'utility:apex';
                element.upButtonLabel = 'up';

                return Promise.resolve().then(() => {
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-up"]'
                        );
                    expect(lightningButtonIcon.iconName).toBe('utility:apex');
                    expect(lightningButtonIcon.title).toBe('up');
                });
            });
        });

        // value
        describe('Value', () => {
            it('Array', () => {
                element.value = ['1', '2', '3'];

                return Promise.resolve().then(() => {
                    const source = element.shadowRoot.querySelector(
                        '[data-element-id="ul-source-list"]'
                    );
                    const selected = element.shadowRoot.querySelector(
                        '[data-element-id="ul-selected-list"]'
                    );
                    expect(
                        source.querySelectorAll('[data-element-id="li-source"]')
                    ).toHaveLength(7);
                    expect(
                        selected.querySelectorAll(
                            '[data-element-id="li-selected"]'
                        )
                    ).toHaveLength(3);
                });
            });

            it('String', () => {
                element.value = '1';

                return Promise.resolve().then(() => {
                    const source = element.shadowRoot.querySelector(
                        '[data-element-id="ul-source-list"]'
                    );
                    const selected = element.shadowRoot.querySelector(
                        '[data-element-id="ul-selected-list"]'
                    );
                    expect(
                        source.querySelectorAll('[data-element-id="li-source"]')
                    ).toHaveLength(9);
                    expect(
                        selected.querySelectorAll(
                            '[data-element-id="li-selected"]'
                        )
                    ).toHaveLength(1);
                });
            });
        });

        // variants
        describe('Variants', () => {
            it('Label hidden', () => {
                element.label = 'This is a label-hidden';
                element.variant = 'label-hidden';

                return Promise.resolve().then(() => {
                    const label = element.shadowRoot.querySelector(
                        '.slds-assistive-text'
                    );
                    expect(label.textContent).toBe('This is a label-hidden');
                });
            });

            it('Label stacked', () => {
                element.variant = 'label-stacked';

                return Promise.resolve().then(() => {
                    const div = element.shadowRoot.querySelector(
                        '.slds-form-element_stacked'
                    );
                    expect(div).toBeTruthy();
                });
            });
        });

        // size
        describe('Size', () => {
            it('small', () => {
                element.size = 'small';

                return Promise.resolve().then(() => {
                    const columns = element.shadowRoot.querySelectorAll(
                        '.avonni-dual-listbox__list-column'
                    );
                    const boxes = element.shadowRoot.querySelectorAll(
                        '.slds-dueling-list__options'
                    );

                    const sourceListColumn = columns[0];
                    const selectedListColumn = columns[2];
                    expect(sourceListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_small'
                    );
                    expect(selectedListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_small'
                    );
                    boxes.forEach((box) => {
                        expect(box.className).toContain(
                            'avonni-dual-listbox__box_size-small'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-medium'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-large'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-responsive'
                        );
                    });
                });
            });

            it('medium', () => {
                element.size = 'medium';

                return Promise.resolve().then(() => {
                    const columns = element.shadowRoot.querySelectorAll(
                        '.avonni-dual-listbox__list-column'
                    );
                    const boxes = element.shadowRoot.querySelectorAll(
                        '.slds-dueling-list__options'
                    );

                    const sourceListColumn = columns[0];
                    const selectedListColumn = columns[2];
                    expect(sourceListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_medium'
                    );
                    expect(selectedListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_medium'
                    );
                    boxes.forEach((box) => {
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-small'
                        );
                        expect(box.className).toContain(
                            'avonni-dual-listbox__box_size-medium'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-large'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-responsive'
                        );
                    });
                });
            });

            it('large', () => {
                element.size = 'large';

                return Promise.resolve().then(() => {
                    const columns = element.shadowRoot.querySelectorAll(
                        '.avonni-dual-listbox__list-column'
                    );
                    const boxes = element.shadowRoot.querySelectorAll(
                        '.slds-dueling-list__options'
                    );

                    const sourceListColumn = columns[0];
                    const selectedListColumn = columns[2];
                    expect(sourceListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_large'
                    );
                    expect(selectedListColumn.className).toBe(
                        'avonni-dual-listbox__list-column avonni-dual-listbox__list-column_responsive_large'
                    );
                    boxes.forEach((box) => {
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-small'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-medium'
                        );
                        expect(box.className).toContain(
                            'avonni-dual-listbox__box_size-large'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-responsive'
                        );
                    });
                });
            });

            it('responsive', () => {
                element.size = 'responsive';

                return Promise.resolve().then(() => {
                    const boxes = element.shadowRoot.querySelectorAll(
                        '.slds-dueling-list__options'
                    );

                    boxes.forEach((box) => {
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-small'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-medium'
                        );
                        expect(box.className).not.toContain(
                            'avonni-dual-listbox__box_size-large'
                        );
                        expect(box.className).toContain(
                            'avonni-dual-listbox__box_size-responsive'
                        );
                    });
                });
            });
        });
    });

    /*
     * ------------------------------------------------------------
     *  USER ACTIONS
     * -------------------------------------------------------------
     */

    describe('User actions', () => {
        // testing selection
        it('selection', () => {
            return Promise.resolve().then(() => {
                const options = element.shadowRoot.querySelectorAll(
                    '[data-element-id="div-source"]'
                );
                const firstOption = options[0];
                firstOption.click();
                const secondOption = options[1];
                expect(firstOption.tabIndex).toBe(0);
                expect(secondOption.tabIndex).toBe(-1);
            });
        });

        // data-index
        it('data-index sourceBox', () => {
            element.options = OptionsWithGroups;

            return Promise.resolve().then(() => {
                const sourceBox = element.shadowRoot.querySelector(
                    '[data-element-id="ul-source-list"]'
                );
                const option = sourceBox.querySelectorAll(
                    '.slds-listbox__option'
                );
                const firstOption = option[0];
                expect(firstOption.getAttribute('data-index')).toBe('0');
                const secondOption = option[1];
                expect(secondOption.getAttribute('data-index')).toBe('1');
            });
        });

        it('data-index selectedBox', () => {
            element.options = OptionsWithGroups;
            element.value = ['1', '2'];

            return Promise.resolve().then(() => {
                const selectedBox = element.shadowRoot.querySelector(
                    '[data-element-id="ul-selected-list"]'
                );
                const option = selectedBox.querySelectorAll(
                    '.slds-listbox__option'
                );
                const firstOption = option[0];
                expect(firstOption.getAttribute('data-index')).toBe('0');
                const secondOption = option[1];
                expect(secondOption.getAttribute('data-index')).toBe('1');
            });
        });
    });

    /*
     * ------------------------------------------------------------
     *  EVENTS
     * -------------------------------------------------------------
     */

    describe('Events', () => {
        // change
        describe('change', () => {
            it('Move an option down', () => {
                element.value = ['1', '2', '3'];
                element.downButtonLabel = 'down';

                const handler = jest.fn();
                element.addEventListener('change', handler);

                return Promise.resolve().then(() => {
                    const selectedBox = element.shadowRoot.querySelector(
                        '[data-element-id="ul-selected-list"]'
                    );
                    const options = selectedBox.querySelectorAll(
                        '.slds-listbox__option'
                    );
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-down"]'
                        );
                    options[1].click();
                    lightningButtonIcon.click();
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.value).toMatchObject(
                        ['1', '3', '2']
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeTruthy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });

            it('Move an option up', () => {
                element.value = ['1', '2', '3'];
                element.upButtonLabel = 'up';

                const handler = jest.fn();
                element.addEventListener('change', handler);

                return Promise.resolve().then(() => {
                    const selectedBox = element.shadowRoot.querySelector(
                        '[data-element-id="ul-selected-list"]'
                    );
                    const options = selectedBox.querySelectorAll(
                        '.slds-listbox__option'
                    );
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-up"]'
                        );
                    options[1].click();
                    lightningButtonIcon.click();
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.value).toMatchObject(
                        ['2', '1', '3']
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeTruthy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });

            it('Remove an option', () => {
                element.value = ['1', '2'];
                element.removeButtonLabel = 'remove';

                const handler = jest.fn();
                element.addEventListener('change', handler);

                return Promise.resolve().then(() => {
                    const selectedBox = element.shadowRoot.querySelector(
                        '[data-element-id="ul-selected-list"]'
                    );
                    const options = selectedBox.querySelectorAll(
                        '.slds-listbox__option'
                    );
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-remove"]'
                        );
                    options[1].click();
                    lightningButtonIcon.click();
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.value).toMatchObject(
                        ['1']
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeTruthy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });

            it('Select an option', () => {
                element.value = ['1', '2'];
                element.addButtonLabel = 'add';

                const handler = jest.fn();
                element.addEventListener('change', handler);

                return Promise.resolve().then(() => {
                    const option = element.shadowRoot.querySelector(
                        '.slds-listbox__option'
                    );
                    option.click();
                    const lightningButtonIcon =
                        element.shadowRoot.querySelector(
                            '[data-element-id="lightning-button-icon-add"]'
                        );
                    lightningButtonIcon.click();
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.value).toMatchObject(
                        ['1', '2', '3']
                    );
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeTruthy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });
        });

        describe('loadmore', () => {
            it('Triggered on first load if all options are visible', () => {
                element.options = Options;

                const handler = jest.fn();
                element.addEventListener('loadmore', handler);

                return Promise.resolve().then(() => {
                    const sourceBox = element.shadowRoot.querySelector(
                        '[data-element-id="div-source-list"]'
                    );
                    jest.spyOn(
                        sourceBox,
                        'scrollHeight',
                        'get'
                    ).mockImplementation(() => {
                        return 100;
                    });
                    jest.spyOn(
                        sourceBox,
                        'offsetHeight',
                        'get'
                    ).mockImplementation(() => {
                        return 100;
                    });

                    element.enableInfiniteLoading = true;
                    expect(handler).toHaveBeenCalled();
                    const call = handler.mock.calls[0][0];
                    expect(call.detail.searchTerm).toBeUndefined();
                    expect(call.bubbles).toBeFalsy();
                    expect(call.cancelable).toBeFalsy();
                    expect(call.composed).toBeFalsy();
                });
            });

            it('Not triggered on first load if options are long', () => {
                element.options = Options;

                const handler = jest.fn();
                element.addEventListener('loadmore', handler);

                return Promise.resolve().then(() => {
                    const sourceBox = element.shadowRoot.querySelector(
                        '[data-element-id="div-source-list"]'
                    );
                    jest.spyOn(
                        sourceBox,
                        'scrollHeight',
                        'get'
                    ).mockImplementation(() => {
                        return 400;
                    });

                    jest.spyOn(
                        sourceBox,
                        'offsetHeight',
                        'get'
                    ).mockImplementation(() => {
                        return 100;
                    });

                    element.enableInfiniteLoading = true;
                    expect(handler).not.toHaveBeenCalled();
                });
            });

            it('Search term is passed through the event', () => {
                element.options = Options;
                element.allowSearch = true;

                const handler = jest.fn();
                element.addEventListener('loadmore', handler);

                return Promise.resolve().then(() => {
                    const search = element.shadowRoot.querySelector(
                        '[data-element-id="lightning-input"]'
                    );
                    search.dispatchEvent(
                        new CustomEvent('change', {
                            detail: {
                                value: 'some search term'
                            },
                            bubbles: true
                        })
                    );

                    element.enableInfiniteLoading = true;
                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.searchTerm).toBe(
                        'some search term'
                    );
                });
            });
        });

        // optionclick
        describe('optionclick', () => {
            it('Triggered using the mouse', () => {
                const handler = jest.fn();
                element.addEventListener('optionclick', handler);
                element.value = [Options[0].value, Options[1].value];

                return Promise.resolve().then(() => {
                    const options = element.shadowRoot.querySelectorAll(
                        '[data-element-id="div-source"]'
                    );
                    const selectedOptions = element.shadowRoot.querySelectorAll(
                        '[data-element-id="div-selected"]'
                    );
                    options[2].dispatchEvent(new CustomEvent('mouseup'));
                    selectedOptions[1].dispatchEvent(
                        new CustomEvent('mouseup')
                    );

                    expect(handler).toHaveBeenCalledTimes(2);
                    expect(handler.mock.calls[0][0].detail.value).toBe('5');
                    expect(handler.mock.calls[1][0].detail.value).toBe('2');
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });

            it('Triggered using the keyboard', () => {
                const handler = jest.fn();
                element.addEventListener('optionclick', handler);

                return Promise.resolve().then(() => {
                    const options = element.shadowRoot.querySelectorAll(
                        '[data-element-id="div-source"]'
                    );

                    const event = new CustomEvent('keydown');
                    event.key = ' ';
                    event.keyCode = 32;
                    options[1].dispatchEvent(event);

                    expect(handler).toHaveBeenCalled();
                    expect(handler.mock.calls[0][0].detail.value).toBe('2');
                    expect(handler.mock.calls[0][0].bubbles).toBeTruthy();
                    expect(handler.mock.calls[0][0].composed).toBeFalsy();
                    expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
                });
            });
        });
    });
});
