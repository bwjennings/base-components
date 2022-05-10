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

import { Map } from '../__examples__/map';

export default {
    title: 'Example/Map',
    argTypes: {
        markersTitle: {
            name: 'markers-title',
            control: {
                type: 'text'
            },
            table: {
                defaultValue: { summary: 'Markers' },
                type: { summary: 'string' }
            }
        },
        selectedMarkerValue: {
            name: 'selected-marker-value',
            control: {
                type: 'text'
            },
            table: {
                type: { summary: 'string' }
            }
        },
        zoomLevel: {
            name: 'zoom-level',
            control: {
                type: 'number',
                min: 1
            },
            table: {
                type: { summary: 'number' }
            }
        },
        listView: {
            name: 'list-view',
            control: {
                type: 'select'
            },
            options: ['visible', 'hidden', 'auto'],
            table: {
                defaultValue: { summary: 'auto' },
                type: { summary: 'string' }
            }
        },
        mapMarkers: {
            name: 'map-markers',
            control: {
                type: 'object'
            },
            table: {
                type: { summary: 'object[]' }
            }
        },
        center: {
            control: {
                type: 'object'
            },
            table: {
                type: { summary: 'object' }
            }
        },
        showFooter: {
            name: 'show-footer',
            control: {
                type: 'boolean'
            },
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' }
            }
        }
    },
    args: {
        listView: 'auto',
        markersTitle: 'Markers',
        showFooter: false
    }
};

// onmarkerselect

const Template = (args) => Map(args);

export const SingleMarker = Template.bind({});
SingleMarker.args = {
    mapMarkers: [
        {
            location: {
                Street: '1600 Pennsylvania Ave NW',
                City: 'Washington',
                State: 'DC'
            },

            title: 'The White House',
            description:
                'Landmark, historic home & office of the United States president, with tours for visitors.'
        }
    ]
};

export const MultipleMarkers = Template.bind({});

let selectedMarkerValue;

MultipleMarkers.args = {
    onchange: (event) => {
        selectedMarkerValue = event.detail.selectedMarkerValue;
    },
    markersTitle: "Côte d'Azur",
    selectedMarkerValue: selectedMarkerValue,
    mapMarkers: [
        {
            value: 'France1',
            location: {
                City: "Cap-d'Ail",
                Country: 'France'
            },

            icon: 'custom:custom26',
            title: "Cap-d'Ail"
        },
        {
            value: 'France2',
            location: {
                City: 'Beaulieu-sur-Mer',
                Country: 'France'
            },

            icon: 'custom:custom96',
            title: 'Beaulieu-sur-Mer'
        },
        {
            value: 'France3',
            location: {
                City: 'Saint-Jean-Cap-Ferrat',
                Country: 'France'
            },

            title: 'Saint-Jean-Cap-Ferrat'
        },
        {
            value: 'France4',
            location: {
                City: 'Villefranche-sur-Mer',
                Country: 'France'
            },

            icon: 'custom:custom92',
            title: 'Villefranche-sur-Mer'
        },
        {
            value: 'France5',
            location: {
                City: 'Antibes',
                Country: 'France'
            },

            icon: 'custom:custom61',
            title: 'Antibes'
        },
        {
            value: 'France6',
            location: {
                City: 'Juan-les-Pins',
                Country: 'France'
            },

            icon: 'custom:custom74',
            title: 'Juan-les-Pins'
        },
        {
            value: 'France7',
            location: {
                City: 'Cannes',
                Country: 'France'
            },

            icon: 'custom:custom3',
            title: 'Cannes'
        },
        {
            value: 'France8',
            location: {
                City: 'Saint-Raphaël',
                Country: 'France'
            },

            icon: 'custom:custom54',
            title: 'Saint-Raphaël'
        },
        {
            value: 'France9',
            location: {
                City: 'Fréjus',
                Country: 'France'
            },

            icon: 'custom:custom88',
            title: 'Fréjus'
        },
        {
            value: 'France10',
            location: {
                City: 'Sainte-Maxime',
                Country: 'France'
            },

            icon: 'custom:custom92',
            title: 'Sainte-Maxime'
        }
    ]
};

export const ManualCenteringAndZoom = Template.bind({});
ManualCenteringAndZoom.args = {
    center: {
        location: {
            City: 'Denver'
        }
    },
    zoomLevel: 4,
    markersTitle: 'Salesforce locations in United States',
    showFooter: true,
    listView: 'visible',
    mapMarkers: [
        {
            location: {
                Street: '1 Market St',
                City: 'San Francisco',
                PostalCode: '94105',
                State: 'CA',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'Worldwide Corporate Headquarters',
            description: 'Sales: 1800-NO-SOFTWARE'
        },
        {
            location: {
                Street: '929 108th Ave NE',
                City: 'Bellevue',
                PostalCode: '98004',
                State: 'WA',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Bellevue'
        },
        {
            location: {
                Street: '500 Boylston Street 19th Floor',
                City: 'Boston',
                PostalCode: '02116',
                State: 'MA',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Boston'
        },
        {
            location: {
                Street: '111 West Illinois Street',
                City: 'Chicago',
                PostalCode: '60654',
                State: 'IL',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Chicago'
        },
        {
            location: {
                Street: '2550 Wasser Terrace',
                City: 'Herndon',
                PostalCode: '20171',
                State: 'VA',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Herndon'
        },
        {
            location: {
                Street: '111 Monument Circle',
                City: 'Indianapolis',
                PostalCode: '46204',
                State: 'IN',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Indy'
        },
        {
            location: {
                Street: '361 Centennial Parkway',
                City: 'Louisville',
                PostalCode: '80027',
                State: 'CO',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Louisville'
        },
        {
            location: {
                Street: '685 Third Ave',
                City: 'New York',
                PostalCode: '10017',
                State: 'NY',
                Country: 'USA'
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc New York'
        }
    ]
};
