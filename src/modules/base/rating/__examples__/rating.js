import Component from 'avonni/rating';

customElements.define('ac-base-rating', Component.CustomElementConstructor);

export const Rating = ({
    label,
    fieldLevelHelp,
    value,
    variant,
    iconName,
    iconSize,
    min,
    max,
    selection,
    disabled,
    readOnly,
    valueHidden
}) => {
    const element = document.createElement('ac-base-rating');
    element.label = label;
    element.fieldLevelHelp = fieldLevelHelp;
    element.value = value;
    element.variant = variant;
    element.iconName = iconName;
    element.iconSize = iconSize;
    element.min = min || 1;
    element.max = max || 5;
    element.selection = selection;
    element.disabled = disabled;
    element.readOnly = readOnly;
    element.valueHidden = valueHidden;
    return element;
};
