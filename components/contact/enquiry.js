import Enquirycard from "./enquirycard";
import Image from "next/image";
export default function Enquiry({contacts}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 my-24">
        <div className="col-span-1">
        <div>
            <Enquirycard key={contacts.enquiry[0].title} title={contacts.enquiry[0].title} subTitle={contacts.enquiry[0].subTitle} src={contacts.enquiry[0].image} linkName={contacts.enquiry[0].linkName}></Enquirycard>
        </div>
        </div>
        <div className="col-span-1 border-l-2 ">
        <div>
            <Enquirycard key={contacts.enquiry[1].title} title={contacts.enquiry[1].title} subTitle={contacts.enquiry[1].subTitle} src={contacts.enquiry[1].image} linkName={contacts.enquiry[1].linkName}></Enquirycard>
        </div>
        </div>
        <div className="col-span-1 border-l-2">
        <div>
            <Enquirycard key={contacts.enquiry[2].title} title={contacts.enquiry[2].title} subTitle={contacts.enquiry[2].subTitle} src={contacts.enquiry[2].image} linkName={contacts.enquiry[2].linkName}></Enquirycard>
        </div>
        </div>
        </div>
    )
}