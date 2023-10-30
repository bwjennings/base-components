import { ButtonDialog } from '../__examples__/buttonDialog';

export default {
    title: 'Example/Button Dialog',
    argTypes: {
        accessKey: {
            name: 'access-key',
            control: {
                type: 'text'
            },
            description: 'The keyboard shortcut for the button.',
            table: {
                type: { summary: 'string' }
            }
        },
        alternativeText: {
            name: 'alternative-text',
            control: {
                type: 'text'
            },
            description: 'The assistive text for the button.',
            table: {
                type: { summary: 'string' }
            }
        },
        label: {
            control: {
                type: 'text'
            },
            description: 'Optional text to be shown on the button.',
            table: {
                type: { summary: 'string' }
            }
        },
        iconName: {
            name: 'icon-name',
            control: {
                type: 'text'
            },
            description:
                "The name of the icon to be used in the format 'utility:down'.",
            table: {
                type: { summary: 'string' },
                category: 'icon'
            }
        },
        variant: {
            control: {
                type: 'select'
            },
            options: [
                'base',
                'neutral',
                'brand',
                'brand-outline',
                'destructive',
                'destructive-text',
                'inverse',
                'success'
            ],
            description:
                'The variant changes the appearance of the button. Accepted variants include base, neutral, brand, brand-outline, destructive, destructive-text, inverse, and success.',
            table: {
                defaultValue: { summary: 'neutral' },
                type: { summary: 'string' }
            }
        },
        iconPosition: {
            name: 'icon-position',
            control: {
                type: 'radio'
            },
            options: ['left', 'right'],
            description:
                'Describes the position of the icon with respect to body. Options include left and right.',
            table: {
                defaultValue: { summary: 'left' },
                type: { summary: 'string' },
                category: 'icon'
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            },
            description: 'If present, the popover can be opened by users.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        }
    },
    args: {
        disabled: false,
        iconPosition: 'left',
        variant: 'neutral'
    }
};

const Template = (args) => ButtonDialog(args);

export const Base = Template.bind({});
Base.args = {
    label: 'Show modal',
    iconName: 'utility:animal_and_nature',
    variant: 'base'
};

export const NeutralWithIconRight = Template.bind({});
NeutralWithIconRight.args = {
    label: 'Show modal',
    iconName: 'utility:animal_and_nature',
    iconPosition: 'right',
    variant: 'neutral'
};

export const Brand = Template.bind({});
Brand.args = {
    label: 'Show modal',
    iconName: 'utility:einstein',
    variant: 'brand'
};

export const BrandOutline = Template.bind({});
BrandOutline.args = {
    label: 'Show modal',
    iconName: 'utility:einstein',
    variant: 'brand-outline'
};

export const Destructive = Template.bind({});
Destructive.args = {
    label: 'Show modal',
    iconName: 'utility:error',
    variant: 'destructive'
};

export const DestructiveText = Template.bind({});
DestructiveText.args = {
    label: 'Show modal',
    iconName: 'utility:error',
    variant: 'destructive-text'
};

export const Inverse = Template.bind({});
Inverse.args = {
    label: 'Show modal',
    iconName: 'utility:animal_and_nature',
    variant: 'inverse'
};

export const Success = Template.bind({});
Success.args = {
    label: 'Show modal',
    iconName: 'utility:success',
    variant: 'success',
    alternativeText: 'This is a success button dialog'
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Show modal',
    iconName: 'utility:animal_and_nature',
    variant: 'success',
    disabled: true
};
