import { LightningElement } from 'lwc';

export default class ComboboxScopes extends LightningElement {
    options = [
        {
            label: 'Burlington Textiles Corp of America',
            value: 'no-avatar-burlington',
            options: [
                {
                    label: 'Nakatomi Investments',
                    value: 'nakatomi',
                    avatar: {
                        fallbackIconName: 'standard:account'
                    },
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
            value: 'no-avatar-oil-sla',
            isLoading: true
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

    scopes = [
        {
            label: 'All',
            value: 'all',
            groups: ['suggested']
        },
        {
            label: 'Accounts',
            value: 'accounts',
            groups: ['suggested']
        },
        {
            label: 'Analytics',
            value: 'analytics',
            groups: ['suggested']
        }
    ];

    scopesGroups = [
        {
            label: 'Suggested for you',
            name: 'suggested'
        }
    ];
}
