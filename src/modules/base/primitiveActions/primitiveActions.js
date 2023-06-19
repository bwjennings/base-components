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

export default class PrimitiveActions extends LightningElement {
    /**
     * Array of actions to display
     *
     * @type {number}
     * @public
     */
    @api actions = [];
    /**
     * The size of the button icon for a single action.
     *
     * @type {number}
     * @public
     */
    @api buttonIconSize;
    /**
     * The variant of the button icon for a single action.
     *
     * @type {number}
     * @public
     */
    @api buttonIconVariant;
    /**
     * The number of actions appearing as buttons
     *
     * @type {number}
     * @public
     */
    @api visibleActions;

    get actionButtons() {
        return this.actions.slice(0, this.visible);
    }

    get actionsButtonMenu() {
        return this.actions.slice(this.visible, this.actions.length);
    }

    get singleAction() {
        return this.actions.length === 1 && this.actions[0];
    }

    get hasActions() {
        return this.actions?.length > 0;
    }

    get hasActionsButtonMenu() {
        return this.actionsButtonMenu.length > 0;
    }

    get hasZeroActionButtons() {
        return this.actionButtons.length === 0;
    }

    get visible() {
        return !this.visibleActions && this.visibleActions !== 0
            ? this.actions.length
            : this.visibleActions;
    }

    handleActionButtonClick(event) {
        event.stopImmediatePropagation();
        this.dispatchActionClick(event.currentTarget.dataset.name);
    }

    handleActionButtonMenuClick(event) {
        event.stopImmediatePropagation();
        this.dispatchActionClick(event.detail.value);
    }

    dispatchActionClick(name) {
        /**
         * The event fired when a user clicks on an action.
         *
         * @event
         * @name actionclick
         * @param {string} name  Name of the action clicked.
         * @public
         */
        this.dispatchEvent(
            new CustomEvent('actionclick', { detail: { name } })
        );
    }
}
