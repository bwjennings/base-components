/**
 * @typedef {Object} ListItem
 * @name items
 * @property {object} avatar Avatar object. If present, the avatar is displayed to the left of the item.
 * @property {string} description Description of the item.
 * @property {string} name Name to identify the item in the list.
 * @property {string} href The URL of the page the link goes to.
 * @property {string[]} icons List of iconName displayed next to the label.
 * @property {string} imageSrc Image URL for the list item image. If present, the image is displayed to the left of the item.
 * @property {object} infos List of additional information to display. Valid keys:
 * - label: string
 * - href: string
 * @property {string} label Required. Label of the item.
 */
/**
 * @typedef {Object} ListAction
 * @name actions
 * @property {string} label Required. The action label.
 * @property {string} name Required. The name of the action, which identifies the selected action.
 * @property {string} iconName The Lightning Design System name of the icon. Names are written in the format standard:opportunity. The icon is appended to the left of the label.
 * @property {boolean} disabled Specifies whether the action can be selected. If true, the action item is shown as disabled. This value defaults to false.
 */
/**
 * @typedef {Object} ListAvatar
 * @name avatar
 * @property {string} fallbackIconName The Lightning Design System name of the icon used as a fallback when the image fails to load. The initials fallback relies on this for its background color. Names are written in the format 'standard:account' where 'standard' is the category, and 'account' is the specific icon to be displayed. Only icons from the standard and custom categories are allowed.
 * @property {string} size Size of the avatar icon. Valid values are x-small, small, medium, large, x-large and xx-large. Defaults to medium.
 * @property {string} initials If the record name contains two words, like first and last name, use the first capitalized letter of each. For records that only have a single word name, use the first two letters of that word using one capital and one lower case letter.
 * @property {string} src Image URL.
 * @property {string} variant The variant changes the shape of the avatar. Valid values are empty, circle, and square. Defaults to square.
 * @property {string} presence Presence of the user to display. Valid values include online, busy, focus, offline, blocked and away.
 * @property {string} presencePosition Position of the presence icon. Valid values include top-left, top-right, bottom-left and bottom-right.
 */
/**
 * @typedef {Object} ImageAttributes
 * @name imageAttributes
 * @property {string} size The size of the images in the base, grid or single-line variants. In the base variant, the size controls the width of the image. On the grid and single-line variants, the size controls the height of the image. Valid values are small, medium, large. The size defaults to large.
 * @property {string} cropFit The object-fit css property. Supported values are cover, contain, fill and none. The value defaults to cover.
 * @property {number} cropPositionX The image object-position horizontal percentage property. The value defaults to 50.
 * @property {number} cropPositionY The image object-position vertical percentage property. The value defaults to 50.
 */

/**
 * @namespace stylingHooks
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-header-text-color
 * @default #080707
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-header-font-size
 * @default 1rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-header-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-header-font-weight
 * @default 400
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-header-line-height
 * @default 1.25
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-header-text-color
 * @default #080707
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-header-font-size
 * @default 0.8125rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-header-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-header-font-weight
 * @default 400
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-description-text-color
 * @default #080707
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-description-font-size
 * @default 0.8125rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-description-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-description-font-weight
 * @default 400
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-color-background
 * @default transparent
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-color-background-sortable
 * @default --avonni-list-item-color-background, transparent
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-color-background-hover
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-color-border
 * @default #dddbda
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-sizing-border
 * @default 1px
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-styling-border
 * @default solid
 * @type string
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-around-border-radius
 * @default 0.25rem
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-color-background-sortable-hover
 * @default --avonni-list-item-color-background-hover, #f3f2f2
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-block-between
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-inline-between
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-block-start
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-block-end
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-inline-start
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-spacing-inline-end
 * @type dimension
 * @default 0.5rem
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-cursor-sortable
 * @default --avonni-list-item-cursor, grab
 * @type string
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-cursor
 * @type string
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-spacing-block-start
 * @type dimension
 * @default 0px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-spacing-block-end
 * @type dimension
 * @default 0px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-spacing-inline-start
 * @type dimension
 * @default 0px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-spacing-inline-end
 * @type dimension
 * @default 0px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-color-background
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-size-small
 * @type dimension
 * @default 48px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-size-medium
 * @type dimension
 * @default 72px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-item-image-size-large
 * @type dimension
 * @default 128px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-grid-item-image-size-small
 * @type dimension
 * @default 48px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-grid-item-image-size-medium
 * @type dimension
 * @default 96px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-grid-item-image-size-large
 * @type dimension
 * @default 192px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-single-line-item-image-size-small
 * @type dimension
 * @default 48px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-single-line-item-image-size-medium
 * @type dimension
 * @default 96px
 */
/**
 * @memberof stylingHooks
 * @name --avonni-list-single-line-item-image-size-large
 * @type dimension
 * @default 192px
 */
