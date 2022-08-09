const services = {
    services:
        [

            { title: 'FINANCE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/finance-640x640.gif', link:"/" },
            { title: 'HR', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/hr-640x640.gif', link:"" },
            { title: 'PAYROLL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/payroll-640x640.gif', link:"" },
            { title: 'Talent', subTitle: 'Resourcing', image: '/services/talent-512x512.png' },
            { title: 'CLOUD', subTitle: 'Migration', image: '/services/migration-512x512.png' },
            { title: 'HANA', subTitle: 'Cloud', image: '/services/cloud-512x512.png' },
            { title: 'SUPPORT', subTitle: 'Maintenance', image: '/services/support-512x512.png' },
        ]
}
const products = {
    products:
        [

            { title: 'ERP', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/erp-640x640.gif', link:"" },
            { title: 'E-COMMERCE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/ecommerce-640x640.gif', link:"" },
            { title: 'DIGITAL MARKETING', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/digital-marketing-640x640.gif', link:"" },
            { title: 'Talent', subTitle: 'Resourcing', image: '/services/talent-512x512.png' },
            { title: 'CLOUD', subTitle: 'Migration', image: '/services/migration-512x512.png' },
            { title: 'HANA', subTitle: 'Cloud', image: '/services/cloud-512x512.png' },
            { title: 'SUPPORT', subTitle: 'Maintenance', image: '/services/support-512x512.png' },
        ]
}
const industries = {
    industries:
        [

            { title: 'MANUFACTURING', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/manufacturing-640x640.gif', link:"" },
            { title: 'RETAIL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/retail-640x640.gif', link:"" },
            { title: 'DISTRIBUTION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/distribution-640x640.gif', link:"" },
            { title: 'EDUCATION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/education-640x640.gif', link:"" },
            { title: 'HEALTHCARE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/healthcare-640x640.gif', link:"" },
           
        ]
}
const partners = {
    title: 'Our Partners',
    subTitle: 'A Blended delivery will give optimum cost and maximum benefit. We have partnered with an energetic startup to benefit our clients the most.',
    name: 'LMNAs Cloud Solutions',
    logo: '/partners/lmnas-logo-circular.png',
    text1: 'An Indian Startup who have built a range of ',
    textHighlight: 'ERP & ECommerce',
    text2: ', products inhouse and services clients globally'

}
const footer = {
    title: '',
    subTitle: ' ',
    contactUs: [
        {
            href: '+44 2030062716 / +44 7535029430',
            type: 'tel',
        },
        {
            href: 'mani.ramanathan@sclsystems.co.uk',
            type: 'mail-to',
        },

    ],
    social: [
        {
            href: 'twitter.com',
            type: 'Twitter',
        },
        {
            href: 'Linkedin.com',
            type: 'LinkedIn',
        },
        {
            href: 'Insta.com',
            type: 'Instagram',
        },
        {
            href: 'YouTube.com',
            type: 'YouTube',
        },
        {
            href: 'FaceBook.com',
            type: 'FaceBook',
        },
    ]
}

export async function getHomePageData() {
    return {
        services: services,
        products: products,
        industries: industries,
        partners: partners,
        footer: footer,
    }
}