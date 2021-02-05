import '@lwc/synthetic-shadow';
import buildAndRegisterCustomElement from '../../../../../.storybook/utils/build-custom-element';
import Component from 'avonni/chartBar';

buildAndRegisterCustomElement('avonni-chart-bar', Component);

export const ChartBar = ({
    type,
    palette,
    chartDatasets,
    axisLabels,
    fullStack,
    displayUnits,
    showValues,
    xAxisRangeMin,
    xAxisRangeMax,
    yAxisRangeMin,
    yAxisRangeMax,
    decimalPlaces,
    legendPosition,
    hideLegend
}) => {
    const element = document.createElement('avonni-chart-bar');
    element.type = type;
    element.palette = palette;
    element.chartDatasets = chartDatasets;
    element.axisLabels = axisLabels;
    element.fullStack = fullStack;
    element.displayUnits = displayUnits;
    element.showValues = showValues;
    element.xAxisRangeMin = xAxisRangeMin;
    element.xAxisRangeMax = xAxisRangeMax;
    element.yAxisRangeMin = yAxisRangeMin;
    element.yAxisRangeMax = yAxisRangeMax;
    element.decimalPlaces = decimalPlaces;
    element.legendPosition = legendPosition;
    element.hideLegend = hideLegend;
    return element;
};
