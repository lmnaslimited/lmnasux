import Enquirycard from "./enquirycard";
import Image from "next/image";
export default function Enquiry({enquiry}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 my-24">
        <div className="col-span-1">
        <div>
            <Enquirycard key={enquiry.enquiry[0].title} title={enquiry.enquiry[0].title} subTitle={enquiry.enquiry[0].subTitle} src={enquiry.enquiry[0].image} linkName={enquiry.enquiry[0].linkName}></Enquirycard>
        </div>
        </div>
        <div className="col-span-1 border-l-2 border-r-2">
        <div>
            <Enquirycard key={enquiry.enquiry[0].title} title={enquiry.enquiry[0].title} subTitle={enquiry.enquiry[0].subTitle} src={enquiry.enquiry[0].image} linkName={enquiry.enquiry[0].linkName}></Enquirycard>
        </div>
        </div>
        <div className="col-span-1 border-l-2 border-r-2">
        <div>
            <Enquirycard key={enquiry.enquiry[0].title} title={enquiry.enquiry[0].title} subTitle={enquiry.enquiry[0].subTitle} src={enquiry.enquiry[0].image} linkName={enquiry.enquiry[0].linkName}></Enquirycard>
        </div>
        </div>
        </div>
    )
}