import { LightningElement } from 'lwc';

const contact = [
    {
        label: 'Call',
        value: 'call',
        prefixIconName: 'standard:call',
        iconName: 'utility:voicemail_drop'
    },
    {
        label: 'Email',
        value: 'email',
        prefixIconName: 'standard:email'
    },
    {
        label: 'Meeting',
        value: 'meeting',
        prefixIconName: 'standard:service_appointment',
        disabled: true
    },
    {
        label: 'Other',
        value: 'other',
        prefixIconName: 'standard:all'
    }
];
const prices = [
    {
        label: 'Free',
        value: 'free'
    },
    {
        label: 'Paid',
        value: 'paid'
    }
];

const editions = [
    {
        label: 'Essentials',
        value: 'essentials'
    },
    {
        label: 'Professional',
        value: 'professional'
    },
    {
        label: 'Enterprise',
        value: 'enterprise'
    },
    {
        label: 'Unlimited',
        value: 'unlimited'
    },
    {
        label: 'Force.com',
        value: 'forcecom'
    },
    {
        label: 'Developer',
        value: 'developer'
    },
    {
        label: 'Performance',
        value: 'performance'
    }
];

const languages = [
    {
        label: 'Dutch',
        value: 'dutch'
    },
    {
        label: 'English',
        value: 'english'
    },
    {
        label: 'Finnish',
        value: 'finnish'
    },
    {
        label: 'French',
        value: 'french'
    },
    {
        label: 'German',
        value: 'german'
    },
    {
        label: 'Danish',
        value: 'danish'
    },
    {
        label: 'Italian',
        value: 'italian'
    },
    {
        label: 'Japanese',
        value: 'japanese'
    },
    {
        label: 'Korean',
        value: 'korean'
    },
    {
        label: 'Portuguese',
        value: 'portuguese'
    }
];

export default class FilterMenuGroupBase extends LightningElement {
    menus = [
        {
            name: 'contact',
            label: 'Type',
            accessKey: 'k',
            alternativeText: 'Open contact type filter',
            items: contact,
            tooltip: 'Type of contact',
            value: 'email'
        },
        {
            name: 'prices',
            disabled: true,
            label: 'Prices',
            items: prices,
            dropdownWidth: 'large',
            droddownNubbin: true,
            hideSelectedItems: true
        },
        {
            name: 'editions',
            items: editions,
            label: 'Editions',
            showSearchBox: true,
            dropdownLength: '5-items',
            isMultiSelect: true
        },
        {
            name: 'ratings',
            label: 'Ratings',
            isLoading: true,
            loadingStateAlternativeText: 'Waiting for the items to load...'
        },
        {
            name: 'languages',
            items: languages,
            label: 'Laguages',
            dropdownLength: '10-items',
            isMultiSelect: true,
            value: ['dutch', 'english']
        }
    ];
}
