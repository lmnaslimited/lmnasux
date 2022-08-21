import Image from "next/image";
import Link from "next/link";
export default function Aboutcard({ src, title, subTitle }) {
    return (
        <div className="grid grid-cols-1 gap-8 my-16 ">

            <div className="flex flex-col items-center rounded-lg shadow-md md:flex-row justify-center lg:ml-32 xl:ml-36 2xl:ml-44 lg:w-3/4">
                <div className="md:object-cover w-3/4 h-3/4 rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg ">
                    <Image width="160" height="160" src={src} alt="" />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal bg-th-background md:mx-4 my-4">
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-th-text-dark">{title}</h1>
                    <p className="mb-3 text-lg font-normal text-th-text-medium">{subTitle}</p>
                </div>
            </div>

        </div>
    )
}