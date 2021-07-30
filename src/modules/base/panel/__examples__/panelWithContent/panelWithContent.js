import { LightningElement, api } from 'lwc';

const DEFAULT_PANEL_POSITION = 'right';
const DEFAULT_PANEL_SIZE = 'medium';

export default class PanelWithContentInside extends LightningElement {
    @api position = DEFAULT_PANEL_POSITION;
    @api title;
    @api size = DEFAULT_PANEL_SIZE;

    open() {
        this.template.querySelector('c-panel').open();
    }

    close() {
        this.template.querySelector('c-panel').close();
    }

    toggle() {
        this.template.querySelector('c-panel').toggle();
    }
}
