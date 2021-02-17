import { ChartFunnel } from '../__examples__/chartFunnel';
import { html } from 'lit-html';

export default {
    title: 'Example/Chart Funnel',
    argTypes: {
        palette: {
            control: {
                type: 'select',
                options: [
                    'aurora',
                    'nightfall',
                    'wildflowers',
                    'sunrise',
                    'bluegrass',
                    'ocean',
                    'heat',
                    'dusk',
                    'pond',
                    'watermelon',
                    'fire',
                    'water',
                    'lake',
                    'mineral',
                    'extension'
                ]
            },
            defaultValue: 'aurora',
            table: {
                defaultValue: { summary: 'aurora' }
            }
        },
        displayUnits: {
            control: {
                type: 'select',
                options: [
                    'shortened-number',
                    'full-number',
                    'hundreds',
                    'thousands',
                    'millions',
                    'billions',
                    'trillions'
                ]
            },
            defaultValue: 'full-number',
            table: {
                defaultValue: { summary: 'full-number' }
            }
        },
        decimalPlaces: {
            control: {
                type: 'select',
                options: ['auto', '0', '1', '2', '3', '4', '5']
            },
            defaultValue: 'auto',
            table: {
                defaultValue: { summary: 'auto' }
            }
        },
        tooltipHidden: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        showValues: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        showPercentages: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        combineSmallGroups: {
            control: {
                type: 'boolean'
            },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        combineMax: {
            control: {
                type: 'number',
                min: 0
            },
            defaultValue: 1
        }
    }
};

const chartDataset = [
    { label: 'Lead', value: 50000 },
    { label: 'Opportunity', value: 20000 },
    { label: 'Account', value: 70000 },
    { label: 'Contact', value: 10000 },
    { label: 'Person', value: 25000 }
];

const Template = (args) => {
    return html`
        <div style="max-width: 20rem">
            ${ChartFunnel(args)}
        </div>
    `
};

export const Base = Template.bind({});
Base.args = {
    chartDataset: chartDataset
};
