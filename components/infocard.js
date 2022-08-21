import Image from "next/image";
import Link from "next/link";
export default function Infocard({ src, title, subTitle, href, linkName }) {
    return (
        <div className="flex flex-row m-2 rounded-lg md:shadow-xl bg-th-background-secondary">
            <div className=" mt-6 ">
                <Image alt="" width="160" height="160" src={src} />
            </div>
            <div className="flex flex-col mt-6 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg text-th-text-dark font-bold font-sans  ml-4">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-md text-th-text-medium font-normal font-sans  ml-4">
                        {subTitle}
                    </p>
                </div>
                <div>
               <a href={href}><button className="text-md font-normal shadow-lg px-4 py-1 mt-2 ml-4 text-th-text-light bg-th-background-cta">{linkName}</button></a>
                </div>
            </div>
        </div>
    )
}