import { LightningElement } from 'lwc';

export default class VisualPickerAnalyticItems extends LightningElement {
    items = [
        {
            value: 'appointment-analytics',
            title: 'Appointment Analytics',
            description:
                'Bring the power of Tableau CRM to Lightning Scheduler customer appointments data. Analyze past appointment volumes across accounts, work tpes and territories.',
            avatar: {
                iconName: 'standard:service_appointment',
                size: 'medium'
            },
            tags: [
                {
                    label: 'Lightning'
                },
                {
                    label: 'Scheduler'
                },
                {
                    label: 'Appointment'
                }
            ],
            imgSrc: 'https://markmargolis.files.wordpress.com/2013/05/oppanalytics.jpg'
        },
        {
            value: 'approval-analytics',
            title: 'Approval Analytics',
            description:
                'The Salesforce Approval Analytics Template will give managers and leaders more visibility into approval process and identify bottlenecks.',
            avatar: {
                iconName: 'standard:approval',
                size: 'medium'
            },
            tags: [
                {
                    label: 'Sales'
                },
                {
                    label: 'Service'
                },
                {
                    label: 'Marketing'
                }
            ],
            imgSrc: 'https://sergeluca.files.wordpress.com/2018/11/categories.png'
        },
        {
            value: 'commerce-analytics',
            title: 'Commerce Analytics',
            description:
                'The B2B Commerce Analytics Template gives you a fast wat to apply the power of Tableau CRM to your B2B ecommerce data.',
            avatar: {
                iconName: 'standard:checkout',
                size: 'medium'
            },
            tags: [
                {
                    label: 'Commerce'
                }
            ],
            imgSrc: 'https://www.bigcommerce.com/blog/wp-content/uploads/2020/05/GenericBlog_Metrics_CD909_SJ.png'
        },
        {
            value: 'sales-analytics',
            title: 'Sales Analytics',
            description:
                'The latest version of the app, which helps your entire sales team unlock the full power of Sales Cloud data. With clear visibility into pipeline and historical trends.',
            avatar: {
                iconName: 'standard:default',
                size: 'medium'
            },
            tags: [
                {
                    label: 'Sales'
                },
                {
                    label: 'Lightning'
                }
            ],
            imgSrc: 'https://www.salesforce.com/content/dam/web/en_us/www/images/sales-cloud/sales-related-product-sales-analytics.png'
        }
    ];
}
