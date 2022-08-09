const heros = {
    summary:"From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
    image:"/hero/hero-image-600x600.gif",
    heros:
    [
        { title: 'Get started', link: '', },
        { title: 'Speak to Sales', link: '', },
    ]
}
const services = {
    title: "OUR SERVICES",
    subTitle: "  Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure",
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
    title: "OUR PRODUCTS",
    subTitle: "  Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure",
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
const partner = {
    partner:
        [

            { title: 'KAYKARI BASKET', subTitle: 'This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services', image: '/testimonials/kaykaribasket-548x455.png', link:"" },
            { title: 'RETAIL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/retail-640x640.gif', link:"" },
            { title: 'DISTRIBUTION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/distribution-640x640.gif', link:"" },
            { title: 'EDUCATION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/education-640x640.gif', link:"" },
            { title: 'HEALTHCARE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/healthcare-640x640.gif', link:"" },
           
        ]
}
const pricing = {
    pricing:
      [
        { title: 'E-COMMERCE', subTitle: '72/mo', image: '/pricing/coin-640x640.gif'},
        { title: 'RETAIL', subTitle: '72/mo', image: '/pricing/coin-640x640.gif' },
        { title: 'DISTRIBUTION', subTitle: '72/mo', image: '/pricing/coin-640x640.gif' }
        
      ]
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
        heros: heros,
        services: services,
        products: products,
        industries: industries,
        pricing: pricing,
        partner: partner,
        footer: footer,
    }
}