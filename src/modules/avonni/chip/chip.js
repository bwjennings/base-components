import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean, normalizeString } from 'avonni/utilsPrivate';
import { classSet } from 'avonni/utils';

const validVariants = [
    'base',
    'brand',
    'inverse',
    'alt-inverse',
    'success',
    'info',
    'warning',
    'error',
    'offline'
];

export default class Chip extends LightningElement {
    @api label;

    @track _variant = 'base';
    @track _outline = false;
    @track renderLeft = true;
    @track renderRight = true;

    renderedCallback() {
        if (this.leftSlot) {
            this.renderLeft = this.leftSlot.assignedElements().length !== 0;
        }
        if (this.rightSlot) {
            this.renderRight = this.rightSlot.assignedElements().length !== 0;
        }
    }

    @api get variant() {
        return this._variant;
    }

    set variant(variant) {
        this._variant = normalizeString(variant, {
            fallbackValue: 'base',
            validValues: validVariants
        });
    }

    @api get outline() {
        return this._outline;
    }

    set outline(value) {
        this._outline = normalizeBoolean(value);
    }

    get leftSlot() {
        return this.template.querySelector('slot[name=left]');
    }

    get rightSlot() {
        return this.template.querySelector('slot[name=right]');
    }

    get chipClass() {
        const classes = classSet('slds-badge');

        if (this._outline) {
            classes.add('avonni-outline');
        }

        classes.add(`slds-theme_${this._variant}`);

        return classes.toString();
    }
}
