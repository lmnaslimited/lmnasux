import Image from "next/image";
import Link from "next/link";
export default function Industriescard({ src, title, subTitle, href, linkName }) {
    return (
        <div className="flex flex-row bg-th-background-secondary rounded-lg">
            <div className="">
                <Image alt="" width="160" height="160" src={src} />
            </div>
            <div className="flex flex-col p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-th-text-dark  ml-4">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-th-text-medium ml-4">
                        {subTitle}
                    </p>
                </div>
                <div>
            <a href={href}><button className="text-md font-normal shadow-lg text-th-text-light px-4 py-1 mt-2 ml-4 bg-th-background-cta">{linkName}</button></a>
                </div>
            </div>
        </div>
    )
}