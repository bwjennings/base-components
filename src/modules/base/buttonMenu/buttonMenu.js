import { api } from 'lwc';
import { classSet } from 'c/utils';
import {
    normalizeBoolean,
    normalizeString,
    observePosition,
    keyCodes,
    buttonGroupOrderClass
} from 'c/utilsPrivate';
import { Tooltip } from 'c/tooltipLibrary';
import PrimitiveButton from 'c/primitiveButton';

const i18n = {
    loading: 'Loading',
    showMenu: 'Show Menu'
};

const MENU_ALIGNMENTS = {
    valid: [
        'left',
        'center',
        'right',
        'bottom-left',
        'bottom-center',
        'bottom-right'
    ],
    default: 'left'
};

const ICON_SIZES = {
    valid: ['xx-small', 'x-small', 'small', 'medium', 'large'],
    default: 'small'
};

const DEFAULT_ICON_NAME = 'utility:down';
const MENU_ITEM_TAG = 'lightning-menu-item';

/**
 * @class
 * @descriptor avonni-button-menu
 * @storyId example-button-menu--base
 * @public
 */
export default class ButtonMenu extends PrimitiveButton {
    static delegatesFocus = true;
    /**
     * The keyboard shortcut for the button menu.
     *
     * @name accessKey
     * @public
     * @type {string}
     */
    /**
     * The assistive text for the button menu.
     *
     * @public
     * @type {string}
     * @default Show Menu
     */
    @api alternativeText = i18n.showMenu;
    /**
     * If present, the menu can't be opened by users.
     *
     * @name disabled
     * @public
     * @type {boolean}
     * @default false
     */
    /**
     * Describes the reason for showing the draft indicator. This is required when is-draft is true.
     *
     * @public
     * @type {string}
     */
    @api draftAlternativeText;
    /**
     * Reserved for internal use only.
     * Describes the order of this element (first, middle or last) inside a lightning-button-group.
     *
     * @type {string}
     * @public
     */
    @api groupOrder;
    /**
     * URL to set for the image attribute.
     *
     * @name iconSrc
     * @public
     * @type {string}
     */
    /**
     * Optional text to be shown on the button.
     *
     * @name label
     * @public
     * @type {string}
     */
    /**
     * Message displayed while the menu is in the loading state.
     *
     * @public
     * @type {string}
     * @default Loading
     */
    @api loadingStateAlternativeText = i18n.loading;
    /**
     * Displays title text when the mouse moves over the button menu.
     *
     * @name title
     * @public
     * @type {string}
     */
    /**
     * The value for the button element. This value is optional and can be used when submitting a form.
     *
     * @name value
     * @public
     * @type {string}
     */
    /**
     * The variant changes the look of the button. Accepted variants include bare, bare-inverse, base, border, border-filled,
     * border-inverse, brand, brand-outline, container, destructive, destructive-text, neutral, inverse and success.
     *
     * @name variant
     * @public
     * @type {string}
     * @default neutral
     */

    _hideDownArrow = false;
    _iconName = DEFAULT_ICON_NAME;
    _iconSize = ICON_SIZES.default;
    _isDraft = false;
    _isLoading = false;
    _menuAlignment = MENU_ALIGNMENTS.default;
    _nubbin = false;
    _tooltip;

    _boundingRect = {};
    _dropdownVisible = false;
    _focusOnIndexDuringRenderedCallback = null;
    _needsFocusAfterRender = false;
    _rerenderFocus = false;

    dropdownOpened = false;

    /*
     * ------------------------------------------------------------
     *  LIFECYCLE HOOKS
     * -------------------------------------------------------------
     */

    connectedCallback() {
        super.connectedCallback();
        this.classList.add(
            'slds-dropdown-trigger',
            'slds-dropdown-trigger_click'
        );
    }

    renderedCallback() {
        super.renderedCallback();
        this.initTooltip();

        if (this._dropdownVisible && this._rerenderFocus) {
            this.focusOnMenuItemAfterRender();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /*
     * ------------------------------------------------------------
     *  PUBLIC PROPERTIES
     * -------------------------------------------------------------
     */

    /**
     * If present, the small down arrow normaly displayed to the right of a custom icon is hidden. Without a custom icon-name this does nothing.
     *
     * @public
     * @type {boolean}
     * @default false
     */
    @api
    get hideDownArrow() {
        return this._hideDownArrow;
    }
    set hideDownArrow(value) {
        this._hideDownArrow = normalizeBoolean(value);
    }

    /**
     * The name of the icon to be used in the format 'utility:down'. If an icon other than 'utility:down' or 'utility:chevrondown' is used, a utility:down icon is appended to the right of that icon.
     *
     * @public
     * @type {string}
     * @default utility:down
     */
    @api
    get iconName() {
        return this._iconName;
    }
    set iconName(value) {
        this._iconName = normalizeString(value);
    }

    /**
     * The size of the icon. Options include xx-small, x-small, small, medium or large.
     *
     * @public
     * @type {string}
     * @default medium
     */
    @api
    get iconSize() {
        return this._iconSize;
    }
    set iconSize(size) {
        this._iconSize = normalizeString(size, {
            fallbackValue: ICON_SIZES.default,
            validValues: ICON_SIZES.valid
        });
    }

    /**
     * If present, the menu trigger shows a draft indicator.
     *
     * @public
     * @type {boolean}
     * @default false
     */
    @api
    get isDraft() {
        return this._isDraft;
    }
    set isDraft(value) {
        this._isDraft = normalizeBoolean(value);
        if (this._isDraft && this._connected) {
            this.classList.add('slds-is-unsaved');
        }
    }

    /**
     * If true, the menu is in a loading state and shows a spinner.
     *
     * @public
     * @type {boolean}
     * @default false
     */
    @api
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        const normalizedValue = normalizeBoolean(value);
        if (this.isAutoAlignment) {
            this.stopPositioning();
        }
        this._isLoading = normalizedValue;
    }

    /**
     * Determines the alignment of the menu relative to the button. Available options are: auto, left, center, right, bottom-left, bottom-center, bottom-right. The auto option aligns the dropdown menu based on available space.
     *
     * @public
     * @type {string}
     * @default left
     */
    @api
    get menuAlignment() {
        return this._menuAlignment;
    }
    set menuAlignment(value) {
        this._menuAlignment = normalizeString(value, {
            fallbackValue: MENU_ALIGNMENTS.default,
            validValues: MENU_ALIGNMENTS.valid
        });
    }

    /**
     * If present, a nubbin is present on the menu. A nubbin is a stub that protrudes from the menu item towards the button menu. The nubbin position is based on the menu-alignment.
     *
     * @public
     * @type {boolean}
     * @default false
     */
    @api
    get nubbin() {
        return this._nubbin;
    }
    set nubbin(value) {
        this._nubbin = normalizeBoolean(value);
    }

    /**
     * Text to display when the user mouses over or focuses on the button. The tooltip is auto-positioned relative to the button and screen space.
     *
     * @public
     * @type {string}
     */
    @api
    get tooltip() {
        return this._tooltip ? this._tooltip.value : undefined;
    }
    set tooltip(value) {
        if (this._tooltip) {
            this._tooltip.value = value;
        } else if (value) {
            this._tooltip = new Tooltip(value, {
                root: this,
                target: () =>
                    this.template.querySelector('[data-element-id="button"]')
            });
            this._tooltip.initialize();
        }
    }

    /*
     * ------------------------------------------------------------
     *  PRIVATE PROPERTIES
     * -------------------------------------------------------------
     */

    /**
     * Return a true string if the popover is visible and a false string if not.
     *
     * @type {string}
     */
    get computedAriaExpanded() {
        return String(this._dropdownVisible);
    }

    /**
     * Computed button class styling.
     *
     * @type {string}
     */
    get computedButtonClass() {
        const isBare =
            this.variant === 'bare' ||
            this.variant === 'bare-inverse' ||
            this.variant === 'base';
        const isAddedVariant =
            this.variant === 'brand' ||
            this.variant === 'brand-outline' ||
            this.variant === 'destructive' ||
            this.variant === 'destructive-text' ||
            this.variant === 'inverse' ||
            this.variant === 'neutral' ||
            this.variant === 'success';
        const useMoreContainer =
            this.variant === 'container' ||
            this.variant === 'bare-inverse' ||
            this.variant === 'border-inverse';

        const classes = classSet('slds-button');

        classes.add(`avonni-button-menu_${this.variant}`);
        classes.add(buttonGroupOrderClass(this.groupOrder));

        if (this.label) {
            classes.add({
                'avonni-button-menu__button_label': this.label,
                'slds-button_neutral':
                    this.variant === 'border' ||
                    this.variant === 'border-filled' ||
                    this.variant === 'neutral',
                'slds-button_inverse':
                    this.variant === 'inverse' ||
                    this.variant === 'bare-inverse' ||
                    this.variant === 'border-inverse',
                'slds-button_brand': this.variant === 'brand',
                'slds-button_outline-brand': this.variant === 'brand-outline',
                'slds-button_destructive': this.variant === 'destructive',
                'slds-button_text-destructive':
                    this.variant === 'destructive-text',
                'slds-button_success': this.variant === 'success',
                'avonni-button-menu__button_large': this.iconSize === 'large'
            });
        } else {
            classes.add({
                'slds-button_icon':
                    !this.computedHideDownIcon && !this.variant === 'base',
                'slds-button_icon-bare': isBare,
                'avonni-button-menu__button-icon-more':
                    !useMoreContainer && !this.computedHideDownIcon,
                'avonni-button-menu__button-icon-container-more':
                    useMoreContainer && !this.computedHideDownIcon,
                'slds-button_icon-brand slds-button_icon':
                    this.variant === 'brand',
                'slds-button_icon-container':
                    this.variant === 'container' && this.computedHideDownIcon,
                'slds-button_icon-border':
                    this.variant === 'border' && this.computedHideDownIcon,
                'slds-button_icon-border-filled':
                    this.variant === 'border-filled',
                'slds-button_icon-border-inverse':
                    this.variant === 'border-inverse',
                'slds-button_icon-inverse': this.variant === 'bare-inverse',
                'avonni-button-menu__button-icon': isAddedVariant,
                'slds-button_icon-xx-small': this.iconSize === 'xx-small',
                'slds-button_icon-x-small': this.iconSize === 'x-small',
                'slds-button_icon-small': this.iconSize === 'small'
            });
            if (
                this.iconSrc ||
                (this.iconName && !this.iconSrc && !this.label)
            ) {
                classes.add(`avonni-button-menu__icon_${this.iconSize}`).add({
                    'avonni-button-menu__button-icon':
                        this.iconSrc || this.iconName
                });
            }
        }
        return classes;
    }

    /**
     * Computed dropdown class styling.
     *
     * @type {string}
     */
    get computedDropdownClass() {
        return classSet('slds-dropdown')
            .add({
                'slds-dropdown_left':
                    this.menuAlignment === 'left' || this.isAutoAlignment,
                'slds-dropdown_center': this.menuAlignment === 'center',
                'slds-dropdown_right': this.menuAlignment === 'right',
                'slds-dropdown_bottom': this.menuAlignment.includes('bottom'),
                'slds-dropdown_right slds-dropdown_bottom-right':
                    this.menuAlignment === 'bottom-right',
                'slds-dropdown_left slds-dropdown_bottom-left':
                    this.menuAlignment === 'bottom-left',
                'slds-nubbin_top-left':
                    this.nubbin && this.menuAlignment === 'left',
                'slds-nubbin_top-right':
                    this.nubbin && this.menuAlignment === 'right',
                'slds-nubbin_top':
                    this.nubbin && this.menuAlignment === 'center',
                'slds-nubbin_bottom-left':
                    this.nubbin && this.menuAlignment === 'bottom-left',
                'slds-nubbin_bottom-right':
                    this.nubbin && this.menuAlignment === 'bottom-right',
                'slds-nubbin_bottom':
                    this.nubbin && this.menuAlignment === 'bottom-center',
                'slds-p-vertical_large': this.isLoading
            })
            .toString();
    }

    /**
     * Show downwards icon on button.
     *
     * @type {boolean}
     */
    get computedHideDownIcon() {
        return (
            this.hideDownArrow ||
            ((this.iconName === 'utility:down' ||
                this.iconName === 'utility:chevrondown') &&
                !this.iconSrc)
        );
    }

    /**
     * Computed size for the icon.
     *
     * @type {string}
     */
    get computedIconSize() {
        if (this.label) {
            return this.iconSize === 'large' || this.iconSize === 'xx-small'
                ? this.iconSize
                : 'x-small';
        }
        if (this.iconSize === 'medium') {
            return 'x-small';
        } else if (this.iconSize === 'large') {
            return 'small';
        }
        return '';
    }

    /**
     * Computed icon svg class styling.
     *
     * @type {string}
     */
    get computedIconSvgClass() {
        if (this.label) {
            return 'slds-button__icon slds-button__icon_right';
        }
        return 'slds-button__icon';
    }

    /**
     * Computed image class styling.
     *
     * @type {string}
     */
    get computedImageClass() {
        return classSet('avonni-button-menu__image')
            .add(`avonni-button-menu__image_${this.iconSize}`)
            .add({ 'slds-m-left_xx-small': this.label })
            .toString();
    }

    /**
     * Computed loading state default or loading state alternative text.
     *
     * @type {string}
     */
    get computedLoadingStateAlternativeText() {
        return this.loadingStateAlternativeText || i18n.loading;
    }

    /**
     * Returns true if menu alignment is auto.
     *
     * @type {boolean}
     */
    get isAutoAlignment() {
        return this.menuAlignment.startsWith('auto');
    }

    /**
     * Display icon only if iconName is set and src is not set.
     *
     * @type {boolean}
     */
    get showIcon() {
        return this.iconName && !this.iconSrc;
    }

    /*
     * ------------------------------------------------------------
     *  PUBLIC METHODS
     * -------------------------------------------------------------
     */

    /**
     * Simulate a mouse click on the button.
     *
     * @public
     */
    @api
    click() {
        if (this._connected) {
            this.template.querySelector('[data-element-id="button"]').click();
        }
    }

    /**
     * Set focus on the button.
     *
     * @public
     */
    @api
    focus() {
        if (this._connected) {
            this.focusOnButton();
        }
    }

    /*
     * ------------------------------------------------------------
     *  PRIVATE METHODS
     * -------------------------------------------------------------
     */

    /**
     * Allow blur.
     */
    allowBlur() {
        this._cancelBlur = false;
    }

    /**
     * Cancel blur.
     */
    cancelBlur() {
        this._cancelBlur = true;
    }

    /**
     * Blur cancel and set focus on menu item.
     *
     * @param {object} menuItem
     */
    cancelBlurAndFocusOnMenuItem(menuItem) {
        if (menuItem) {
            this.cancelBlur();
            menuItem.focus();
        }
    }

    /**
     * Close menu.
     */
    close() {
        if (this._dropdownVisible) {
            this.toggleMenuVisibility();
        }
    }

    /**
     * Find menu item's index.
     *
     * @param {object} menuItemElement
     * @returns {number} index of menu item
     */
    findMenuItemIndex(menuItemElement) {
        return this.getMenuItems().indexOf(menuItemElement);
    }

    /**
     * Find menu item from event target.
     *
     * @param {Element} element
     * @returns {Element} menu item
     */
    findMenuItemFromEventTarget(element) {
        let currentNode = element;
        const stopAtElement = this.template.querySelector("[role='menu']");

        while (currentNode !== stopAtElement) {
            if (currentNode.tagName === MENU_ITEM_TAG.toUpperCase()) {
                return currentNode;
            }
            if (currentNode.parentNode) {
                currentNode = currentNode.parentNode;
            } else {
                return null;
            }
        }
        return null;
    }

    /**
     * Button focus.
     */
    focusOnButton() {
        this.template.querySelector('[data-element-id="button"]').focus();
    }

    /**
     * Set focus on menu item via Item Index.
     *
     * @param {object} itemIndex
     */
    focusOnMenuItem(itemIndex) {
        if (this._dropdownVisible) {
            const menuItem = this.getMenuItemByIndex(itemIndex);
            this.cancelBlurAndFocusOnMenuItem(menuItem);
        }
    }

    /**
     * Return focus on menu item after render.
     */
    focusOnMenuItemAfterRender() {
        let focusOnIndex = this._focusOnIndexDuringRenderedCallback || 0;
        const menuItems = this.getMenuItems();

        if (focusOnIndex === 'LAST') {
            focusOnIndex = menuItems.length - 1;

            if (focusOnIndex < 0) {
                focusOnIndex = 'LAST';
            }
        }

        if (focusOnIndex !== 'LAST') {
            if (focusOnIndex > menuItems.length - 1 && menuItems.length > 0) {
                focusOnIndex = menuItems.length - 1;
            }

            this.focusOnMenuItem(focusOnIndex);
            this._focusOnIndexDuringRenderedCallback = null;
        }
        this._rerenderFocus = false;
    }

    /**
     * Get item with index in menu item array.
     *
     * @param {object[]} index
     * @return menu item from array
     */
    getMenuItemByIndex(index) {
        return this.getMenuItems()[index];
    }

    /**
     * Get item array from menu.
     *
     * @return {object[]}
     */
    getMenuItems() {
        return Array.from(this.querySelectorAll(MENU_ITEM_TAG));
    }

    /**
     * Tooltip initialization.
     */
    initTooltip() {
        if (this._tooltip && !this._tooltip.initialized) {
            this._tooltip.initialize();
        }
    }

    /**
     * Poll bounding rect position for button menu.
     */
    pollBoundingRect() {
        if (this.isAutoAlignment && this._dropdownVisible) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                if (this._connected) {
                    observePosition(this, 300, this._boundingRect, () => {
                        this.close();
                    });

                    this.pollBoundingRect();
                }
            }, 250);
        }
    }

    /**
     * To prevent default action and stop propagation of event
     *
     * @param {Event} event
     */
    preventDefaultAndStopPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    /**
     * Menu visibility toggle handler.
     */
    toggleMenuVisibility() {
        if (!this.disabled) {
            this._dropdownVisible = !this._dropdownVisible;
            this._rerenderFocus = this._dropdownVisible;

            if (!this._dropdownVisible) {
                this.querySelectorAll('.avonni-submenu').forEach((submenu) => {
                    submenu.close();
                });
            }

            if (!this.dropdownOpened && this._dropdownVisible) {
                this.dropdownOpened = true;
            }

            if (this._dropdownVisible) {
                this._boundingRect = this.getBoundingClientRect();
                this.pollBoundingRect();
                this.dispatchOpen();
            } else {
                this.dispatchClose();
            }

            this.classList.toggle('slds-is-open');
        }
    }

    /*
     * ------------------------------------------------------------
     *  EVENT HANDLERS
     * -------------------------------------------------------------
     */

    /**
     * Blur handler.
     */
    handleBlur() {
        if (this._cancelBlur) {
            return;
        }

        if (this._dropdownVisible) {
            this.toggleMenuVisibility();
        }
        this.dispatchEvent(new CustomEvent('blur'));
    }

    /**
     * Focus handler.
     */
    handleFocus() {
        /**
         * @event
         * @name focus
         */
        this.dispatchEvent(new CustomEvent('focus'));
    }

    /**
     * Button click handler.
     */
    handleButtonClick() {
        this.allowBlur();
        this.toggleMenuVisibility();
        this.focusOnButton();
    }

    /**
     * Handle a key down pressed on the button. Toggle the opening of the menu if the key is right.
     *
     * @param {Event} event `keydown` event.
     */
    handleButtonKeyDown(event) {
        const key = event.key;
        const isValidKey = key === 'Enter' || key === ' ' || key === 'Spacebar';
        if (isValidKey) {
            this.handleButtonClick();
        }
    }

    /**
     * Button mouse down handler.
     *
     * @param {Event} event
     */
    handleButtonMouseDown(event) {
        const mainButton = 0;
        if (event.button === mainButton) {
            this.cancelBlur();
        }
    }

    /**
     * Dropdown menu mouse down handler.
     *
     * @param {Event} event
     */
    handleDropdownMouseDown(event) {
        const mainButton = 0;
        if (event.button === mainButton) {
            this.cancelBlur();
        }
    }

    /**
     * Dropdown menu mouse up handler.
     */
    handleDropdownMouseUp() {
        this.allowBlur();
    }

    /**
     * Dropdown menu mouse leave handler.
     */
    handleDropdownMouseLeave() {
        if (!this._menuHasFocus) {
            this.close();
        }
    }

    /**
     * Dropdown menu scroll event handler.
     *
     * @param {Event} event
     */
    handleDropdownScroll(event) {
        event.stopPropagation();
    }

    /**
     * Menu item keydown handler.
     *
     * @param {Event} event
     */
    handleKeyOnMenuItem(event) {
        const menuItem = this.findMenuItemFromEventTarget(event.target);
        if (menuItem)
            this.handleKeyDownOnMenuItem(
                event,
                this.findMenuItemIndex(menuItem)
            );
    }

    /**
     * Menu item keydown handler to change focus on correct item.
     *
     * @param {Event} event
     */
    handleKeyDownOnMenuItem(event, menuItemIndex) {
        switch (event.keyCode) {
            case keyCodes.down:
            case keyCodes.up: {
                this.preventDefaultAndStopPropagation(event);
                let nextIndex =
                    event.keyCode === keyCodes.up
                        ? menuItemIndex - 1
                        : menuItemIndex + 1;

                if (nextIndex >= this.getMenuItems().length) {
                    nextIndex = 0;
                } else if (nextIndex < 0) {
                    nextIndex = this.getMenuItems().length - 1;
                }
                this.focusOnMenuItem(nextIndex);
                break;
            }
            case keyCodes.escape: {
                if (this._dropdownVisible) {
                    if (event.keyCode === keyCodes.escape) {
                        this.preventDefaultAndStopPropagation(event);
                    }
                    this.toggleMenuVisibility();
                }
                this.focusOnMenuItem(0);
                break;
            }
            default:
        }
    }

    /**
     * Menu item selector handler.
     *
     * @param {Event} event
     */
    handleMenuItemPrivateSelect(event) {
        if (event.detail.type === 'submenu') {
            event.target.parentElement
                .querySelectorAll('.avonni-submenu')
                .forEach((submenu) => {
                    submenu.close();
                });
            if (!this._dropdownVisible) {
                this.toggleMenuVisibility();
                event.target.focus();
            }
        } else {
            if (this._dropdownVisible) {
                this.toggleMenuVisibility();
                this.focusOnButton();
            }
        }

        event.stopPropagation();

        if (event.detail.type === 'dialog') {
            let dialog = this.querySelector(
                '[dialog-name=' + event.detail.value + ']'
            );
            if (dialog) {
                dialog.show();
                this.template
                    .querySelector('[data-element-id="button"]')
                    .blur();
            }
        }

        this.dispatchSelect(event);
    }

    /**
     * Menu item mouse over handler.
     *
     * @param {Event} event
     */
    handleMouseOverOnMenuItem(event) {
        const menuItem = this.findMenuItemFromEventTarget(event.target);

        if (event.target.classList.value.indexOf('avonni-submenu') === -1) {
            event.target.parentElement
                .querySelectorAll('.avonni-submenu')
                .forEach((submenu) => {
                    submenu.close();
                });
        }

        if (menuItem) {
            const menuItemIndex = this.findMenuItemIndex(menuItem);
            this.focusOnMenuItem(menuItemIndex);
        }
    }

    /**
     * Private blur handler.
     *
     * @param {Event} event
     */
    handlePrivateBlur(event) {
        event.stopPropagation();

        this.handleBlur();
        this._menuHasFocus = false;
    }

    /**
     * Private focus handler.
     *
     * @param {Event} event
     */
    handlePrivateFocus(event) {
        event.stopPropagation();

        this.allowBlur();
        this._menuHasFocus = true;
    }

    /*
     * -------------------------------------------------------------
     *  EVENT DISPATCHERS
     * -------------------------------------------------------------
     */

    /**
     * Menu close dispatch method.
     */
    dispatchClose() {
        /**
         * The event fired when the dropdown menu is closed.
         *
         * @event
         * @name close
         * @public
         */
        this.dispatchEvent(new CustomEvent('close'));
    }

    /**
     * Menu open dispatch method.
     */
    dispatchOpen() {
        /**
         * The event fired when the dropdown menu is opened.
         *
         * @event
         * @name open
         * @public
         */
        this.dispatchEvent(new CustomEvent('open'));
    }

    /**
     * Menu item select dispatch method.
     *
     * @param {Event} event
     */
    dispatchSelect(event) {
        /**
         * The event fired when a menu item is selected.
         *
         * @event
         * @name select
         * @param {string} value Value of the selected option.
         * @public
         * @cancelable
         */
        this.dispatchEvent(
            new CustomEvent('select', {
                cancelable: true,
                detail: {
                    value: event.detail.value
                }
            })
        );
    }
}
