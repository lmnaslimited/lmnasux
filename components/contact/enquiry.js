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
        <div className="col-span-1 border-l-2">
        <div>
            <Enquirycard key={enquiry.enquiry[1].title} title={enquiry.enquiry[1].title} subTitle={enquiry.enquiry[1].subTitle} src={enquiry.enquiry[1].image} linkName={enquiry.enquiry[1].linkName}></Enquirycard>
        </div>
        </div>
        <div className="col-span-1 border-l-2">
        <div>
            <Enquirycard key={enquiry.enquiry[2].title} title={enquiry.enquiry[2].title} subTitle={enquiry.enquiry[2].subTitle} src={enquiry.enquiry[2].image} linkName={enquiry.enquiry[2].linkName}></Enquirycard>
        </div>
        </div>
        </div>
    )
}