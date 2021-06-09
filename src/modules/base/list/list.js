import { LightningElement, api } from 'lwc';
import {
    normalizeArray,
    normalizeBoolean,
    normalizeString
} from 'c/utilsPrivate';
import { classSet } from 'c/utils';

const ICON_POSITIONS = {
    valid: ['left', 'right'],
    default: 'right'
};

const DEFAULT_ITEM_HEIGHT = 44;

export default class List extends LightningElement {
    @api label;
    @api sortableIconName;
    @api alternativeText;

    _items = [];
    _sortable = false;
    _sortableIconPosition = ICON_POSITIONS.default;

    _draggedIndex;
    _draggedElement;
    _initialY;
    _menuTop;
    _menuBottom;
    _itemElements;
    _savedComputedItems;
    _currentItemDraggedHeight;
    _actions = [];
    _hasActions = false;
    computedActions = [];
    computedItems = [];
    menuRole;
    itemRole;

    @api
    get items() {
        return this._items;
    }
    set items(proxy) {
        this._items = normalizeArray(proxy);
        this.computedItems = JSON.parse(JSON.stringify(this._items));
        this.computedItems.forEach((item) => {
            if (item.infos === undefined) {
                item.infos = [];
            }
            if (item.icons === undefined) {
                item.icons = [];
            }
        });
    }

    @api
    get sortable() {
        return this._sortable;
    }
    set sortable(bool) {
        this._sortable = normalizeBoolean(bool);

        if (this._sortable) {
            this.menuRole = 'listbox';
            this.itemRole = 'option';
        }
    }

    @api
    get sortableIconPosition() {
        return this._sortableIconPosition;
    }
    set sortableIconPosition(value) {
        this._sortableIconPosition = normalizeString(value, {
            fallbackValue: ICON_POSITIONS.default,
            validValues: ICON_POSITIONS.valid
        });
    }
    @api
    get actions() {
        return this._actions;
    }
    set actions(proxy) {
        this._actions = normalizeArray(proxy);
        this.computedActions = JSON.parse(JSON.stringify(this._actions));
        this._hasActions = true;
    }

    get showIconRight() {
        return (
            this.sortable &&
            this.sortableIconName &&
            this.sortableIconPosition === 'right'
        );
    }

    get showIconLeft() {
        return (
            this.sortable &&
            this.sortableIconName &&
            this.sortableIconPosition === 'left'
        );
    }

    get itemClass() {
        return classSet('slds-border_bottom slds-grid list-item')
            .add({
                'sortable-item': this.sortable,
                'expanded-item': this._hasActions
            })
            .toString();
    }

    get tabindex() {
        return this.sortable ? '0' : '-1';
    }

    @api
    reset() {
        this.clearSelection();
        this.computedItems = JSON.parse(JSON.stringify(this.items));
    }

    updateAssistiveText() {
        const label = this.computedItems[this._draggedIndex].label;
        const position = this._draggedIndex + 1;
        const total = this.computedItems.length;
        const element = this.template.querySelector(
            '.slds-assistive-text[aria-live="assertive"]'
        );
        // We don't use a variable to avoid rerendering
        element.textContent = `${label}. ${position} / ${total}`;
    }

    getHoveredItem(center) {
        return this._itemElements.find((item) => {
            if (item !== this._draggedElement) {
                const itemIndex = Number(item.dataset.index);
                const itemPosition = item.getBoundingClientRect();
                const itemCenter =
                    itemPosition.bottom - itemPosition.height / 2;

                if (
                    (this._draggedIndex > itemIndex && center < itemCenter) ||
                    (this._draggedIndex < itemIndex && center > itemCenter)
                ) {
                    return item;
                }
            }
            return undefined;
        });
    }

    switchWithItem(target) {
        const targetIndex = Number(target.dataset.index);
        const index = this._draggedIndex;
        target.classList.add('sortable-item_moved');

        // If the target has already been moved, move it back to its original position
        // Else, move it up or down
        if (target.style.transform !== '') {
            target.style.transform = '';
        } else {
            const translationValue =
                targetIndex > index
                    ? -this._currentItemDraggedHeight
                    : this._currentItemDraggedHeight;
            target.style.transform = `translateY(${translationValue + 'px'})`;
        }

        // Make the switch in computed items
        [this.computedItems[targetIndex], this.computedItems[index]] = [
            this.computedItems[index],
            this.computedItems[targetIndex]
        ];

        this._draggedIndex = targetIndex;
        this._draggedElement.dataset.index = targetIndex;
        target.dataset.index = index;
        this.updateAssistiveText();
    }

    clearSelection() {
        // Clean the styles and dataset
        this._itemElements.forEach((item, index) => {
            item.style = undefined;
            item.dataset.position = 0;
            item.dataset.index = index;
            item.className = item.className.replace(
                /sortable-item_moved.*/g,
                ''
            );
        });
        if (this._draggedElement)
            this._draggedElement.classList.remove('sortable-item_dragged');

        this.template.querySelector(
            '.slds-assistive-text[aria-live="assertive"]'
        ).textContent = '';

        // Clean the tracked variables
        this._draggedElement = this._draggedIndex = this._initialY = this._savedComputedItems = undefined;
    }

    initPositions(event) {
        const menuPosition = this.template
            .querySelector('.menu')
            .getBoundingClientRect();
        this._menuTop = menuPosition.top;
        this._menuBottom = menuPosition.bottom;

        this._initialY =
            event.type === 'touchstart'
                ? event.touches[0].clientY
                : event.clientY;
    }

    dragStart(event) {
        // Stop dragging if the click was on a button menu
        if (!this.sortable || event.target.tagName === 'LIGHTNING-BUTTON-MENU')
            return;

        this._itemElements = Array.from(
            this.template.querySelectorAll('.sortable-item')
        );
        this._draggedElement = event.currentTarget;
        this._currentItemDraggedHeight = this._draggedElement.offsetHeight;
        this._draggedIndex = Number(this._draggedElement.dataset.index);
        this._draggedElement.classList.add('sortable-item_dragged');
        if (event.type !== 'keydown') {
            this.initPositions(event);
        } else {
            this._savedComputedItems = [...this.computedItems];
        }

        this.updateAssistiveText();

        if (event.type === 'touchstart') {
            // Make sure touch events don't trigger mouse events
            event.preventDefault();
            // Close any open button menu
            this._draggedElement.focus();
        }
    }

    drag(event) {
        if (!this._draggedElement) return;

        const mouseY =
            event.type === 'touchmove'
                ? event.touches[0].clientY
                : event.clientY;
        const menuTop = this._menuTop;
        const menuBottom = this._menuBottom;

        // Make sure it is not possible to drag the item out of the menu
        let currentY;
        if (mouseY < menuTop) {
            currentY = menuTop;
        } else if (mouseY > menuBottom) {
            currentY = menuBottom;
        } else {
            currentY = mouseY;
        }

        // Stick the dragged item to the mouse position
        this._draggedElement.style.transform = `translateY(${
            currentY - this._initialY
        }px)`;

        // Get the position of the dragged item
        const position = this._draggedElement.getBoundingClientRect();
        const center = position.bottom - position.height / 2;

        const hoveredItem = this.getHoveredItem(center);
        if (hoveredItem) this.switchWithItem(hoveredItem);
        event.currentTarget
            .querySelector('lightning-button-menu')
            .classList.remove('slds-is-open');
    }

    dragEnd() {
        if (!this._draggedElement) return;

        this.computedItems = [...this.computedItems];

        this.clearSelection();

        this.dispatchEvent(
            new CustomEvent('reorder', {
                detail: {
                    items: this.computedItems
                }
            })
        );
    }

    handleKeyDown(event) {
        if (!this.sortable) return;

        // If space bar is pressed, select or drop the item
        if (event.key === ' ' || event.key === 'Spacebar') {
            if (this._draggedElement) {
                this.dragEnd();
            } else {
                this.dragStart(event);
            }
        } else if (this._draggedElement) {
            // If escape is pressed, cancel the move
            if (event.key === 'Escape' || event.key === 'Esc') {
                this.computedItems = [...this._savedComputedItems];
                this.clearSelection();
            }

            // If up/down arrow is pressed, move the item
            const index = Number(event.currentTarget.dataset.index);
            let targetIndex;

            if (
                event.key === 'ArrowDown' &&
                index + 1 < this.computedItems.length
            ) {
                targetIndex = index + 1;
            } else if (event.key === 'ArrowUp') {
                targetIndex = index - 1;
            }

            if (targetIndex >= 0) {
                const targetItem = this._itemElements.find(
                    (item) => Number(item.dataset.index) === targetIndex
                );

                this.switchWithItem(targetItem);

                // Move the dragged element
                const currentPosition = Number(
                    this._draggedElement.dataset.position
                );
                const position =
                    targetIndex > index
                        ? currentPosition + DEFAULT_ITEM_HEIGHT
                        : currentPosition - DEFAULT_ITEM_HEIGHT;

                this._draggedElement.style.transform = `translateY(${position}px)`;
                this._draggedElement.dataset.position = position;
            }
        }
    }

    handleButtonMenuTouchStart(event) {
        // Stop the dragging process when touching the button menu
        event.stopPropagation();
    }
}
