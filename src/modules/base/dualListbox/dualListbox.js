import { LightningElement, api } from 'lwc';
import {
    equal,
    normalizeBoolean,
    normalizeString,
    normalizeArray,
    getListHeight
} from 'c/utilsPrivate';
import { classSet, formatLabel, generateUUID } from 'c/utils';
import { FieldConstraintApi, InteractingState } from 'c/inputUtils';
import { handleKeyDownOnOption } from './keyboard';
import Option from './option';

const DEFAULT_MIN = 0;
const DEFAULT_ADD_BUTTON_ICON_NAME = 'utility:right';
const DEFAULT_DOWN_BUTTON_ICON_NAME = 'utility:down';
const DEFAULT_LOAD_MORE_OFFSET = 20;
const DEFAULT_REMOVE_BUTTON_ICON_NAME = 'utility:left';
const DEFAULT_UP_BUTTON_ICON_NAME = 'utility:up';
const DEFAULT_MAX_VISIBLE_OPTIONS = 5;
const BASE_OPTION_HEIGHT = 40;
const SEARCH_BOX_HEIGHT = 48;

const LABEL_VARIANTS = {
    valid: ['standard', 'label-hidden', 'label-stacked'],
    default: 'standard'
};

const BUTTON_VARIANTS = {
    valid: [
        'bare',
        'container',
        'brand',
        'border',
        'border-filled',
        'bare-inverse',
        'border-inverse'
    ],
    default: 'border'
};

const BUTTON_SIZES = {
    valid: ['xx-small', 'x-small', 'small', 'medium', 'large'],
    default: 'medium'
};

const BOXES_SIZES = {
    valid: ['small', 'medium', 'large', 'responsive'],
    default: 'responsive'
};

const i18n = {
    optionLockAssistiveText: 'Option Lock AssistiveText',
    required: 'Required',
    loadingText: 'Loading'
};

const SELECTED_LIST_ID = 'ul-selected-list';
const SOURCE_LIST_ID = 'ul-source-list';

/**
 * @class
 * @descriptor avonni-dual-listbox
 * @storyId example-dual-listbox--base
 * @public
 */
export default class DualListbox extends LightningElement {
    /**
     * Label of the add button.
     *
     * @type {string}
     * @public
     */
    @api addButtonLabel;

    /**
     * Label of the down button
     *
     * @type {string}
     * @public
     */
    @api downButtonLabel;

    /**
     * Help text detailing the purpose and function of the dual listbox.
     *
     * @type {string}
     * @public
     */
    @api fieldLevelHelp;

    /**
     * Label of the dual listbox.
     *
     * @type {string}
     * @public
     */
    @api label;

    /**
     * Error message to be displayed when a range overflow is detected.
     *
     * @type {string}
     * @public
     */
    @api
    messageWhenRangeOverflow;

    /**
     * Error message to be displayed when a range underflow is detected.
     *
     * @type {string}
     * @public
     */
    @api
    messageWhenRangeUnderflow;

    /**
     * Error message to be displayed when the value is missing and input is required.
     *
     * @type {string}
     * @public
     */
    @api
    messageWhenValueMissing;

    /**
     * Specifies the name of an input element.
     *
     * @type {string}
     * @public
     */
    @api name;

    /**
     * Label of the remove button.
     *
     * @type {string}
     * @public
     */
    @api removeButtonLabel;

    /**
     * Label of the Selected options list.
     *
     * @type {string}
     * @public
     */
    @api selectedLabel;

    /**
     * Text displayed when no options are selected.
     *
     * @type {string}
     * @public
     */
    @api selectedPlaceholder;

    /**
     * Label of the Source options list.
     *
     * @type {string}
     * @public
     */
    @api sourceLabel;

    /**
     * Label of the up button.
     *
     * @type {string}
     * @public
     */
    @api upButtonLabel;

    _addButtonIconName = DEFAULT_ADD_BUTTON_ICON_NAME;
    _allowSearch = false;
    _buttonSize = BUTTON_SIZES.default;
    _buttonVariant = BUTTON_VARIANTS.default;
    _disableReordering = false;
    _disabled = false;
    _downButtonIconName = DEFAULT_DOWN_BUTTON_ICON_NAME;
    _draggable = false;
    _enableInfiniteLoading = false;
    _hideBottomDivider = false;
    _isLoading = false;
    _loadMoreOffset = DEFAULT_LOAD_MORE_OFFSET;
    _max;
    _maxVisibleOptions = DEFAULT_MAX_VISIBLE_OPTIONS;
    _min = DEFAULT_MIN;
    _options = [];
    _removeButtonIconName = DEFAULT_REMOVE_BUTTON_ICON_NAME;
    _required = false;
    _requiredOptions = [];
    _search = this.computeSearch;
    _size = BOXES_SIZES.default;
    _upButtonIconName = DEFAULT_UP_BUTTON_ICON_NAME;
    _value = [];
    _variant = LABEL_VARIANTS.default;

    computedSelectedGroups = [];
    computedSourceGroups = [];
    computedValue = [];
    highlightedOptions = [];
    errorMessage = '';
    isFocusOnList = false;
    _connected = false;
    _computedSelectedList = [];
    _computedSourceList = [];
    _downButtonDisabled = false;
    _dropItSelected = false;
    _dropItSource = false;
    _focusableInSelected;
    _focusableInSource;
    _newIndex;
    _oldIndex;
    _previousScroll;
    _searchTerm;
    _upButtonDisabled = false;

    /*
     * ------------------------------------------------------------
     *  LIFECYCLE HOOKS
     * -------------------------------------------------------------
     */

    connectedCallback() {
        this.classList.add('slds-form-element');
        this.keyboardInterface = this.selectKeyboardInterface();

        // debounceInteraction since DualListbox has multiple focusable elements
        this.interactingState = new InteractingState({
            debounceInteraction: true
        });
        this.interactingState.onenter(() => {
            this.dispatchEvent(new CustomEvent('focus'));
        });
        this.interactingState.onleave(() => {
            this.showHelpMessageIfInvalid();
            this.dispatchEvent(new CustomEvent('blur'));

            // reset the optionToFocus otherwise dualListbox will steal the focus any time it's rerendered.
            this.optionToFocus = null;
        });

        this.initValue();
        this.initSourceGroups();
        this.initSelectedGroups();
        this._connected = true;
    }

    renderedCallback() {
        if (
            !this.options.length &&
            !this.enableInfiniteLoading &&
            !this.isLoading
        ) {
            console.warn(
                '<avonni-dual-listbox> Missing required "options" attribute.'
            );
        }

        if (this.disabled) {
            this._upButtonDisabled = true;
            this._downButtonDisabled = true;
            this.updateBoxesHeight();
            return;
        }

        const searchIsFocused =
            this.template.activeElement &&
            this.template.activeElement.dataset &&
            this.template.activeElement.dataset.elementId === 'lightning-input';
        if (this.optionToFocus && !searchIsFocused) {
            // value could have an apostrophe, which is why we need to escape it otherwise the queryselector will not work
            const option = this.template.querySelector(
                `div[data-value='${this.optionToFocus}']`
            );
            if (option) {
                this.isFocusOnList = true;
                option.focus();
            }
        }
        this.updateBoxesHeight();
        this.disabledButtons();
        this.setOptionIndexes();

        if (this.enableInfiniteLoading) {
            const sourceBox = this.template.querySelector(
                '[data-element-id="div-source-list"]'
            );
            if (sourceBox && sourceBox.scrollTop === 0) {
                this.handleScroll();
            }
        }
    }

    /*
     * ------------------------------------------------------------
     *  PUBLIC PROPERTIES
     * -------------------------------------------------------------
     */

    /**
     * Name of the add button icon, in the format 'utility:right'.
     *
     * @type {string}
     * @public
     * @default utility:right
     */
    @api
    get addButtonIconName() {
        return this._addButtonIconName;
    }

    set addButtonIconName(value) {
        this._addButtonIconName = value ? value : DEFAULT_ADD_BUTTON_ICON_NAME;
    }

    /**
     * If present, a search box is added to the first listbox.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get allowSearch() {
        return this._allowSearch;
    }

    set allowSearch(value) {
        this._allowSearch = normalizeBoolean(value);
    }

    /**
     * For the bare variant, valid values include x-small, small, medium, and large. For non-bare variants, valid values include xx-small, x-small, small, and medium.
     *
     * @type {string}
     * @public
     * @default medium
     */
    @api
    get buttonSize() {
        return this._buttonSize;
    }

    set buttonSize(size) {
        this._buttonSize = normalizeString(size, {
            fallbackValue: BUTTON_SIZES.default,
            validValues: BUTTON_SIZES.valid
        });
    }

    /**
     * Use this variant for all button icons (add, up, down and remove). Valid values include bare, container, brand, border, border-filled, bare-inverse and border-inverse.
     *
     * @type {string}
     * @public
     */
    @api
    get buttonVariant() {
        return this._buttonVariant;
    }

    set buttonVariant(variant) {
        this._buttonVariant = normalizeString(variant, {
            fallbackValue: BUTTON_VARIANTS.default,
            validValues: BUTTON_VARIANTS.valid
        });
    }

    /**
     * If present, the listbox is disabled and users cannot interact with it.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get disabled() {
        return this._disabled || false;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    /**
     * If present, the Up and Down buttons used for reordering are hidden.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get disableReordering() {
        return this._disableReordering;
    }

    set disableReordering(value) {
        this._disableReordering = normalizeBoolean(value);
    }

    /**
     *Name of the down button icon to be used in the format ‘utility:down’.
     *
     * @type {string}
     * @public
     * @default utility:down
     */
    @api
    get downButtonIconName() {
        return this._downButtonIconName;
    }

    set downButtonIconName(value) {
        this._downButtonIconName = value
            ? value
            : DEFAULT_DOWN_BUTTON_ICON_NAME;
    }

    /**
     * If present, the options are draggable.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get draggable() {
        if (this.disabled) {
            return false;
        }
        return this._draggable;
    }

    set draggable(value) {
        this._draggable = normalizeBoolean(value);
    }

    /**
     * If present, you can load a subset of options and then display more when users scroll to the end of the source listbox. Use with the `loadmore` event handler to retrieve more data.
     *
     * @type {boolean}
     * @default false
     * @public
     */
    @api
    get enableInfiniteLoading() {
        return this._enableInfiniteLoading;
    }
    set enableInfiniteLoading(value) {
        this._enableInfiniteLoading = normalizeBoolean(value);

        if (this._connected) {
            this.handleScroll();
        }
    }

    /**
     * If present, hides the bottom divider.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get hideBottomDivider() {
        return this._hideBottomDivider || false;
    }

    set hideBottomDivider(value) {
        this._hideBottomDivider = normalizeBoolean(value);
    }

    /**
     * If present, the source options listbox is in a loading state and shows a spinner.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get isLoading() {
        return this._isLoading || false;
    }

    set isLoading(value) {
        this._isLoading = normalizeBoolean(value);
    }

    /**
     * Number of pixels from the bottom of the source listbox. If `enable-infinite-loading` is `true` and the source listbox is scrolled passed this limit, the `loadmore` event will be fired.
     *
     * @type {number}
     * @default 20
     * @public
     */
    @api
    get loadMoreOffset() {
        return this._loadMoreOffset;
    }
    set loadMoreOffset(value) {
        this._loadMoreOffset = isNaN(value)
            ? DEFAULT_LOAD_MORE_OFFSET
            : parseInt(value, 10);

        if (this._connected) {
            this.handleScroll();
        }
    }

    /**
     * Maximum number of options allowed in the selected options listbox.
     *
     * @type {number}
     * @default Infinity
     * @public
     */
    @api
    get max() {
        return this._max;
    }

    set max(value) {
        const number = isNaN(parseInt(value, 10))
            ? Infinity
            : parseInt(value, 10);
        this._max = number;
    }

    /**
     * Number of options displayed in the listboxes before vertical scrollbars are displayed. Determines the height of the listbox.
     *
     * @type {number}
     * @public
     * @default 5
     */
    @api
    get maxVisibleOptions() {
        return this._maxVisibleOptions;
    }

    set maxVisibleOptions(value) {
        const number = isNaN(parseInt(value, 10))
            ? DEFAULT_MAX_VISIBLE_OPTIONS
            : value;
        this._maxVisibleOptions = number;

        if (this._connected) {
            this.updateBoxesHeight();
        }
    }

    /**
     * Minimum number of options required in the selected options listbox.
     *
     * @type {number}
     * @default 0
     * @public
     */
    @api
    get min() {
        return this._min;
    }

    set min(value) {
        const number = isNaN(parseInt(value, 10))
            ? DEFAULT_MIN
            : parseInt(value, 10);
        this._min = number;
    }

    /**
     * Array of option objects that are available for selection.
     *
     * @type {object[]}
     * @public
     */
    @api
    get options() {
        return this._options;
    }

    set options(value) {
        this._options = Array.isArray(value)
            ? JSON.parse(JSON.stringify(value))
            : [];

        if (this._connected) {
            this.initValue();
            this.initSourceGroups();
            this.initSelectedGroups();
        }
    }

    /**
     * Name of the remove button icon in the format ‘utility:left’.
     *
     * @type {string}
     * @public
     * @default utility:left
     */
    @api
    get removeButtonIconName() {
        return this._removeButtonIconName;
    }

    set removeButtonIconName(value) {
        this._removeButtonIconName = value
            ? value
            : DEFAULT_REMOVE_BUTTON_ICON_NAME;
    }

    /**
     * If present, the user must add an item to the selected listbox before submitting the form.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get required() {
        return this._required;
    }

    set required(value) {
        this._required = normalizeBoolean(value);
    }

    /**
     * A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.
     *
     * @type {string[]}
     * @public
     */
    @api
    get requiredOptions() {
        return this._requiredOptions;
    }

    set requiredOptions(newValue) {
        const normalizedValue = Array.isArray(newValue)
            ? JSON.parse(JSON.stringify(newValue))
            : [];

        if (equal(this._requiredOptions, normalizedValue)) {
            return;
        }
        this._requiredOptions = normalizedValue;

        if (this._connected) {
            this.addRequiredOptionsToValue();
            this.initSourceGroups();
            this.initSelectedGroups();
        }
    }

    /**
     * Custom search function to execute instead of the default search. It has to:
     * * Take an object with two keys as an argument: options and searchTerm
     * * Return the new options.
     *
     * @type {function}
     * @public
     */
    @api
    get search() {
        return this._search;
    }
    set search(value) {
        this._search = typeof value === 'function' ? value : this.computeSearch;
    }

    /**
     * Width of the source options listbox and the selected options listbox. Valid values include small, medium and large.
     *
     * @type {string}
     * @public
     * @default responsive
     */
    @api
    get size() {
        return this._size;
    }

    set size(size) {
        this._size = normalizeString(size, {
            fallbackValue: BOXES_SIZES.default,
            validValues: BOXES_SIZES.valid
        });
    }

    /**
     * Name of the up button icon to be used in the format ‘utility:up’.
     *
     * @type {string}
     * @public
     * @default utility:up
     */
    @api
    get upButtonIconName() {
        return this._upButtonIconName;
    }

    set upButtonIconName(value) {
        this._upButtonIconName = value ? value : DEFAULT_UP_BUTTON_ICON_NAME;
    }

    /**
     * A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.
     *
     * @type {string[]}
     * @public
     */
    @api
    get value() {
        return this._value;
    }

    set value(newValue) {
        const normalizedValue =
            newValue && typeof newValue === 'string'
                ? [newValue]
                : [...normalizeArray(newValue)];
        if (equal(this._value, normalizedValue)) {
            return;
        }

        this._value = normalizedValue;
        this.highlightedOptions = [];

        if (this._connected) {
            this.initValue();
            this.initSourceGroups();
            this.initSelectedGroups();
        }
    }

    /**
     * The variant changes the appearance of the dual listbox. Valid variants include standard, label-hidden and label-stacked. Use label-hidden to hide the label but make it available to assistive technology. Use label-stacked to place the label above the dual listbox.
     *
     * @type {string}
     * @public
     * @default standard
     */
    @api
    get variant() {
        return this._variant;
    }

    set variant(variant) {
        this._variant = normalizeString(variant, {
            fallbackValue: LABEL_VARIANTS.default,
            validValues: LABEL_VARIANTS.valid
        });
    }

    /*
     * ------------------------------------------------------------
     *  PRIVATE PROPERTIES
     * -------------------------------------------------------------
     */

    /**
     * Get Aria Disabled.
     *
     * @type {string}
     */
    get ariaDisabled() {
        return String(this.disabled);
    }

    /**
     * Computed Group Label Class styling.
     *
     * @type {string}
     */
    get computedGroupLabelClass() {
        return classSet(
            'slds-form-element__label slds-form-element__legend avonni-dual-listbox__header'
        )
            .add({ 'slds-assistive-text': this.isLabelHidden })
            .toString();
    }

    /**
     * Computed Listbox Columns Class styling.
     *
     * @type {string}
     */
    get computedListboxColumnsClass() {
        return classSet('avonni-dual-listbox__list-column')
            .add({
                'avonni-dual-listbox__list-column_responsive_small ':
                    this._size === 'small',
                'avonni-dual-listbox__list-column_responsive_medium ':
                    this._size === 'medium',
                'avonni-dual-listbox__list-column_responsive_large ':
                    this._size === 'large',
                'slds-dueling-list__column_responsive':
                    this._size === 'responsive'
            })
            .toString();
    }

    /**
     * Computed Listbox Selected Container Class styling.
     *
     * @type {string}
     */
    get computedListboxSelectedContainerClass() {
        return classSet('slds-dueling-list__options avonni-dual-listbox__boxes')
            .add({ 'slds-is-disabled': this._disabled })
            .add({
                'avonni-dual-listbox__selected-list-with-search':
                    this._allowSearch
            })
            .add({
                'avonni-dual-listbox__empty-column': this.isSelectedBoxEmpty
            })
            .add(`avonni-dual-listbox__box_size-${this._size}`)
            .toString();
    }

    /**
     * Computed Listbox Source Container Class styling.
     *
     * @type {string}
     */
    get computedListboxSourceContainerClass() {
        return classSet('slds-dueling-list__options avonni-dual-listbox__boxes')
            .add({ 'slds-is-disabled': this._disabled })
            .add({ 'slds-is-relative': this._isLoading })
            .add(`avonni-dual-listbox__box_size-${this._size}`)
            .toString();
    }

    /**
     * Computed List Item Class styling.
     *
     * @type {string}
     */
    get computedListItemClass() {
        return classSet('slds-listbox__item')
            .add({
                'avonni-dual-listbox__option_border-bottom':
                    !this.hideBottomDivider
            })
            .toString();
    }

    /**
     * Computed Lock Assistive Text.
     *
     * @type {string}
     */
    get computedLockAssistiveText() {
        return formatLabel(
            this.i18n.optionLockAssistiveText,
            this.selectedLabel
        );
    }

    /**
     * Computed Outer Class styling.
     *
     * @type {string}
     */
    get computedOuterClass() {
        return classSet('')
            .add({
                'slds-form-element_stacked': this._variant === 'label-stacked'
            })
            .toString();
    }

    /**
     * Validation with constraint Api.
     *
     * @type {object}
     */
    get constraint() {
        if (!this.constraintApi) {
            this.constraintApi = new FieldConstraintApi(() => this, {
                valueMissing: () =>
                    !this.disabled &&
                    this.required &&
                    this._computedSelectedList.length < 1,
                rangeUnderflow: () =>
                    this._computedSelectedList.length < this.min,
                rangeOverflow: () =>
                    this._computedSelectedList.length > this.max
            });
        }
        return this.constraintApi;
    }

    /**
     * Generated unique ID key.
     */
    get generateKey() {
        return generateUUID();
    }

    /**
     * Localization.
     *
     * @type {i18n}
     */
    get i18n() {
        return i18n;
    }

    /**
     * Check if Label Hidden.
     *
     * @type {boolean}
     */
    get isLabelHidden() {
        return this.variant === 'label-hidden';
    }

    /**
     * Check if Selected Box is Empty.
     *
     * @type {boolean}
     */
    get isSelectedBoxEmpty() {
        return this.computedValue.length === 0;
    }

    /**
     * Computed class for the loading spinner wrapper.
     *
     * @type {string}
     */
    get loadingSpinnerClass() {
        return classSet({
            'slds-is-relative avonni-dual-listbox__loading-spinner':
                this.computedSourceGroups.length
        }).toString();
    }

    /**
     * Check if move buttons are disabled.
     *
     * @type {boolean}
     */
    get moveButtonsDisabled() {
        return this.disabled;
    }

    /**
     * True if the source list is scrolled to the end.
     *
     * @type {boolean}
     */
    get scrolledToEnd() {
        const sourceBox = this.template.querySelector(
            '[data-element-id="div-source-list"]'
        );
        const fullHeight = sourceBox.scrollHeight;
        const scrolledDistance = sourceBox.scrollTop;
        const visibleHeight = sourceBox.offsetHeight;
        return (
            visibleHeight + scrolledDistance + this.loadMoreOffset >= fullHeight
        );
    }

    get selectedBoxHeight() {
        const selectedOptions = this.template.querySelectorAll(
            '[data-element-id="li-selected"]'
        );

        let selectedHeight = getListHeight(
            selectedOptions,
            this._maxVisibleOptions
        );
        const selectedBoxNotFull =
            this._computedSelectedList.length < this._maxVisibleOptions;

        if (selectedBoxNotFull) {
            const firstOption = selectedOptions[0];
            const baseOptionHeight = firstOption
                ? firstOption.offsetHeight
                : BASE_OPTION_HEIGHT;
            const numberOfMissingOptions =
                this._maxVisibleOptions - this._computedSelectedList.length;

            selectedHeight += baseOptionHeight * numberOfMissingOptions;
        }
        return selectedHeight;
    }

    get selectedListId() {
        return SELECTED_LIST_ID;
    }

    get sourceBoxHeight() {
        const sourceOptions = this.template.querySelectorAll(
            '[data-element-id="li-source"]'
        );

        let sourceHeight = 0;
        if (this.allowSearch && this._computedSourceList.length === 0) {
            sourceHeight = this._maxVisibleOptions * 41;
        } else {
            sourceHeight = getListHeight(
                sourceOptions,
                this._maxVisibleOptions
            );
            const sourceBoxNotFull =
                this._computedSourceList.length < this._maxVisibleOptions;

            if (sourceBoxNotFull) {
                const firstOption = sourceOptions[0];
                const baseOptionHeight = firstOption
                    ? firstOption.offsetHeight
                    : BASE_OPTION_HEIGHT;
                const numberOfMissingOptions =
                    this._maxVisibleOptions - this._computedSourceList.length;
                sourceHeight += baseOptionHeight * numberOfMissingOptions;
            }
        }

        return sourceHeight;
    }

    get sourceListId() {
        return SOURCE_LIST_ID;
    }

    /**
     * Get validity from field constraint API.
     *
     * @type {boolean}
     */
    get validity() {
        return this.constraint.validity;
    }

    /*
     * ------------------------------------------------------------
     *  PUBLIC METHODS
     * -------------------------------------------------------------
     */

    /**
     * Checks if the input is valid.
     *
     * @returns {boolean} True if the element meets all constraint validations.
     * @public
     */
    @api
    checkValidity() {
        return this.constraint.checkValidity();
    }

    /**
     * Sets focus on the first option from either list. If the source list doesn't contain any options, the first option on the selected list is focused on.
     *
     * @public
     */
    @api
    focus() {
        const firstOption = this.template.querySelector(`div[data-index='0']`);
        if (firstOption) {
            firstOption.focus();
            this.updateSelectedOptions(firstOption, true, false);
        }
    }

    /**
     * Retrieve the current error message. If it is null than the input is valid.
     *
     * @returns {string} Current input error message.
     * @public
     */
    @api
    getErrorMessage() {
        this.reportValidity();
        return this.errorMessage;
    }

    /**
     * Displays the error messages. If the input is valid, <code>reportValidity()</code> clears displayed error messages.
     *
     * @returns {boolean} False if invalid, true if valid.
     * @public
     */
    @api
    reportValidity() {
        return this.constraint.reportValidity((message) => {
            this.errorMessage = message;
        });
    }

    /**
     * Sets a custom error message to be displayed when a form is submitted.
     *
     * @param {string} message The string that describes the error. If message is an empty string, the error message is reset.
     * @public
     */
    @api
    setCustomValidity(message) {
        this.constraint.setCustomValidity(message);
    }

    /**
     * Displays an error message if the dual listbox value is required.
     */
    @api
    showHelpMessageIfInvalid() {
        this.reportValidity();
    }

    /*
     * ------------------------------------------------------------
     *  PRIVATE METHODS
     * -------------------------------------------------------------
     */

    initSelectedGroups() {
        const options = [];
        this.computedValue.forEach((v) => {
            const option = this.options.find((o) => o.value === v);
            if (option) {
                const newOption = { ...option };
                newOption.isLocked = this.requiredOptions.includes(v);
                options.push(newOption);
            }
        });

        this._computedSelectedList = this.computeListOptions(
            options,
            this._focusableInSelected
        );
        this.computedSelectedGroups = this.groupByName(
            this._computedSelectedList,
            'groupName'
        );
    }

    initSourceGroups() {
        let options = this.options.filter((option) => {
            return !this.computedValue.includes(option.value);
        });

        if (this._searchTerm) {
            options = this.search({ options, searchTerm: this._searchTerm });
        }

        this._computedSourceList = this.computeListOptions(
            options,
            this._focusableInSource
        );
        this.computedSourceGroups = this.groupByName(
            this._computedSourceList,
            'groupName'
        );
    }

    initValue() {
        this.computedValue = this.value.filter((v) => {
            return this.options.find((o) => o.value === v);
        });

        this.addRequiredOptionsToValue();
    }

    /**
     * Add Required Options to value.
     */
    addRequiredOptionsToValue() {
        if (!this.options.length || !this.requiredOptions.length) {
            // no options/requiredOptions, just ignore
            return;
        }

        const previousValue = new Set(this.computedValue);
        const requiredValues = this.requiredOptions.filter((value) => {
            return this.options.find((o) => o.value === value);
        });

        // add required options to the selected values as they are already displayed in the selected list
        const newValue = new Set([...previousValue, ...requiredValues]);
        this.computedValue = [...newValue];

        if (newValue.size !== previousValue.size) {
            // value was changed
            this.dispatchChangeEvent();
        }
    }

    /**
     * Change Order of options in List.
     *
     * @param {boolean} moveUp
     */
    changeOrderOfOptionsInList(moveUp) {
        const elementList = this.getElementsOfList(this.selectedList);
        const values = this._computedSelectedList.map((option) => option.value);
        const toMove = values.filter(
            (option) => this.highlightedOptions.indexOf(option) > -1
        );
        const validSelection =
            toMove.length === 0 || this.selectedList !== SELECTED_LIST_ID;
        if (validSelection) {
            return;
        }
        let start = moveUp ? 0 : toMove.length - 1;
        let index = values.indexOf(toMove[start]);
        const validMove =
            (moveUp && index === 0) || (!moveUp && index === values.length - 1);
        if (validMove) {
            return;
        }

        if (moveUp) {
            while (start < toMove.length) {
                index = values.indexOf(toMove[start]);
                this.swapOptions(index, index - 1, values, elementList);
                start++;
            }
        } else {
            while (start > -1) {
                index = values.indexOf(toMove[start]);
                this.swapOptions(index, index + 1, values, elementList);
                start--;
            }
        }

        this.computedValue = values;
        this.updateFocusableOption(this.selectedList, toMove[0]);
        this.optionToFocus = null;
        this.initSourceGroups();
        this.initSelectedGroups();
        this.dispatchChangeEvent();
        this.updateBoxesHeight();
    }

    /**
     * Compute the height of the source and selected boxes.
     *
     * @returns {object} Object with two keys: `sourceHeight` and `selectedHeight`.
     */
    computeBoxesHeight() {
        let sourceHeight = this.sourceBoxHeight;
        let selectedHeight = this.selectedBoxHeight;

        if (selectedHeight > sourceHeight) {
            sourceHeight = this.allowSearch
                ? selectedHeight - SEARCH_BOX_HEIGHT
                : selectedHeight;
        } else {
            selectedHeight = this.allowSearch
                ? sourceHeight + SEARCH_BOX_HEIGHT
                : sourceHeight;
        }

        return { sourceHeight, selectedHeight };
    }

    /**
     * Compute List options from Selected and Source Lists.
     *
     * @param {object} options
     * @param {string} focusableOptionValue
     * @returns {object} list options
     */
    computeListOptions(options, focusableOptionValue) {
        if (!options.length) {
            return [];
        }

        const focusableOption = options.find((option) => {
            return option.value === focusableOptionValue;
        });

        const focusableValue = focusableOption
            ? focusableOption.value
            : options[0].value;

        return options.map((option) => {
            const selected = this.highlightedOptions.includes(option.value);
            return new Option({
                ...option,
                selected,
                isFocusable: focusableValue === option.value
            });
        });
    }

    /**
     * Search function.
     *
     * @param {object} params The search term and an array of the options
     * @returns {array} Array of options that includes the search term
     */
    computeSearch(params) {
        const { options, searchTerm } = params;
        return options.filter((option) => {
            return option.label
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }

    /**
     * Disabled buttons method for up and down buttons.
     */
    disabledButtons() {
        const indexesArray = [];
        // First we need to verify if the highlighted options are in the selected list.
        if (
            this.computedValue.some((r) => this.highlightedOptions.includes(r))
        ) {
            this.highlightedOptions.forEach((option) => {
                indexesArray.push(this.getOptionGroupIndexes(option));
            });
            // Then we need to verify if one of the highlighted options is the first one of its group.
            const first = indexesArray.map((array) => {
                return this.computedSelectedGroups[array[0]].options[
                    Number(array[1]) - 1
                ]
                    ? false
                    : true;
            });
            // And we need to verify if one of the highlighted options is the last one of its group.
            const last = indexesArray.map((array) => {
                return this.computedSelectedGroups[array[0]].options[
                    Number(array[1]) + 1
                ]
                    ? false
                    : true;
            });

            this._upButtonDisabled = first.includes(true);
            this._downButtonDisabled = last.includes(true);
        } else {
            // if the highlighted options are not in the selected list the up and down button are not disabled.
            this._upButtonDisabled = false;
            this._downButtonDisabled = false;
        }
    }

    /**
     * Get List of Elements by Id.
     *
     * @param {string} listId
     * @return {object[]|NodeListOf<Element>} elements
     */
    getElementsOfList(listId) {
        const elements = this.template.querySelectorAll(
            `div[data-type='${listId}']`
        );
        return elements ? elements : [];
    }

    /**
     * Get DOM Id for the List element.
     *
     * @param {Element} optionElement
     * @returns {string} DOM id
     */
    getListId(optionElement) {
        return optionElement.dataset.type;
    }

    /**
     * Get the index of the group and the index of the option inside the group.
     *
     * @param {number} value
     * @return {object[]} array containing the two indexes
     */
    getOptionGroupIndexes(value) {
        const option = this.template.querySelector(
            `div[data-value="${value}"]`
        );
        return [option.dataset.groupIndex, option.dataset.insideGroupIndex];
    }

    /**
     * Compute Option Index number.
     *
     * @param {Element} optionElement
     * @returns {number} Option Index
     */
    getOptionIndex(optionElement) {
        return parseInt(optionElement.dataset.index, 10);
    }

    /**
     * Method to create the groups of options.
     *
     * @param {array} array Array of options.
     * @param {string} groupName groupName.
     * @returns {array} Array of formatted list for the markup.
     */
    groupByName(array, groupName) {
        return this.sortGroups(
            Object.values(
                array.reduce((obj, current) => {
                    if (!obj[current[groupName]])
                        obj[current[groupName]] = {
                            label: current[groupName],
                            options: []
                        };
                    obj[current[groupName]].options.push(current);
                    return obj;
                }, {})
            )
        );
    }

    /**
     * Move Options between Lists.
     *
     * @param {boolean} addToSelect
     * @param {boolean} retainFocus
     */
    moveOptionsBetweenLists(addToSelect, retainFocus) {
        const isValidList = addToSelect
            ? this.selectedList === SOURCE_LIST_ID
            : this.selectedList === SELECTED_LIST_ID;
        if (!isValidList) {
            return;
        }
        const toMove = this.highlightedOptions;
        const values = this._computedSelectedList.map((option) => option.value);
        const required = this.requiredOptions;
        let newValues = [];
        if (addToSelect) {
            newValues = values.concat(toMove);
        } else {
            newValues = values.filter(
                (value) =>
                    toMove.indexOf(value) === -1 || required.indexOf(value) > -1
            );
        }

        const oldSelectedValues = this.computedValue;
        this.computedValue = newValues;
        this.initSourceGroups();
        this.initSelectedGroups();

        const invalidMove =
            this.validity.valueMissing ||
            (this.validity.rangeOverflow &&
                this.selectedList === SOURCE_LIST_ID) ||
            (this.validity.rangeUnderflow &&
                this.selectedList === SELECTED_LIST_ID);

        if (invalidMove || toMove.length === 0) {
            this.showHelpMessageIfInvalid();
            this.computedValue = oldSelectedValues;
            this.initSourceGroups();
            this.initSelectedGroups();
            return;
        }

        if (retainFocus) {
            const listId = addToSelect ? SELECTED_LIST_ID : SOURCE_LIST_ID;

            if (listId === SOURCE_LIST_ID) {
                if (this._computedSelectedList.length) {
                    this.updateFocusableOption(
                        SOURCE_LIST_ID,
                        this._computedSelectedList[this._oldIndex].value
                    );
                } else this.updateFocusableOption(listId, toMove[0]);
            } else {
                if (this._computedSourceList.length) {
                    this.updateFocusableOption(
                        SELECTED_LIST_ID,
                        this._computedSourceList[this._oldIndex].value
                    );
                } else this.updateFocusableOption(listId, toMove[0]);
            }
        } else {
            this.interactingState.leave();
            this.resetFocus();
        }

        this.dispatchChangeEvent();
        this.highlightedOptions.find((option) => {
            return this.computedValue.indexOf(option);
        });
        this.updateBoxesHeight();
    }

    /**
     * Reserve old index value.
     *
     * @param {object} option
     */
    oldIndexValue(option) {
        const options = this.template.querySelector(
            `div[data-value='${option}']`
        );
        if (options) {
            const index = options.getAttribute('data-index');
            if (!index || index === '0') {
                this._oldIndex = 0;
            } else this._oldIndex = index - 1;
        }
    }

    resetFocus() {
        this.isFocusOnList = false;
        this.highlightedOptions = [];
        this.optionToFocus = null;
        this.initSourceGroups();
        this.initSelectedGroups();
    }

    /**
     * Add All selected Options to highlightedOptions.
     *
     * @param {object} option
     * @param {boolean} all
     */
    selectAllFromLastSelectedToOption(option, all) {
        const listId = option.getAttribute('data-type');
        this.updateCurrentSelectedList(listId, true);
        const options = this.getElementsOfList(listId);
        const end = all ? 0 : this.getOptionIndex(option);
        this.lastSelected = this.lastSelected < 0 ? end : this.lastSelected;
        const start = all ? options.length : this.lastSelected;
        let val, select;
        this.highlightedOptions = [];
        for (let i = 0; i < options.length; i++) {
            select = (i - start) * (i - end) <= 0;
            if (select) {
                val = options[i].getAttribute('data-value');
                this.highlightedOptions.push(val);
            }
        }
        this.initSelectedGroups();
        this.initSourceGroups();
    }

    /**
     * Keyboard use for selecting items.
     *
     * @return keyboard interface
     */
    selectKeyboardInterface() {
        const that = this;
        that.shiftIndex = -1;
        that.lastShift = null;
        return {
            getShiftIndex() {
                return that.shiftIndex;
            },
            setShiftIndex(value) {
                that.shiftIndex = value;
            },
            getLastShift() {
                return that.lastShift;
            },
            setLastShift(value) {
                that.lastShift = value;
            },
            getElementsOfList(listId) {
                return that.getElementsOfList(listId);
            },
            selectAllOptions(option) {
                that.selectAllFromLastSelectedToOption(option, true);
            },
            updateSelectedOptions(option, select, isMultiple) {
                that.updateSelectedOptions(option, select, isMultiple);
            },
            moveOptionsBetweenLists(addToSelect) {
                that.moveOptionsBetweenLists(addToSelect, true);
            },
            dispatchOptionClick(event) {
                that.dispatchOptionClick(event);
            }
        };
    }

    /**
     * Sets the data-index attribute of each option.
     */
    setOptionIndexes() {
        const sourceOptions = this.template.querySelectorAll(
            `[data-type="${SOURCE_LIST_ID}"]`
        );
        sourceOptions.forEach((option, index) => {
            option.setAttribute('data-index', index);
        });
        const selectedOptions = this.template.querySelectorAll(
            `[data-type="${SELECTED_LIST_ID}"]`
        );
        selectedOptions.forEach((option, index) => {
            option.setAttribute('data-index', index);
        });
    }

    /**
     * Move the default group at the top.
     */
    sortGroups(groups) {
        const defaultGroupIndex = groups.findIndex(
            (group) => group.label === undefined
        );
        if (defaultGroupIndex > -1) {
            const defaultGroup = groups.splice(defaultGroupIndex, 1)[0];
            groups.unshift(defaultGroup);
        }
        return groups;
    }

    /**
     * Swap Options.
     *
     * @param {number} i
     * @param {number} j
     * @param {object[]} array
     */
    swapOptions(i, j, array) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Update box heights based on content.
     *
     * @returns {number} Box heights
     */
    updateBoxesHeight() {
        const sourceContainer = this.template.querySelector(
            '[data-element-id="div-source-list"]'
        );
        const selectedContainer = this.template.querySelector(
            '[data-element-id="div-selected-list"]'
        );
        if (!sourceContainer || !selectedContainer) {
            return;
        }
        const { sourceHeight, selectedHeight } = this.computeBoxesHeight();
        sourceContainer.style.height = `${sourceHeight}px`;
        selectedContainer.style.height = `${selectedHeight}px`;
    }

    /**
     * Update Selected List with current selection.
     *
     * @param {string} currentList
     * @param {boolean} isMultiple
     */
    updateCurrentSelectedList(currentList, isMultiple) {
        if (this.selectedList !== currentList || !isMultiple) {
            if (this.selectedList) {
                this.highlightedOptions = [];
                this.lastSelected = -1;
            }
            this.selectedList = currentList;
        }
    }

    /**
     * Update value with focused option item.
     *
     * @param {string} listId
     * @param {string} value
     */
    updateFocusableOption(listId, value) {
        if (listId === SOURCE_LIST_ID) {
            this._focusableInSource = value;
        } else if (listId === SELECTED_LIST_ID) {
            this._focusableInSelected = value;
        }
        this.optionToFocus = value;
    }

    /**
     * Update Selected Options.
     *
     * @param {object} option
     * @param {boolean} select
     * @param {boolean} isMultiple
     */
    updateSelectedOptions(option, select, isMultiple) {
        const value = option.getAttribute('data-value');
        const listId = this.getListId(option);
        const optionIndex = this.getOptionIndex(option);
        this.updateCurrentSelectedList(listId, isMultiple);
        if (select) {
            if (this.highlightedOptions.indexOf(value) === -1) {
                this.highlightedOptions.push(value);
            }
        } else {
            this.highlightedOptions.splice(
                this.highlightedOptions.indexOf(value),
                1
            );
        }

        this.updateFocusableOption(listId, value);

        this.lastSelected = optionIndex;
        this.oldIndexValue(this.highlightedOptions);
        this.initSelectedGroups();
        this.initSourceGroups();
    }

    /*
     * ------------------------------------------------------------
     *  EVENT HANDLERS AND DISPATCHERS
     * -------------------------------------------------------------
     */

    /**
     * Blur event handler.
     *
     * @param {Event} event
     */
    handleBlur(event) {
        this.interactingState.leave();

        const element = event.target;
        if (element.dataset.role !== 'option') {
            this.isFocusOnList = false;
        }
    }

    /**
     * Down Button Click handler.
     */
    handleDownButtonClick() {
        this.interactingState.interacting();
        this.changeOrderOfOptionsInList(false);
    }

    /**
     * Drag end event SourceList element handler ( remove "avonni-dual-listbox__option_dragging" ) - reorder list and index.
     *
     * @param {Event} event
     */
    handleDragEndSelected(event) {
        event.preventDefault();
        event.currentTarget.classList.remove(
            'avonni-dual-listbox__option_dragging'
        );
        if (this._dropItSource) {
            if (
                this.highlightedOptions.includes(
                    event.currentTarget.getAttribute('data-value')
                )
            ) {
                this.handleDragLeft();
            }
        } else if (!this._dropItSource) {
            if (!this._disableReordering) {
                const values = this._computedSelectedList.map(
                    (option) => option.value
                );
                const elementList = Array.from(
                    this.getElementsOfList(this.selectedList)
                );
                const swappingIndex = Number(
                    event.target.getAttribute('data-index')
                );
                this.swapOptions(
                    swappingIndex,
                    this._newIndex,
                    values,
                    elementList
                );
                this.computedValue = values;
                this.initSelectedGroups();
                this.initSourceGroups();
                this.dispatchChangeEvent();
            }
        }
    }

    /**
     * Drag end event SourceList element handler ( remove "avonni-dual-listbox__option_dragging" ).
     *
     * @param {Event} event
     */
    handleDragEndSource(event) {
        event.preventDefault();
        event.currentTarget.classList.remove(
            'avonni-dual-listbox__option_dragging'
        );
        if (this._dropItSelected) {
            if (
                this.highlightedOptions.includes(
                    event.currentTarget.getAttribute('data-value')
                )
            ) {
                this.handleDragRight();
            }
        }
    }

    /**
     * Drag Element and leave SelectedList event.
     *
     * @param {Event} event
     */
    handleDragLeaveSelected() {
        this._dropItSelected = false;
    }

    /**
     * Drag Element and leave SourceList event.
     *
     * @param {Event} event
     */
    handleDragLeaveSource() {
        this._dropItSource = false;
    }

    /**
     * Drag Right handler.
     */
    handleDragLeft() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(false, false);
        this._dropItSource = false;
    }

    /**
     * Drag Over Handler.
     *
     * @param {Event} event
     */
    handleDragOver(event) {
        event.preventDefault();
        this._newIndex = Number(event.target.getAttribute('data-index'));
    }

    /**
     * Drag and Drop Element Over SelectedList.
     *
     * @param {Event} event
     */
    handleDragOverSelected(event) {
        event.preventDefault();
        this._dropItSelected = true;
    }

    /**
     * Drag and Drop Element Over SourceList.
     *
     * @param {Event} event
     */
    handleDragOverSource(event) {
        event.preventDefault();
        this._dropItSource = true;
    }

    /**
     * Drag Right handler.
     */
    handleDragRight() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(true, false);
        this._dropItSelected = false;
    }

    /**
     * Drag Start add "avonni-dual-listbox__option_dragging" class to current SelectedList element.
     *
     * @param {Event} event
     */
    handleDragStart(event) {
        if (this.highlightedOptions.length <= 1) {
            this.handleOptionClick(event);
        }
        event.currentTarget.classList.add(
            'avonni-dual-listbox__option_dragging'
        );
    }

    /**
     * Focus event handler.
     *
     * @param {Event} event
     */
    handleFocus(event) {
        this.interactingState.enter();

        // select the focused option if entering a listbox
        const element = event.target;
        if (element.dataset.role === 'option') {
            if (!this.isFocusOnList) {
                this.isFocusOnList = true;
                this.updateSelectedOptions(element, true, false);
            }
        }
    }

    /**
     * Left Button Click handler.
     */
    handleLeftButtonClick() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(false, true);
    }

    /**
     * Option Click event handler.
     *
     * @param {Event} event
     */
    handleOptionClick(event) {
        this.interactingState.interacting();
        if (this.disabled) {
            return;
        }
        const selectMultiple = event.metaKey || event.ctrlKey || event.shiftKey;
        const option = event.currentTarget;
        if (event.shiftKey) {
            this.selectAllFromLastSelectedToOption(option, false);
            return;
        }
        const selected =
            selectMultiple && option.getAttribute('aria-selected') === 'true';
        this.updateSelectedOptions(option, !selected, selectMultiple);
        this.shiftIndex = -1;
    }

    /**
     * Option Keydown event handler.
     *
     * @param {Event} event
     */
    handleOptionKeyDown(event) {
        this.interactingState.interacting();
        if (this.disabled) {
            return;
        }
        handleKeyDownOnOption(event, this.keyboardInterface);
    }

    handleScroll() {
        if (!this.enableInfiniteLoading || this.isLoading) {
            return;
        }

        const sourceBox = this.template.querySelector(
            '[data-element-id="div-source-list"]'
        );
        const loadLimit =
            sourceBox.scrollHeight -
            sourceBox.offsetHeight -
            this.loadMoreOffset;
        const firstTimeReachingTheEnd = this._previousScroll < loadLimit;

        if (
            this.scrolledToEnd &&
            (!this._previousScroll || firstTimeReachingTheEnd)
        ) {
            /**
             * The event fired when the users scroll to the bottom of the source listbox to load more options.
             *
             * @event
             * @name loadmore
             * @property {string} searchTerm Value of the search input, if any.
             * @public
             */
            this.dispatchEvent(
                new CustomEvent('loadmore', {
                    detail: {
                        searchTerm: this._searchTerm
                    }
                })
            );
        }
        this._previousScroll = sourceBox.scrollTop;
    }

    /**
     * Search event handler.
     *
     * @param {Event} event
     */
    handleSearch(event) {
        event.stopPropagation();
        this._searchTerm = event.detail.value;
        this.initSourceGroups();

        /**
         * The event fired when the user types in the search input.
         *
         * @event
         * @name search
         * @param {string} value Value of the search input.
         * @public
         */
        this.dispatchEvent(
            new CustomEvent('search', {
                detail: {
                    value: this._searchTerm
                }
            })
        );
    }

    handleSearchFocus() {
        this.resetFocus();
    }

    /**
     * Right Button Click handler.
     */
    handleRightButtonClick() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(true, true);
    }

    /**
     * Up Button Click handler.
     */
    handleUpButtonClick() {
        this.interactingState.interacting();
        this.changeOrderOfOptionsInList(true);
    }

    /**
     * Change event dispatcher.
     */
    dispatchChangeEvent() {
        this._value = JSON.parse(JSON.stringify(this.computedValue));

        /**
         * The event fired when one or several options are moved from one box to the other.
         *
         * @event
         * @name change
         * @param {string[]} value Array of selected option values.
         * @public
         * @bubbles
         * @composed
         */
        this.dispatchEvent(
            new CustomEvent('change', {
                composed: true,
                bubbles: true,
                detail: { value: this.value }
            })
        );
    }

    /**
     * Dispatch the optionclick event.
     *
     * @param {Event} event
     */
    dispatchOptionClick(event) {
        if (
            this.disabled ||
            (event.key && event.key !== ' ' && event.key !== 'Spacebar')
        )
            return;

        const value = event.currentTarget.dataset.value;

        /**
         * The event fired when an option is clicked.
         *
         * @event
         * @name optionclick
         * @param {string} value Value of the clicked option.
         * @public
         */
        this.dispatchEvent(
            new CustomEvent('optionclick', {
                detail: {
                    value
                },
                bubbles: true
            })
        );
    }
}
