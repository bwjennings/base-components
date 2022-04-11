/**
 * @typedef {Object} VisualPickerItem
 * @name items
 * @property {object} avatar An object with item fields to be rendered as an avatar.
 * @property {string} avatarPosition If present, sets the position of the avatar. Valid values include top, bottom, right, left. The value defaults to left.
 * @property {string} description The description can include text, and is displayed under the title inside the figure.
 * @property {string} descriptionPosition The position of the title in the figure. Valid positions include top, bottom and center. The value defaults to center.
 * @property {boolean} disabled If present, the item is disabled and the user cannot interact with it. Default is false.
 * @property {string} imgAlternativeText The assistive text for the image in the figure.
 * @property {string} imgSrc The URL of the image in the figure.
 * @property {string} itemDescription The description can include text, and is displayed under the title.
 * @property {string} itemTitle The title can include text and is displayed under the item.
 * @property {string[]} tags Array of tag objects. The tags will be displayed as badges in the visual picker item figure.
 * @property {string} title The title can include text and is displayed inside the figure.
 * @property {string} titlePosition The position of the title in the figure. Valid positions include top, bottom and center. The value defaults to center.
 * @property {string} value Required. A unique value for the item.
 */
/**
 * @typedef {Object} VisualPickerAvatar
 * @name itemAvatar
 * @property {string} alternativeText The alternative text used to describe the avatar, which is displayed as hover text on the image.
 * @property {string} iconName The Lightning Design System name of the icon used as a fallback when the image fails to load. The initials fallback relies on this for its background color. Names are written in the format 'standard:account' where 'standard' is the category, and 'account' is the specific icon to be displayed. Only icons from the standard and custom categories are allowed.
 * @property {string} imgSrc Image URL for the avatar.
 * @property {string} initials If the record name contains two words, like first and last name, use the first capitalized letter of each. For records that only have a single word name, use the first two letters of that word using one capital and one lower case letter.
 * @property {string} presence Presence of the user to display. Valid values include online, busy, focus, offline, blocked and away.
 * @property {string} presencePosition Position of the presence icon. Valid values include top-left, top-right, bottom-left and bottom-right.
 * @property {string} size Size of the avatar icon. Valid values are x-small, small, medium, large, x-large and xx-large. Defaults to medium.
 * @property {string} variant The variant changes the shape of the avatar. Valid values are empty, circle, and square. Defaults to square.
 */
/**
 * @typedef {Object} VisualPickerTag
 * @name itemTags
 * @property {string} label Tag label.
 * @property {string} variant The variant changes the appearance of the tag. Valid values include base, brand, inverse, alt-inverse, success, info, warning, error, offline. Defaults to base.
 */

/**
 * @namespace stylingHooks
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-text-color
 * @default #3e3e3c
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-size
 * @default 0.75rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-weight
 * @default 700
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-text-color
 * @default #3e3e3c
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-size
 * @default 0.75rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-header-font-weight
 * @default 700
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-title-text-color
 * @default #080707
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-title-font-size
 * @default 1.25rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-title-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-title-font-weight
 * @default 700
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-title-alignment
 * @default center
 * @type alignment
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-text-color
 * @default #3e3e3c
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-font-size
 * @default 0.75rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-font-weight
 * @default 400
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-line-height
 * @default 1.25
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-item-description-alignment
 * @default center
 * @type alignment
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-tags-alignment
 * @default center
 * @type alignment
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-tags-padding
 * @default 0rem
 * @type padding
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-text-color
 * @default #080707
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-font-size
 * @default 1.25rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-font-weight
 * @default 700
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-alignment
 * @default center
 * @type alignment
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-title-padding
 * @default 0rem
 * @type padding
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-text-color
 * @default #3e3e3c
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-font-size
 * @default 0.75rem
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-font-style
 * @default normal
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-font-weight
 * @default 400
 * @type font
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-line-height
 * @default 1.25
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-alignment
 * @default center
 * @type alignment
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-description-margin
 * @default 0.25rem
 * @type margin
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-background
 * @default #ffffff
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-background-hover
 * @default #ffffff
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-background-selected
 * @default #1b96ff
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-border
 * @default #dddbda
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-border-hover
 * @default #1b96ff
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-color-border-selected
 * @default #1b96ff
 * @type color
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-sizing-border
 * @default 1px
 * @type sizing
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-styling-border
 * @default solid
 * @type styling
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-radius-border
 * @default 0.25rem
 * @type dimension
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-shadow
 * @default 0 2px 2px rgb(0 0 0 / 5%)
 * @type shadow
 */
/**
 * @memberof stylingHooks
 * @name --avonni-visual-picker-image-padding
 * @default 0rem
 * @type padding
 */
