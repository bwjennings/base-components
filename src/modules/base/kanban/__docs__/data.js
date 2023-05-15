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

const GROUP_VALUES = [
    {
        label: 'Open',
        value: 'open',
        headerActions: [
            { disabled: false, label: 'Action 1', name: 'Action 1' }
        ]
    },
    {
        label: 'In Progress',
        value: 'inProgress',
        footerActions: [
            {
                disabled: false,
                label: 'Action 1',
                name: 'Action 1',
                iconName: 'utility:cart'
            }
        ],
        headerActions: [
            { disabled: false, label: 'Action 1', name: 'Action 1' },
            { disabled: false, label: 'Action 2', name: 'Action 2' }
        ],
        showItemCount: true
    },
    {
        label: 'Closed',
        value: 'closed',
        backgroundColor: '#fff6f6',
        pathColor: '#aa3f3f',
        footerActions: [
            {
                disabled: false,
                label: 'Action 1',
                name: 'Action 1',
                iconName: 'utility:add'
            },
            { disabled: true, label: 'Action 2', name: 'Action 2' }
        ]
    }
];

const FIELDS = [
    {
        label: 'Opportunity name',
        fieldName: 'opportunityName',
        type: 'text'
    },
    {
        label: 'Amount',
        fieldName: 'amount',
        type: 'currency',
        typeAttributes: { currencyCode: 'EUR' }
    },
    {
        label: 'Phone',
        fieldName: 'phone',
        type: 'phone'
    },
    {
        label: 'Created date',
        fieldName: 'date',
        type: 'date'
    },
    {
        label: 'Percent',
        fieldName: 'percent',
        type: 'percent'
    },
    {
        label: 'Available',
        fieldName: 'available',
        type: 'boolean'
    }
];

const RECORDS = [
    {
        id: '001',
        status: 'open',
        opportunityName: 'Opportunity 1',
        amount: 25000,
        warningIcon: 'utility:warning',
        phone: '+375292567896',
        date: '1547250828000',
        percent: 0.28,
        available: true,
        assignee: 'John Doe',
        coverImage:
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
    },
    {
        id: '002',
        status: 'closed',
        opportunityName: 'Opportunity 2',
        amount: 13200,
        phone: '+375292567896',
        date: '1347250828000',
        percent: 0.77,
        assignee: 'John Doe',
        available: true
    },
    {
        id: '003',
        status: 'inProgress',
        opportunityName: 'Opportunity 3',
        amount: 5100,
        phone: '+37529888888',
        date: '1547250828000',
        percent: 0.83,
        assignee: 'Jane Doe',
        available: false
    },
    {
        id: '004',
        status: 'open',
        opportunityName: 'Opportunity 4',
        amount: 21570,
        phone: '+375292567896',
        date: '1647250828000',
        percent: 0.2,
        assignee: 'John Smith',
        available: false
    },
    {
        id: '005',
        status: 'open',
        opportunityName: 'Opportunity 5',
        amount: 200,
        phone: '+375299999999',
        date: '1347250828000',
        percent: 0.18,
        assignee: 'Jane Doe',
        available: true
    },
    {
        id: '006',
        status: 'closed',
        opportunityName: 'Opportunity 6',
        amount: 17500,
        assignee: 'John Doe',
        coverImage:
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg'
    },
    {
        id: '007',
        status: 'inProgress',
        opportunityName: 'Opportunity 7',
        amount: 5100,
        phone: '+37529888888',
        date: '1547250828000',
        percent: 0.83,
        assignee: 'John Smith',
        available: false
    },
    {
        id: '008',
        status: 'inProgress',
        opportunityName: 'Opportunity 8',
        amount: 5100,
        phone: '+37529888888',
        date: '1547250828000',
        assignee: 'Jane Doe',
        available: false
    },
    {
        id: '009',
        status: 'inProgress',
        opportunityName: 'Opportunity 9',
        amount: 5100,
        phone: '+37529888888',
        assignee: 'John Doe',
        available: false
    },
    {
        id: '010',
        status: 'inProgress',
        opportunityName: 'Opportunity 10',
        amount: 5100,
        phone: '+37529888888',
        date: '1547250828000',
        assignee: 'John Smith',
        percent: 0.83,
        available: false
    }
];

const ACTIONS = [
    { disabled: false, label: 'Action 1', name: 'Action 1' },
    { disabled: false, label: 'Action 2', name: 'Action 2' },
    { disabled: true, label: 'Action 3', name: 'Action 3' }
];

export { GROUP_VALUES, FIELDS, RECORDS, ACTIONS };
