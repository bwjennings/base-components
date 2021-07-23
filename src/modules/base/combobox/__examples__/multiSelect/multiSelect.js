import { LightningElement } from 'lwc';

export default class ComboboxMultiSelect extends LightningElement {
    options = [
        {
            label: 'Burlington Textiles Corp of America',
            value: 'no-avatar-burlington',
            options: [
                {
                    label: 'Nakatomi Investments',
                    value: 'nakatomi',
                    avatarFallbackIconName: 'standard:account',
                    secondaryText: 'Account - Chicago, IL'
                }
            ]
        },
        {
            label: 'Dickenson plc',
            value: 'no-avatar-dickenson'
        },
        {
            label: 'United Oil SLA',
            value: 'no-avatar-oil-sla'
        },
        {
            label: 'United Oil Standby Generators',
            value: 'no-avatar-united-oil'
        },
        {
            label: 'Edge Communication',
            value: 'no-avatar-edge'
        }
    ];
}
