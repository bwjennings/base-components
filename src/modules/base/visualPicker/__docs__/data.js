export const items = [
    {
        itemTitle: 'Lightning Professional',
        itemDescription: 'Complete service CRM for teams of any size',
        value: 'lightning-professional',
        title: '$30',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:user'
        }
    },
    {
        itemTitle: 'Lightning Enterprise',
        itemDescription:
            'Everything you need to take support to the next level',
        value: 'lightning-enterprise',
        title: '$150',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:groups'
        }
    },
    {
        itemTitle: 'Lightning Enterprise Plus',
        itemDescription: 'Example of a disabled tile',
        value: 'lightning-enterprise-plus',
        disabled: true,
        title: '$220',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:account'
        }
    },
    {
        itemTitle: 'Lightning Unlimited',
        itemDescription: 'Complete support with enterprise-grade customization',
        value: 'lightning-unlimited',
        title: '$300',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'custom:custom68'
        }
    }
];

export const iconTiles = [
    {
        value: 'lightning-email',
        title: 'Email',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:email',
            size: 'large'
        },
        avatarPosition: 'top'
    },
    {
        value: 'lightning-favorite',
        title: 'Favorite',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:favorite',
            size: 'large'
        },
        avatarPosition: 'top'
    },
    {
        value: 'lightning-bookmark',
        title: 'Bookmark',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:bookmark',
            size: 'large'
        },
        avatarPosition: 'top'
    },
    {
        value: 'lightning-call',
        title: 'Call',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:call',
            size: 'large'
        },
        avatarPosition: 'top'
    },
    {
        value: 'lightning-comments',
        title: 'Comment',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:comments',
            size: 'large'
        },
        avatarPosition: 'top'
    },
    {
        value: 'lightning-chat',
        title: 'Chat',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:chat',
            size: 'large'
        },
        avatarPosition: 'top'
    }
];

export const itemsWithPictures = [
    {
        value: 'City',
        title: 'City',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:company'
        },
        imgSrc: 'https://media.architecturaldigest.com/photos/58f918044f42bd463db36a3f/16:9/w_1280,c_limit/1%20-%2010%20Greenest%20Cities%20in%20America%20in%202017.jpg',
        imgAlternativeText: 'City'
    },
    {
        value: 'Village',
        title: 'Village',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:home'
        },
        imgSrc: 'https://i.guim.co.uk/img/media/8eba2de427742ba2600eac3826faf1caa7fc773a/0_355_5608_3365/master/5608.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=c53c6491f4b95159d400070a6468ca5e',
        imgAlternativeText: 'Village'
    },
    {
        value: 'Mountain',
        title: 'Mountain',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:trailhead'
        },
        imgSrc: 'https://www.worldatlas.com/r/w1200/upload/56/fb/ee/alaska-mountain-range-csnafzger.jpg',
        imgAlternativeText: 'Mountain'
    },
    {
        value: 'Beach',
        title: 'Beach',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:world'
        },
        imgSrc: 'https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg',
        imgAlternativeText: 'Beach'
    },
    {
        value: 'Forest',
        title: 'Forest',
        titlePosition: 'bottom',
        avatar: {
            iconName: 'utility:trail'
        },
        imgSrc: 'https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000',
        imgAlternativeText: 'Forest'
    }
];

export const itemsWithTags = [
    {
        itemTitle: 'Lightning Professional',
        itemDescription: 'Complete service CRM for teams of any size',
        value: 'lightning-professional',
        title: '$30',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:user'
        },
        tags: [
            {
                label: 'Best Value'
            }
        ]
    },
    {
        itemTitle: 'Lightning Enterprise',
        itemDescription:
            'Everything you need to take support to the next level',
        value: 'lightning-enterprise',
        title: '$150',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:groups'
        },
        tags: [
            {
                label: 'Best Seller',
                variant: 'success'
            }
        ]
    },
    {
        itemTitle: 'Lightning Enterprise Plus',
        itemDescription: 'Example of a disabled tile',
        value: 'lightning-enterprise-plus',
        disabled: true,
        title: '$220',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:account'
        },
        tags: [
            {
                label: 'Unavailable',
                variant: 'error'
            }
        ]
    },
    {
        itemTitle: 'Lightning Unlimited',
        itemDescription: 'Complete support with enterprise-grade customization',
        value: 'lightning-unlimited',
        title: '$300',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'custom:custom68'
        }
    }
];

export const analyticsItems = [
    {
        value: 'appointment-analytics',
        title: 'Appointment Analytics',
        description:
            'Bring the power of Tableau CRM to Lightning Scheduler customer appointments data. Analyze past appointment volumes across accounts, work tpes and territories.',
        avatar: {
            iconName: 'standard:service_appointment',
            size: 'small'
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
            size: 'small'
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
            size: 'small'
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
            size: 'small'
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

export const topAnalyticsItems = [
    {
        value: 'appointment-analytics',
        title: 'Appointment Analytics',
        titlePosition: 'top',
        description:
            'Bring the power of Tableau CRM to Lightning Scheduler customer appointments data. Analyze past appointment volumes across accounts, work tpes and territories.',
        descriptionPosition: 'bottom',
        avatar: {
            iconName: 'standard:service_appointment',
            size: 'small'
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
        titlePosition: 'top',
        description:
            'The Salesforce Approval Analytics Template will give managers and leaders more visibility into approval process and identify bottlenecks.',
        descriptionPosition: 'bottom',
        avatar: {
            iconName: 'standard:approval',
            size: 'small'
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
        titlePosition: 'top',
        description:
            'The B2B Commerce Analytics Template gives you a fast wat to apply the power of Tableau CRM to your B2B ecommerce data.',
        descriptionPosition: 'bottom',
        avatar: {
            iconName: 'standard:checkout',
            size: 'small'
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
        titlePosition: 'top',
        description:
            'The latest version of the app, which helps your entire sales team unlock the full power of Sales Cloud data. With clear visibility into pipeline and historical trends.',
        descriptionPosition: 'bottom',
        avatar: {
            iconName: 'standard:default',
            size: 'small'
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

export const goalStories = [
    {
        value: 'dataset',
        title: 'Create from Dataset',
        titlePosition: 'top',
        description:
            'Choose the dataset and columns to build your custom analysis.',
        avatar: {
            iconName: 'utility:add'
        }
    },
    {
        value: 'customer-revenue',
        title: 'Maximize Customer Revenue',
        titlePosition: 'top',
        description:
            'Analyze which types of accounts are leading to higher sales. Use a regression model to predict which accounts might bring additional revenue.',
        avatar: {
            iconName: 'standard:account'
        },
        tags: [
            {
                label: 'Sales'
            },
            {
                label: 'Einstein Discovery'
            }
        ]
    },
    {
        value: 'win-rate',
        title: 'Maximize Win Rate',
        titlePosition: 'top',
        description:
            'Explore the key drivers for winning deals wihtout the hassle of prepping your data.',
        avatar: {
            iconName: 'standard:opportunity'
        },
        tags: [
            {
                label: 'Sales'
            },
            {
                label: 'Einstein Discovery'
            }
        ]
    },
    {
        value: 'time-to-close',
        title: 'Minimize Time To Close',
        titlePosition: 'top',
        description:
            'understand the key factors that drive shorter deal cycles without having to worry about where to begin',
        avatar: {
            iconName: 'standard:account'
        },
        tags: [
            {
                label: 'Sales'
            },
            {
                label: 'Einstein Discovery'
            }
        ]
    }
];

export const botStories = [
    {
        value: 'scratch',
        title: 'Start from Scratch',
        titlePosition: 'center',
        description: 'Get started fast with included system dialogs.',
        descriptionPosition: 'center',
        imgSrc: 'https://miro.medium.com/max/400/1*Y1klwgS90g788BD8gf3aLw.png'
    },
    {
        value: 'template',
        title: 'Start from a Template',
        titlePosition: 'center',
        description: 'Automate common use cases for Sales & Service.',
        descriptionPosition: 'center',
        imgSrc: 'https://miro.medium.com/max/400/1*Y1klwgS90g788BD8gf3aLw.png'
    },
    {
        value: 'sales',
        title: 'Sales Prospecting Bot',
        titlePosition: 'center',
        description: 'Gather prospects and add them to sales cadences.',
        descriptionPosition: 'center',
        imgSrc: 'https://miro.medium.com/max/400/1*Y1klwgS90g788BD8gf3aLw.png'
    },
    {
        value: 'marketing',
        title: 'Marketing Prospecting Bot',
        titlePosition: 'center',
        description: 'Gather prospects and add them to marketing cadences.',
        descriptionPosition: 'center',
        imgSrc: 'https://miro.medium.com/max/400/1*Y1klwgS90g788BD8gf3aLw.png'
    },
    {
        value: 'finance',
        title: 'Finance Prospecting Bot',
        titlePosition: 'center',
        description: 'Gather prospects and add them to finance cadences.',
        descriptionPosition: 'center',
        imgSrc: 'https://miro.medium.com/max/400/1*Y1klwgS90g788BD8gf3aLw.png'
    }
];

export const avatarStories = [
    {
        value: 'garret-jones',
        title: 'Garret Jones',
        description: 'VP, Human Resources',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/2.jpg',
            presence: 'online'
        }
    },
    {
        value: 'heather-johnson',
        title: 'Heather Johnson',
        description: 'VP, Finance',
        avatar: {
            variant: 'circle',
            initials: 'HJ',
            iconName: 'standard:user',
            presence: 'online'
        }
    },
    {
        value: 'richard-matthews',
        title: 'Richard Matthews',
        description: 'Director of Sales Operations',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2018/04/Linkedin-headshot-0005.jpg?resize=1024%2C1024&ssl=1',
            presence: 'offline'
        }
    },
    {
        value: 'michaela-david',
        title: 'Michaela David',
        description: 'HR Services Lead',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://source.unsplash.com/nwdPxI1h4NQ/100x100',
            presence: 'away'
        }
    },
    {
        value: 'roger-reese',
        title: 'Roger Reese',
        description: 'Senior Vice President',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://linkedinriches.com/wp-content/uploads/2013/12/Nemo-Headshot-2.jpg',
            presence: 'online'
        }
    }
];

export const xSmallAvatarStories = [
    {
        value: 'garret-jones',
        itemTitle: 'Garret Jones',
        itemDescription: 'VP, Human Resources',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/2.jpg',
            presence: 'online',
            size: 'large'
        }
    },
    {
        itemTitle: 'Heather Johnson',
        itemDescription: 'VP, Finance',
        avatar: {
            variant: 'circle',
            initials: 'HJ',
            iconName: 'standard:user',
            presence: 'online',
            size: 'large'
        },
        value: 'heather-johnson'
    },
    {
        itemTitle: 'Richard Matthews',
        itemDescription: 'Director of Sales Operations',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2018/04/Linkedin-headshot-0005.jpg?resize=1024%2C1024&ssl=1',
            presence: 'offline',
            size: 'large'
        },
        value: 'richard-matthews'
    },
    {
        itemTitle: 'Michaela David',
        itemDescription: 'HR Services Lead',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://source.unsplash.com/nwdPxI1h4NQ/100x100',
            presence: 'away',
            size: 'large'
        },
        value: 'michaela-david'
    },
    {
        itemTitle: 'Roger Reese',
        itemDescription: 'Senior Vice President',
        avatar: {
            variant: 'circle',
            imgSrc: 'https://linkedinriches.com/wp-content/uploads/2013/12/Nemo-Headshot-2.jpg',
            presence: 'online',
            size: 'large'
        },
        value: 'roger-reese'
    }
];

export const testItems = [
    {
        itemTitle: 'Lightning Professional',
        itemDescription: 'Complete service CRM for teams of any size',
        value: 'lightning-professional',
        title: '$30',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:user'
        }
    },
    {
        itemTitle: 'Lightning Enterprise',
        itemDescription:
            'Everything you need to take support to the next level',
        value: 'lightning-enterprise',
        title: '$150',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:groups'
        }
    },
    {
        itemTitle: 'Lightning Enterprise Plus',
        itemDescription: 'Example of a disabled tile',
        value: 'lightning-enterprise-plus',
        disabled: true,
        title: '$220',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'standard:account'
        }
    },
    {
        itemTitle: 'Lightning Unlimited',
        itemDescription: 'Complete support with enterprise-grade customization',
        value: 'lightning-unlimited',
        title: '$300',
        description: 'USD/user/month *',
        avatar: {
            iconName: 'custom:custom68'
        }
    }
];
