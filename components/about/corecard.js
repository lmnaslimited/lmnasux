import Image from "next/image";
export default function Corecard({ src, title, subTitle }) {
    return (
        <div className="col-span-1 w-full h-full border-2 p-24 shadow-xl rounded-lg bg-th-background">
            <h1 className="font-bold text-lg pb-1 text-th-text-dark">{title}</h1>
            <p className="text-gray-800 pt-3 font-normal text-center text-th-text-medium">{subTitle} </p>
        </div>
    )
}