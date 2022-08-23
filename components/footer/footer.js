import Container from "../container";
import Image from "next/image";
import Logo from "./logo";
import Company from "./company";
import Copyright from "./copyright";
import Contact from "./contact";
import Updates from "./updates";
const footer ={
    logo:[
    {meta:" Created by potrace 1.14, written by Peter Selinger 2001-2017",
    title:"LMNAs cloud solutions",
    instagram:"https://www.instagram.com/lmnaslimited/",
    facebook:"https://www.facebook.com/lmnaslimited",
    youtube:"https://www.youtube.com/channel/UCq5S8zxFv7e0bd23nq_hpWg",
    linkedin:"https://www.linkedin.com/company/lmnaslimited/"}
    ]

}
export default function Footer({}){
    return (
      <div>
        <div className="mx-0 bg-th-text-dark xl:px-14 lg:px-4 px-2 py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
             <Logo ></Logo>   
            <Company></Company>
            <Contact></Contact>
            <Updates></Updates>
            
                
            </div>
      </div>
      
      <Copyright></Copyright>
      </div>
    );
}
