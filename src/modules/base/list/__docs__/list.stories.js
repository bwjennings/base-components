/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2021, Avonni Labs, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * - Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { List } from '../__examples__/list';

export default {
    title: 'Example/List',
    argTypes: {
        label: {
            control: {
                type: 'text'
            },
            description: 'Label of the list.',
            table: {
                type: { summary: 'string' }
            }
        },
        alternativeText: {
            name: 'alternative-text',
            control: {
                type: 'text'
            },
            description:
                'Alternative text used to describe the list. If the list is sortable, it should describe its behavior, for example: “Sortable menu. Press spacebar to grab or drop an item. Press up and down arrow keys to change position. Press escape to cancel.”',
            table: {
                type: { summary: 'string' }
            }
        },
        items: {
            control: {
                type: 'object'
            },
            description: 'Array of item objects.',
            table: {
                type: { summary: 'object[]' }
            }
        },
        action: {
            control: {
                type: 'object'
            },
            description: 'Array of actions',
            table: {
                type: { summary: 'object[]' }
            }
        },
        sortable: {
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description:
                'If true, it will be possible to reorder the list items.',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        },
        sortableIconName: {
            name: 'sortable-icon-name',
            control: {
                type: 'text'
            },
            description:
                "The Lightning Design System name of the sortable icon. \nNames are written in the format 'standard:account' where 'standard' is the category, and 'account' is the specific icon to be displayed.",
            table: {
                type: { summary: 'string' }
            }
        },
        sortableIconPosition: {
            name: 'sortable-icon-position',
            control: {
                type: 'select'
            },
            options: ['left', 'right'],
            defaultValue: 'right',
            description:
                'Position of the sortable icon. Valid values include left and right.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'right' }
            }
        },
        divider: {
            name: 'divider',
            control: {
                type: 'select'
            },
            options: ['top', 'bottom', 'around'],
            description:
                'Position of the sortable icon. Valid values include left and right.',
            table: {
                type: { summary: 'string' }
            }
        },
        imageWidth: {
            name: 'image-width',
            control: {
                type: 'select'
            },
            options: ['small', 'medium', 'large'],
            description:
                'Fixed width of image (3 sizes: (small 48px, medium 72px and large 128px)',
            table: {
                type: { summary: 'string' }
            }
        }
    }
};

const Template = (args) => List(args);

const items = [
    {
        label: 'Item 1',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://trailblazers.salesforce.com/resource/1618442007000/tdxlib/img/header_about_background_2x.jpg'
    },
    {
        label: 'Item 2',
        href: '/path/to_somewhere',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDAyMjV8MHwxfGFsbHw1NHx8fHx8fDF8fDE2MjAyNTA3MjY&ixlib=rb-1.2.1&q=85'
    },
    {
        label: 'Item 3',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://dutchsfcommunity.org/wp-content/uploads/2020/01/SF-Amsterdam-Background.jpg'
    },
    {
        label: 'Item 4',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        infos: [
            { label: 'info 1', href: '' },
            { label: 'info 2', href: '' }
        ],
        icons: [
            {
                iconName: 'utility:share',
                alternativeText: 'share button',
                title: 'Share'
            },
            {
                iconName: 'utility:refresh',
                alternativeText: 'refresh button',
                title: 'Refresh'
            }
        ],
        imageSrc:
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
    },
    {
        label: 'Item 5',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        infos: [
            { label: 'info 1', href: '' },
            { label: 'info 2', href: '' }
        ],
        icons: [
            {
                iconName: 'utility:share',
                alternativeText: 'share button',
                title: 'Share'
            },
            {
                iconName: 'utility:refresh',
                alternativeText: 'refresh button',
                title: 'Refresh'
            }
        ],
        imageSrc: 'https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300'
    }
];

const itemsWithAvatars = [
    {
        label: 'Item 1',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
        avatarFallbackIconName: 'custom:custom5'
    },
    {
        label: 'Item 2',
        avatarFallbackIconName: 'custom:custom9'
    },
    {
        label: 'Item 3',
        avatarFallbackIconName: 'custom:custom1',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar3.jpg'
    },
    {
        label: 'Item 4',
        avatarFallbackIconName: 'custom:custom11'
    },
    {
        label: 'Item 5',
        avatarFallbackIconName: 'custom:custom51'
    }
];

const itemsWithImagesAndAvatars = [
    {
        label: 'Item 1',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
        avatarFallbackIconName: 'custom:custom5',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://trailblazers.salesforce.com/resource/1618442007000/tdxlib/img/header_about_background_2x.jpg'
    },
    {
        label: 'Item 2',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
        avatarFallbackIconName: 'custom:custom9',
        href: '/path/to_somewhere',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDAyMjV8MHwxfGFsbHw1NHx8fHx8fDF8fDE2MjAyNTA3MjY&ixlib=rb-1.2.1&q=85'
    },
    {
        label: 'Item 3',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageSrc:
            'https://dutchsfcommunity.org/wp-content/uploads/2020/01/SF-Amsterdam-Background.jpg'
    },
    {
        label: 'Item 4',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
        avatarFallbackIconName: 'custom:custom11',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        infos: [
            { label: 'info 1', href: '' },
            { label: 'info 2', href: '' }
        ],
        icons: [
            {
                iconName: 'utility:share',
                alternativeText: 'share button',
                title: 'Share'
            },
            {
                iconName: 'utility:refresh',
                alternativeText: 'refresh button',
                title: 'Refresh'
            }
        ],
        imageSrc:
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
    },
    {
        label: 'Item 5',
        avatarFallbackIconName: 'custom:custom1',
        avatarSrc:
            'https://www.lightningdesignsystem.com/assets/images/avatar1.jpg',
        href: '',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        infos: [{ label: 'info 1', href: '' }],
        icons: [
            {
                iconName: 'utility:share',
                alternativeText: 'share button',
                title: 'Share'
            }
        ],
        imageSrc: 'https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300'
    }
];

const actions = [
    {
        label: 'Completed',
        name: 'completed-action',
        iconName: 'utility:check',
        disabled: false
    },
    {
        label: 'Pending',
        name: 'prending-action',
        iconName: 'utility:spinner',
        disabled: false
    },
    {
        label: 'Delete',
        name: 'delete-action',
        iconName: 'utility:delete',
        disabled: true
    }
];

const action = [
    {
        label: 'Completed',
        name: 'completed-action',
        iconName: 'utility:check',
        disabled: false
    }
];

export const Base = Template.bind({});
Base.args = {
    items: items,
    divider: 'around'
};

export const BaseWithDividerOnTop = Template.bind({});
BaseWithDividerOnTop.args = {
    items: items,
    divider: 'top'
};

export const ListWithAvatars = Template.bind({});
ListWithAvatars.args = {
    label: 'List with icons',
    items: itemsWithAvatars,
    divider: 'around'
};

export const SortableList = Template.bind({});
SortableList.args = {
    label: 'Sortable list',
    sortable: true,
    items: items,
    actions: actions,
    divider: 'around'
};

export const SortableListWithAvatars = Template.bind({});
SortableListWithAvatars.args = {
    label: 'Sortable list with Icons',
    items: itemsWithAvatars,
    actions: actions,
    sortableIconName: 'utility:drag_and_drop',
    sortableIconPosition: 'left',
    sortable: true,
    divider: 'around'
};

export const SortableListWithAvatarsAndSingleAction = Template.bind({});
SortableListWithAvatarsAndSingleAction.args = {
    label: 'Sortable list with Icons and Single Action',
    items: itemsWithAvatars,
    actions: action,
    sortableIconName: 'utility:drag_and_drop',
    sortableIconPosition: 'left',
    sortable: true,
    divider: 'top'
};

export const ListWithActions = Template.bind({});
ListWithActions.args = {
    label: 'List with actions menu',
    items: items,
    actions: actions,
    divider: 'around'
};

export const SortableListWithImagesAndAvatars = Template.bind({});
SortableListWithImagesAndAvatars.args = {
    label: 'Sortable list Images and Avatars with Icons',
    items: itemsWithImagesAndAvatars,
    actions: actions,
    sortableIconName: 'utility:drag_and_drop',
    sortableIconPosition: 'left',
    sortable: true,
    divider: 'around'
};
