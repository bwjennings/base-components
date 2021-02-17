import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean } from 'avonni/utilsPrivate';

export default class Submenu extends LightningElement {
    @api accessKey;
    @api draftAlternativeText;
    @api iconName;
    @api label;
    @api prefixIconName;

    @track _tabIndex = '0';
    @track _disabled = false;
    @track _isDraft = false;
    @track isOpen = false;
    @track init = false;

    connectedCallback() {
        this.classList.add('slds-dropdown__item');
        this.classList.add('avonni-submenu');
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get isDraft() {
        return this._isDraft;
    }

    set isDraft(value) {
        this._isDraft = normalizeBoolean(value);
    }

    @api get tabIndex() {
        return this._tabIndex;
    }

    set tabIndex(newValue) {
        this._tabIndex = newValue;
    }

    @api
    focus() {
        this.template.querySelector('a').focus();
        this.dispatchEvent(new CustomEvent('focus'));
    }

    @api
    close() {
        this.isOpen = false;
    }

    handleBlur() {
        this.dispatchEvent(new CustomEvent('blur'));

        this.dispatchEvent(
            new CustomEvent('privateblur', {
                composed: true,
                bubbles: true,
                cancelable: true
            })
        );
    }

    handleFocus() {
        this.dispatchEvent(
            new CustomEvent('privatefocus', {
                bubbles: true,
                cancelable: true
            })
        );
    }

    handleMouseEnter(event) {
        if (!this._disabled) {
            if (this.isOpen) {
                this.querySelectorAll('.avonni-submenu').forEach(submenu => {
                    submenu.close();
                });
            } else {
                this.dispatchSelect();
            }

            this.isOpen = true;
            event.stopPropagation();
        }

        event.preventDefault();
    }

    dispatchSelect() {
        this.dispatchEvent(
            new CustomEvent('privateselect', {
                bubbles: true,
                cancelable: true,
                detail: {
                    type: 'submenu'
                }
            })
        );
    }
}
