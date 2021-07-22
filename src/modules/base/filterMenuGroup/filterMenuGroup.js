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

import { LightningElement, api } from 'lwc';
import {
    normalizeArray,
    normalizeBoolean,
    normalizeString
} from 'c/utilsPrivate';
import { classSet } from 'c/utils';

const MENU_VARIANTS = {
    valid: ['horizontal', 'vertical'],
    default: 'horizontal'
};

const DEFAULT_APPLY_BUTTON_LABEL = 'Apply';
const DEFAULT_RESET_BUTTON_LABEL = 'Reset';

/**
 * @class
 * @descriptor avonni-filter-menu-group
 * @example example-filter-menu-group--base
 * @public
 */
export default class FilterMenuGroup extends LightningElement {
    _menus = [];
    _hideSelectedItems = false;
    _variant = MENU_VARIANTS.default;
    _applyButtonLabel = DEFAULT_APPLY_BUTTON_LABEL;
    _resetButtonLabel = DEFAULT_RESET_BUTTON_LABEL;

    selectedPills = [];

    /**
     * Array of menu objects.
     *
     * @type {object[]}
     * @public
     */
    @api
    get menus() {
        return this._menus;
    }
    set menus(value) {
        const array = normalizeArray(value);
        this._menus = JSON.parse(JSON.stringify(array));

        this.computeSelectedPills();
    }

    /**
     * If present, the selected items are hidden.
     *
     * @type {boolean}
     * @public
     * @default false
     */
    @api
    get hideSelectedItems() {
        return this._hideSelectedItems;
    }
    set hideSelectedItems(bool) {
        this._hideSelectedItems = normalizeBoolean(bool);
    }

    /**
     * The variant changes the look of the menu group. Accepted variants include horizontal and vertical.
     *
     * @type {string}
     * @public
     * @default horizontal
     */
    @api
    get variant() {
        return this._variant;
    }
    set variant(value) {
        this._variant = normalizeString(value, {
            fallbackValue: MENU_VARIANTS.default,
            validValues: MENU_VARIANTS.valid
        });
    }

    /**
     * Label of the apply button.
     *
     * @type {string}
     * @public
     * @default Apply
     */
    @api
    get applyButtonLabel() {
        return this._applyButtonLabel;
    }
    set applyButtonLabel(value) {
        this._applyButtonLabel =
            value && typeof value === 'string'
                ? value.trim()
                : DEFAULT_APPLY_BUTTON_LABEL;
    }

    /**
     * Label of the reset button.
     *
     * @type {string}
     * @public
     * @default Reset
     */
    @api
    get resetButtonLabel() {
        return this._resetButtonLabel;
    }
    set resetButtonLabel(value) {
        this._resetButtonLabel =
            value && typeof value === 'string'
                ? value.trim()
                : DEFAULT_RESET_BUTTON_LABEL;
    }

    /**
     * Check if Vertical variant.
     *
     * @return boolean
     */
    get isVertical() {
        return this.variant === 'vertical';
    }

    /**
     * Check if selectedPills is populated and if items are not hidden.
     *
     * @return boolean
     */
    get showSelectedItems() {
        return !this.hideSelectedItems && this.selectedPills.length > 0;
    }

    /**
     * Filter Wrapper class styling
     *
     * @return string
     */
    get filtersWrapperClass() {
        return classSet().add({
            'slds-button-group-row': !this.isVertical
        });
    }

    /**
     * Filters class styling
     *
     * @return string
     */
    get filtersClass() {
        return classSet().add({
            'slds-button-group-item': !this.isVertical,
            'slds-m-bottom_medium': this.isVertical
        });
    }

    /**
     * Get Node list of all filter menu elements.
     *
     * @return NodeListof<Element>
     */
    get menuComponents() {
        return this.template.querySelectorAll('c-filter-menu');
    }

    /**
     * Clear method to empty/reset computed value.
     *
     * @public
     */
    @api
    clear() {
        if (this.menuComponents.length > 0) {
            this.menuComponents.forEach((menu) => {
                const value = [];
                const name = menu.dataset.name;
                this.computeValue(name, value);
            });

            this.computeSelectedPills();
        }
    }

    /**
     * Apply method to computed value.
     *
     * @public
     */
    @api
    apply() {
        if (this.menuComponents.length > 0) {
            this.menuComponents.forEach((menu) => {
                const value = menu.value;
                const name = menu.dataset.name;
                this.computeValue(name, value);
            });

            this.computeSelectedPills();
        }
    }

    /**
     * Compute Pills selection.
     */
    computeSelectedPills() {
        const pills = [];

        this.menus.forEach((menu) => {
            const values = menu.value;
            const items = menu.items;

            if (values && items) {
                values.forEach((value) => {
                    const targetItem = items.find(
                        (item) => item.value === value
                    );
                    if (targetItem) {
                        pills.push({
                            label: targetItem.label,
                            name: `${menu.name},${value}`
                        });
                    }
                });
            }
        });

        this.selectedPills = pills;
    }

    /**
     * Compute Value.
     *
     * @param {string} menuName
     * @param {string[]} value
     */
    computeValue(menuName, value) {
        console.log(value);
        const index = this.menus.findIndex((menu) => menu.name === menuName);
        this.menus[index].value = value;
    }

    /**
     * Value change handler.
     *
     * @param {Event} event
     */
    handleValueChange(event) {
        const name = event.target.dataset.name;
        const value = event.detail ? event.detail.value : [];

        this.computeValue(name, value);
        this.computeSelectedPills();
    }

    /**
     * Selected Item removal event handler.
     *
     * @param {Event} event
     */
    handleSelectedItemRemove(event) {
        // Split the pill name
        const pillName = event.detail.item.name.match(/^(.+),(.+)$/);
        const menuName = pillName[1];
        const valueName = pillName[2];

        // Find the menu containing the value that was removed
        const menuIndex = this.menus.findIndex(
            (menu) => menu.name === menuName
        );

        // Find the value
        const valueIndex = this.menus[menuIndex].value.findIndex(
            (name) => name === valueName
        );

        // Remove this value from the menus
        this.menus[menuIndex].value.splice(valueIndex, 1);

        // Update the pills
        this.computeSelectedPills();

        // Update the value in the filter menu
        const menuComponent = this.template.querySelector(
            `[data-name=${menuName}]`
        );
        menuComponent.value = this.menus[menuIndex].value;
    }

    /**
     * Apply Click handler.
     */
    handleApplyClick() {
        this.apply();
    }

    /**
     * Reset Click handler.
     */
    handleResetClick() {
        this.clear();
    }

    /**
     * Dispatch Select event.
     *
     * @param {Event} event
     */
    dispatchSelect(event) {
        /**
         * Select event.
         *
         * @event
         * @name select
         * @param {string} name
         * @param {string[]} value
         * @public
         * @cancelable
         */
        this.dispatchEvent(
            new CustomEvent('select', {
                detail: {
                    name: event.target.dataset.name,
                    value: event.detail.value
                },
                cancelable: true
            })
        );
    }
}
