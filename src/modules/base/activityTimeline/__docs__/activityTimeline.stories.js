import { ActivityTimeline } from '../__examples__/activityTimeline';
import { InfiniteLoadingActivityTimeline } from '../__examples__/infiniteLoadingActivityTimeline';
import {
    actions,
    items,
    horizontalItems,
    yearlyItems,
    itemsWithoutIcons
} from './data';

export default {
    title: 'Example/Activity Timeline',
    argTypes: {
        actions: {
            control: {
                type: 'object'
            },
            description:
                'A list of different actions for dropdown menu. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'object[]' }
            }
        },
        buttonShowLessIconName: {
            name: 'button-show-less-icon-name',
            control: {
                type: 'text'
            },
            description:
                "The Lightning Design System name of the button icon. Specify the name in the format 'utility:up' where 'utility' is the category, and 'up' is the specific icon to be displayed. This attribute is only supported for the vertical orientation.",
            table: {
                type: { summary: 'string' },
                category: 'Buttons'
            }
        },
        buttonShowLessIconPosition: {
            name: 'button-show-less-icon-position',
            control: {
                type: 'radio'
            },
            options: ['left', 'right'],
            description:
                "Position of the show less button's icon. Valid values include left and right. This attribute is only supported for the vertical orientation.",
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
                category: 'Buttons'
            }
        },
        buttonShowLessLabel: {
            name: 'button-show-less-label',
            control: {
                type: 'text'
            },
            description:
                'Label of the button that appears when all items are displayed and max-visible-items value is set. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Show less' },
                category: 'Buttons'
            }
        },
        buttonShowMoreIconName: {
            name: 'button-show-more-icon-name',
            control: {
                type: 'text'
            },
            description:
                "The Lightning Design System name of the button icon. Specify the name in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. This attribute is only supported for the vertical orientation.",
            table: {
                type: { summary: 'string' },
                category: 'Buttons'
            }
        },
        buttonShowMoreIconPosition: {
            name: 'button-show-more-icon-position',
            control: {
                type: 'radio'
            },
            options: ['left', 'right'],
            description:
                'Position of the showMore button’s icon. Valid values include left and right. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
                category: 'Buttons'
            }
        },
        buttonShowMoreLabel: {
            name: 'button-show-more-label',
            control: {
                type: 'text'
            },
            description:
                'Label of the button that appears when the number of items exceeds the max-visible-items number. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Show more' },
                category: 'Buttons'
            }
        },
        buttonVariant: {
            name: 'button-variant',
            control: {
                type: 'select'
            },
            options: [
                'neutral',
                'base',
                'brand',
                'brand-outline',
                'destructive',
                'destructive-text',
                'inverse',
                'success'
            ],
            description:
                'Variant of the button that appears when the number of items exceeds the max-visible-items number. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral' },
                category: 'Buttons'
            }
        },
        closed: {
            control: {
                type: 'boolean'
            },
            description:
                'If true, close the section. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        collapsible: {
            control: {
                type: 'boolean'
            },
            description:
                'If true, the section is collapsible, the left icon is present. This attribute is only supported for the vertical orientation with grouped items.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        enableInfiniteLoading: {
            name: 'enable-infinite-loading',
            control: {
                type: 'boolean'
            },
            description:
                'If present, you can load a subset of items and then display more when users scroll to the end of the timeline. Use with the loadmore event to retrieve more items.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        fieldAttributes: {
            control: {
                type: 'object'
            },
            description: 'Object of attributes for the item fields.',
            table: {
                type: { summary: 'object' }
            }
        },
        groupBy: {
            name: 'group-by',
            control: {
                type: 'select'
            },
            options: ['week', 'month', 'year', ''],
            description:
                'Values include week, month, year. This attribute is only supported for the vertical orientation.',
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
                "The Lightning Design System name of the icon. Specify the name in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. The icon is displayed in the header before the title.",
            table: {
                type: { summary: 'string' }
            }
        },
        iconSize: {
            name: 'icon-size',
            control: {
                type: 'select'
            },
            options: ['xx-small', 'x-small', 'small', 'medium', 'large'],
            description:
                "The size of title's icon. Valid values are xx-small, x-small, small, medium and large.",
            table: {
                defaultValue: { summary: 'medium' },
                type: { summary: 'string' }
            }
        },
        isLoading: {
            name: 'is-loading',
            control: {
                type: 'boolean'
            },
            description:
                'If present, a spinner is shown to indicate that more items are loading.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        itemDateFormat: {
            name: 'item-date-format',
            control: {
                type: 'text'
            },
            description:
                "The date format to use for each item. See Luxon’s documentation for accepted format. If you want to insert text in the label, you need to escape it using single quote.\n For example, the format of “Jan 14 day shift” would be “LLL dd 'day shift'\". ",
            table: {
                defaultValue: { summary: 'LLLL dd, yyyy, t' },
                type: { summary: 'string' }
            }
        },
        itemIconSize: {
            name: 'item-icon-size',
            control: {
                type: 'select'
            },
            options: ['xx-small', 'x-small', 'small', 'medium', 'large'],
            description:
                "The size of all the items' icon. Valid values are xx-small, x-small, small, medium and large. This attribute is only supported for the vertical orientation.",
            table: {
                defaultValue: { summary: 'small' },
                type: { summary: 'string' }
            }
        },
        items: {
            control: {
                type: 'object'
            },
            table: {
                type: { summary: 'object[]' }
            }
        },
        loadMoreOffset: {
            name: 'load-more-offset',
            control: {
                type: 'number'
            },
            description:
                "Determines when to trigger infinite loading based on how many pixels the timeline's scroll position is from the bottom of the timeline.",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '20' }
            }
        },
        hideItemDate: {
            name: 'hide-item-date',
            control: {
                type: 'boolean'
            },
            description: 'If true, the date of each item is hidden.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        maxVisibleItems: {
            name: 'max-visible-items',
            control: {
                type: 'number',
                min: 0
            },
            description: 'The maximum number of visible items to display.',
            table: {
                type: { summary: 'number' }
            }
        },
        orientation: {
            name: 'orientation',
            control: {
                type: 'select'
            },
            options: ['vertical', 'horizontal'],
            description:
                'Orientation of the activity timeline. Valid values include vertical and horizontal.',
            table: {
                defaultValue: { summary: 'vertical' },
                type: { summary: 'string' }
            }
        },
        sortedDirection: {
            name: 'sorted-direction',
            control: {
                type: 'select'
            },
            options: ['desc', 'asc'],
            description:
                'Specifies the sorting direction. Valid values include asc and desc. This attribute is only supported for the vertical orientation.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'desc' }
            }
        },
        timezone: {
            control: {
                type: 'text'
            },
            description:
                "Time zone used, in a valid IANA format. If empty, the browser's time zone is used.",
            table: {
                type: { summary: 'string' }
            }
        },
        title: {
            control: {
                type: 'text'
            },
            description:
                'The title can include text, and is displayed in the header.',
            table: {
                type: { summary: 'string' }
            }
        }
    },
    args: {
        closed: false,
        collapsible: false,
        sortedDirection: 'desc',
        buttonShowLessLabel: 'Show less',
        buttonShowLessIconPosition: 'left',
        buttonShowLessIconName: 'utility:up',
        buttonShowMoreIconPosition: 'left',
        buttonShowMoreLabel: 'Show more',
        buttonShowMoreIconName: 'utility:down',
        buttonVariant: 'neutral',
        enableInfiniteLoading: false,
        iconSize: 'medium',
        isLoading: false,
        itemIconSize: 'small',
        loadMoreOffset: 20,
        orientation: 'vertical',
        itemDateFormat: 'LLLL dd, yyyy, t',
        hideItemDate: false
    }
};

const Template = (args) => ActivityTimeline(args);
const InfiniteLoadingTemplate = (args) => InfiniteLoadingActivityTimeline(args);

export const Base = Template.bind({});
Base.args = { items };

export const Ascending = Template.bind({});
Ascending.args = {
    title: 'Activity Timeline',
    iconName: 'standard:timesheet_entry',
    items: items,
    actions: actions,
    sortedDirection: 'asc',
    maxVisibleItems: 3
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    title: 'Activity Timeline - Horizontal view',
    iconName: 'standard:timesheet_entry',
    orientation: 'horizontal',
    items: horizontalItems,
    actions: actions
};

export const Weekly = Template.bind({});
Weekly.args = {
    title: 'Activity Timeline grouped by week',
    iconName: 'standard:timesheet_entry',
    items: items,
    actions: actions,
    itemDateFormat: 'DDDD - t',
    groupBy: 'week',
    maxVisibleItems: 5
};

export const Monthly = Template.bind({});
Monthly.args = {
    title: 'Activity Timeline grouped by month',
    iconName: 'standard:timesheet_entry',
    groupBy: 'month',
    items: items,
    collapsible: true,
    itemDateFormat: 'dd MMM - t',
    actions: actions
};

export const Yearly = Template.bind({});
Yearly.args = {
    title: 'Activity Timeline grouped by year',
    iconName: 'standard:timesheet_entry',
    groupBy: 'year',
    items: yearlyItems,
    collapsible: true,
    dateFormat: 'DDD',
    actions: actions
};

export const InfiniteLoading = InfiniteLoadingTemplate.bind({});
InfiniteLoading.args = {
    title: 'Infinite Loading Activity Timeline',
    iconName: 'utility:sync'
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
    title: 'Activity Timeline without icons',
    iconName: 'standard:timesheet_entry',
    items: itemsWithoutIcons,
    actions: actions,
    hideItemDate: true
};
