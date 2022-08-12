import Image from "next/image";
import Link from "next/link";
export default function Industriescard({ src, title, subTitle, href, linkName }) {
    return (
        <div className="flex flex-row text-th-primary-dark">
            <div className="border-2 shadow-xl">
                <Image alt="" width="160" height="160" src={src} />
            </div>
            <div className="flex flex-col p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans  ml-4">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans  ml-4">
                        {subTitle}
                    </p>
                </div>
                <div>
               <a href={href}><button className="text-md border-2 text-th-primary-medium px-4 py-1 mt-2 ml-4">{linkName}</button></a>
                </div>
            </div>
        </div>
    )
}