import Component from 'c/list';

customElements.define('ac-base-list', Component.CustomElementConstructor);

export const List = ({
    label,
    alternativeText,
    sortable,
    items,
    sortableIconName,
    sortableIconPosition
}) => {
    const element = document.createElement('ac-base-list');
    element.label = label;
    element.alternativeText = alternativeText;
    element.sortable = sortable;
    element.items = items;
    element.sortableIconName = sortableIconName;
    element.sortableIconPosition = sortableIconPosition;
    return element;
};
