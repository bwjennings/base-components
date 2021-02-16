import { ButtonIconPopover } from '../__examples__/buttonIconPopover';

export default {
    title: 'Example/Button Icon Popover',
    argTypes: {
        accessKey: {
            control: {
                type: 'text'
            }
        },
        alternativeText: {
            control: {
                type: 'text'
            }
        },
        title: {
            control: {
                type: 'text'
            }
        },
        iconName: {
            control: {
                type: 'text'
            }
        },
        iconClass: {
            control: {
                type: 'text'
            }
        },
        loadingStateAlternativeText: {
            control: {
                type: 'text'
            }
        },
        tooltip: {
            control: {
                type: 'text'
            }
        },
        popoverSize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            },
            defaultValue: 'medium',
            table: {
                defaultValue: { summary: 'medium' }
            }
        },
        placement: {
            control: {
                type: 'select',
                options: [
                    'auto',
                    'left',
                    'center',
                    'right',
                    'bottom-left',
                    'bottom-center',
                    'bottom-right'
                ]
            },
            defaultValue: 'left',
            table: {
                defaultValue: { summary: 'left' }
            }
        },
        variant: {
            control: {
                type: 'select',
                options: [
                    'bare',
                    'container',
                    'border',
                    'border-filled',
                    'bare-inverse',
                    'border-inverse'
                ]
            },
            defaultValue: 'border',
            table: {
                defaultValue: { summary: 'border' }
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['xx-small', 'x-small', 'small', 'medium']
            },
            defaultValue: 'medium',
            table: {
                defaultValue: { summary: 'medium' }
            }
        },
        triggers: {
            control: {
                type: 'select',
                options: ['click', 'hover', 'focus']
            },
            defaultValue: 'click',
            table: {
                defaultValue: { summary: 'click' }
            }
        },
        popoverVariant: {
            control: {
                type: 'select',
                options: ['base', 'warning', 'error', 'walkthrough']
            },
            defaultValue: 'base',
            table: {
                defaultValue: { summary: 'base' }
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        isLoading: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        }
    }
};

const Template = (args) => ButtonIconPopover(args);

export const Base = Template.bind({});
Base.args = {
    iconName: 'utility:favorite',
    tooltip: 'Tooltip text'
};
