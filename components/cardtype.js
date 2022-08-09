import Image from "next/image";
import Link from "next/link";
export default function Cardtype({ src, title, subTitle, href }) {
    return (
        <div className="flex flex-row ">
            <div className=" mt-10 ">
                <Image alt="" width="160" height="160" src={src} />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ml-4">
                        {subTitle}
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
                </div>
            </div>
        </div>
    )
}