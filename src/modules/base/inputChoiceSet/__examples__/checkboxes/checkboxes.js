import { LightningElement } from 'lwc';

export default class InputChoiceSetCheckboxes extends LightningElement {
    optionsWithoutIcon = [
        { label: 'Mon', value: 'mon' },
        { label: 'Tue', value: 'tue' },
        { label: 'Wed', value: 'wed' },
        { label: 'Thu', value: 'thu' },
        { label: 'Fri', value: 'fri' }
    ];
    dayValue = ['fri'];
}
