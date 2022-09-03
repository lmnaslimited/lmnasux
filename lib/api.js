const homeMeta = {
    meta:
        [
            {
                name: "description",
                content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
            },
            {
                name: "author",
                content: "LMNAs"
            },
            {
                name: "keywords",
                content: "erp,ecommerce"
            },
        ]
}
const hero = {
    title: "LMNAs ExperieNce Suite",
    SubTitle: "Get Real-Time Insights",
    SubTitle_a: "Aspect Of Company",
    src: "/hero/women-hero-1400x800.gif",
    logo: "/hero/lmnas.png",
    href: "/contactus",
    link: "Book your Demo",

}
const homeproducts = {
    title: "OUR PRODUCTS",
    subTitle: "  Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure",
    products:
        [

            { title: 'ERP', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/erp-640x640.gif', href: "/products/erp", linkName: "Explore" },
            { title: 'E-COMMERCE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/ecommerce-640x640.gif', href: "/products/ecommerce", linkName: "Explore" },
            { title: 'DIGITAL MARKETING', subTitle: 'We help the e-commerce business to their revenue growth', image: '/product/digital-marketing-640x640.gif', href: "/products/digital marketing", linkName: "Explore" },

        ]
}
const homeIndustries = {
    title: "OUR INDUSTRIES",
    industries:
        [

            { title: 'MANUFACTURING', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/manufacturing-640x640.gif', href: "/industries/manufacturing", linkName: "Explore" },
            { title: 'RETAIL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/retail-640x640.gif', href: "/industries/retail", linkName: "Explore" },
            { title: 'DISTRIBUTION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/distribution-640x640.gif', href: "/industries/distribution", linkName: "Explore" },
            { title: 'EDUCATION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/education-640x640.gif', href: "/industries/healthcare", linkName: "Explore" },
            { title: 'HEALTHCARE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/healthcare-640x640.gif', href: "/industries/education", linkName: "Explore" },

        ]
}
const homeservices = {
    title: "OUR SERVICES",
    subTitle: "  Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure",
    services:
        [

            { title: 'FINANCE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/finance-640x640.gif', href: "/services/finance", linkName: "Explore" },
            { title: 'HR', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/hr-640x640.gif', href: "/services/hr", linkName: "Explore" },
            { title: 'PAYROLL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/services/payroll-640x640.gif', href: "/services/payroll", linkName: "Explore" },
        ]
}
const homepricing = {
    pricing:
        [
            { title: 'ERP', subTitle: '72/mo', image: '/pricing/coin-640x640.gif', linkName: "button", href: "/pricing/erp" },
            { title: 'ECOMMERCE', subTitle: '72/mo', image: '/pricing/coin-640x640.gif', linkName: "button", href: "/pricing/ecommerce" },
            { title: 'DIGITAL MARKETING', subTitle: '72/mo', image: '/pricing/coin-640x640.gif', linkName: "button", href: "/pricing/digital marketing" }

        ]
}
const partner = {
    heading: "TESTIMONIALS",
    title: "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, ",
    subTitle: " now we are 45% more efficient interms of offer closure",
    partner:
        [

            { title: 'KAYKARI BASKET', subTitle: 'This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services', image: '/testimonials/kaykaribasket-548x455.png', link: "" },
            { title: 'RETAIL', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/retail-640x640.gif', link: "" },
            { title: 'DISTRIBUTION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/distribution-640x640.gif', link: "" },
            { title: 'EDUCATION', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/education-640x640.gif', link: "" },
            { title: 'HEALTHCARE', subTitle: 'We help the e-commerce business to their revenue growth', image: '/industries/healthcare-640x640.gif', link: "" },

        ]
}

export async function getHomePageData() {
    return {
        title: "NextGen Social Erp",
        hero: hero,
        services: homeservices,
        products: homeproducts,
        industries: homeIndustries,
        pricing: homepricing,
        partner: partner,
        homeMeta: homeMeta
    }
}
const products = [
    {
        slug: "erp",
        title: "Why it is so great?",
        hero_title: "The best",
        hero_subTitle: "Features of ERP",
        hero_image: "/product/hero-erp-3000x2000.jpg",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        productMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }


    },
    {
        slug: "ecommerce",
        hero_title: "The best",
        hero_subTitle: "Features of Ecommerce",
        hero_image: "/product/ecommerce-1700x1400.png",
        card_title: "Flexible",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        productMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "digital marketing",
        hero_title: "The best",
        hero_subTitle: "Features of Ecommerce",
        hero_image: "/product/digitalmarketing-5000x3000.jpg",
        card_title: "Flexible",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        productMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }

    },
]
export async function getAllProductsPageData() {
    return (products)
}
export async function getProductPageData(slug) {
    const index = products.findIndex(x => x.slug === slug);
    return (products[index])

}
const industries = [
    {
        slug: "manufacturing",
        hero_title: "WHY LMNAs for MANUFACTURING",
        hero_image: "/manufacturing/manufacturing-hero-8192x3896.jpg",
        hero_point_a: "Product Quality",
        hero_point_b: "Product Quality",
        hero_point_c: "Product Quality",
        title: "BILL OF MATERIALS",
        subtitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        linkName: "Lets Get Started",
        image_a: "/manufacturing/manufacturing-stock.png",
        image_b: "/manufacturing/manufacturing-stock.png",
        industryMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "retail",
        hero_title: "Why LMNAs for retail",
        hero_image: "/manufacturing/retail-hero-5774x3247.jpg",
        hero_point_a: "Product Quality",
        hero_point_b: "Product Quality",
        hero_point_c: "Product Quality",
        title: "BILL OF MATERIALS",
        subtitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        linkName: "Lets Get Started",
        image_a: "/manufacturing/manufacturing-stock.png",
        image_b: "/manufacturing/manufacturing-stock.png",
        industryMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "distribution",
        hero_title: "Why LMNAs for distribution",
        hero_image: "/manufacturing/distribution-hero1280x640.png",
        hero_point_a: "Product Quality",
        hero_point_b: "Product Quality",
        hero_point_c: "Product Quality",
        title: "BILL OF MATERIALS",
        subtitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        linkName: "Lets Get Started",
        image_a: "/manufacturing/manufacturing-stock.png",
        image_b: "/manufacturing/manufacturing-stock.png",
        industryMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "education",
        hero_title: "Why LMNAs for education",
        hero_image: "/manufacturing/manufacturing-hero-8192x3896.jpg",
        hero_point_a: "Product Quality",
        hero_point_b: "Product Quality",
        hero_point_c: "Product Quality",
        title: "BILL OF MATERIALS",
        subtitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        linkName: "Lets Get Started",
        image_a: "/manufacturing/manufacturing-stock.png",
        image_b: "/manufacturing/manufacturing-stock.png",
        industryMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },
                ]
        }
    },
    {
        slug: "healthcare",
        hero_title: "Why LMNAs for healthcare",
        hero_image: "/manufacturing/manufacturing-hero-8192x3896.jpg",
        hero_point_a: "Product Quality",
        hero_point_b: "Product Quality",
        hero_point_c: "Product Quality",
        title: "BILL OF MATERIALS",
        subtitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        linkName: "Lets Get Started",
        image_a: "/manufacturing/manufacturing-stock.png",
        image_b: "/manufacturing/manufacturing-stock.png",
        industryMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
   

]
export async function getAllIndustriesPageData() {
    return (industries)
}
export async function getIndustryPageData(slug) {
    const index = industries.findIndex(x => x.slug === slug);
    return (industries[index])

}
const services = [
    {
        slug: "finance",
        title: "Why it is so great?",
        hero_title: "The best",
        hero_subTitle: "Features of Finance",
        hero_image: "/product/hero-erp-3000x2000.jpg",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        serviceMeta: {
            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "hr",
        title: "Why it is so great?",
        hero_title: "The best",
        hero_subTitle: "Features of HR",
        hero_image: "/product/hero-erp-3000x2000.jpg",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        serviceMeta: {
            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "payroll",
        title: "Why it is so great?",
        hero_title: "The best",
        hero_subTitle: "Features of Payroll",
        hero_image: "/product/hero-erp-3000x2000.jpg",
        social:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        social_a:
            { highlight: "1000", title: "Components", subTitle: "Here at Globex we take special care of what your organization needs instead of selling you a mass market" },
        feature: {
            feature_a: "24x7 Support",
            feature_b: "Extremely Fast",
            feature_c: "Live Analystics"
        },
        subsection: {
            title: "PartnerShip",
            subTitle: "Products are extremely benefits of company"
        },
        serviceMeta: {
            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
]
export async function getAllServicesPageData() {
    return (services)
}
export async function getServicePageData(slug) {
    const index = services.findIndex(x => x.slug === slug);
    return (services[index])

}
const pricing = [
    {
        slug: "erp",
        title: "OUR PRICING PLAN",
        subTitle: "We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think",
        option_a: {
            price_title: "Free",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_b: {
            price_title: "Premium",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_c: {
            price_title: "ADVANCED",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        priceMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "ecommerce",
        title: "OUR PRICING PLAN",
        subTitle: "We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think",
        option_a: {
            price_title: "Free",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_b: {
            price_title: "Premium",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_c: {
            price_title: "ADVANCED",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        priceMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }
    },
    {
        slug: "digital marketing",
        title: "OUR PRICING PLAN",
        subTitle: "We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think",
        option_a: {
            price_title: "Free",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_b: {
            price_title: "Premium",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        option_c: {
            price_title: "ADVANCED",
            price_subTitle: "Unlimited products features and dedicated support channels",
            linkName: "BUY NOW",
            href: "/products/"
        },
        priceMeta: {

            meta:
                [
                    {
                        name: "description",
                        content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
                    },
                    {
                        name: "author",
                        content: "LMNAs"
                    },
                    {
                        name: "keywords",
                        content: "erp,ecommerce"
                    },



                ]
        }

    },
]
export async function getAllPricingPageData() {
    return (pricing)
}
export async function getPricePageData(slug) {
    const index = pricing.findIndex(x => x.slug === slug);
    return (pricing[index])

}
const abouts = {
    aboutMeta:
    [
        {
            name: "description",
            content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"
        },
        {
            name: "author",
            content: "LMNAs"
        },
        {
            name: "keywords",
            content: "erp,ecommerce"
        },
],
    abouts:
        [

            { title: 'ABOUT US', subTitle: "Here are torderHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are torderHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.", image: '/aboutus/about-640x640.gif', link: "" },

        ],
     ourgoal:
        [

            { title: 'MISSION', subTitle: "The CEO role in raising a company corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.", image: '/aboutus/mission-640x640.gif', link: "" },
            { title: 'VISION', subTitle: "The CEO role in raising a company corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.", image: '/aboutus/vision-640x640.gif', link: "" }

        ],
        corevalues : {
            title: "CORE VALUES",
            subTitle: "core values are the fundamental beliefs of a person or organization. These guiding principles dictate behavior and can help people understand the difference between right and wrong.",
            corevalues:
                [
        
                ]
            }
}
export async function getAboutPageData() {
    return {
        title: "NextGen Social Erp",
        abouts: abouts,
    }
}

const contacts = {
    title: "Get Touch us",
    f_Name: "First Name",
    l_Name: "Last Name",
    query: "Type your Query",
    number: "Phone Number",
    message: "Message",
    linkName: "Submit",

    contacts:
        [
            { title: "CALL US", href: "", linkName: "(91) 98840-44470", image: "/contactus/contact-640x640.gif", href: "tel:+919884044470" },
            { title: "MAIL", href: "", linkName: "hello@lmnas.com", image: "/contactus/mail-640x640.gif", href: "mailto:hello@lmnas.com" }
        ],
     enquiry:
         [
            { title: "SUPPORT ENQUIRES", subTitle: "Get in touch with customer support", href: "", linkName: "Get Support", image: "/contactus/support-640x640.gif" },
            { title: "Address", subTitle: "#B206, Radiance Royal, Poonthamalle, Chennai - 56", href: "", linkName: "Get Map", image: "/contactus/address-640x640.gif" },
            { title: "Partner Enquiries", subTitle: "Browse our partner directory", href: "", linkName: "Find a Partner", image: "/contactus/partner-640x640.gif" }
         ],
    contactMeta:
       [
         { name: "description", content: "Cloud Erp for Manufacturing, Retail, Distribution, Healthcare and Educaton"},
         { name: "author", content: "LMNAs" },
         { name: "keywords", content: "erp,ecommerce"},
                
                
                
                        ]
}
export async function getContactPageData() {
    return {
        title: "NextGen Social Erp",
        contacts: contacts,
    }
}

