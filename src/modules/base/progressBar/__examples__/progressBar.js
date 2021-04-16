import Component from 'base/progressBar';

customElements.define(
    'ac-base-progress-bar',
    Component.CustomElementConstructor
);

export const ProgressBar = ({
    label,
    size,
    value,
    showValue,
    valuePosition,
    valueLabel,
    referenceLines,
    variant,
    theme,
    textured,
    thickness,
    orientation
}) => {
    const element = document.createElement('ac-base-progress-bar');
    element.label = label;
    element.size = size;
    element.value = value;
    element.showValue = showValue;
    element.valuePosition = valuePosition;
    element.valueLabel = valueLabel;
    element.referenceLines = referenceLines;
    element.variant = variant;
    element.theme = theme;
    element.textured = textured;
    element.thickness = thickness;
    element.orientation = orientation;
    return element;
};
