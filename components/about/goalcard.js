import Image from "next/image";
export default function Goalcard({ src, title, subTitle }) {
    return (
        <div>
            <div className="xl:w-full sm:w-3/4 md:w-3/4 md:ml-12 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-3/4 lg:ml-14 xl:ml-1 border-2">
                <div className="rounded overflow-hidden shadow-md ">
                    <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                            <Image width="160" height="160" src={src} alt="" /></div>
                    </div>
                    <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center text-th-text-dark pb-1">{title}</h1>
                        <p className="text-center text-th-text-medium text-base pt-3 font-normal">{subTitle}</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}