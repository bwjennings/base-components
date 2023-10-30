import Component from 'c/list';

customElements.define('ac-base-list', Component.CustomElementConstructor);

export const List = ({
    actions,
    alternativeText,
    cols,
    divider,
    enableInfiniteLoading,
    fieldAttributes,
    imageAttributes,
    isLoading,
    items,
    label,
    largeContainerCols,
    loadMoreOffset,
    mediaActions,
    mediumContainerCols,
    smallContainerCols,
    sortable,
    sortableIconName,
    sortableIconPosition,
    variant,
    visibleActions,
    visibleMediaActions
}) => {
    const element = document.createElement('ac-base-list');
    element.actions = actions;
    element.alternativeText = alternativeText;
    element.cols = cols;
    element.divider = divider;
    element.enableInfiniteLoading = enableInfiniteLoading;
    element.fieldAttributes = fieldAttributes;
    element.imageAttributes = imageAttributes;
    element.isLoading = isLoading;
    element.items = items;
    element.label = label;
    element.largeContainerCols = largeContainerCols;
    element.loadMoreOffset = loadMoreOffset;
    element.mediaActions = mediaActions;
    element.mediumContainerCols = mediumContainerCols;
    element.smallContainerCols = smallContainerCols;
    element.sortable = sortable;
    element.sortableIconName = sortableIconName;
    element.sortableIconPosition = sortableIconPosition;
    element.variant = variant;
    element.visibleActions = visibleActions;
    element.visibleMediaActions = visibleMediaActions;
    return element;
};
