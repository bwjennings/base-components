import { LightningElement, api } from 'lwc';

export default class ExternalLink extends LightningElement {
    @api label;
    @api title;
    @api rel;
    @api tabIndex;

    _href;
    _isDirty = true;

    @api
    get href() {
        return this._href;
    }

    set href(value) {
        this._href = value;
        this._isDirty = true;
    }
}
