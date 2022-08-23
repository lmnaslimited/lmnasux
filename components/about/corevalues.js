import Image from "next/image";
import Link from "next/link";
import Corecard from "./corecard";
export default function Corevalues({abouts }) {
    return (
        <div>
            <div className="flex flex-col border-2 py-8 my-24">
                <h1 className="font-bold text-th-text-dark text-3xl text-center pb-1">{abouts.corevalues.title}</h1>
                <p className="text-center text-th-text-medium text-base pt-3 font-normal px-4 md:px-20 xl:px-52">
                    {abouts.corevalues.subTitle}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mx-12 xl:mx-0 mb-24 md:mb-36">
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
                <div className="col-span-1">
                    <Corecard key={abouts.corevalues.corevalues.title} title={abouts.corevalues.corevalues.title} subTitle={abouts.corevalues.corevalues.subTitle} ></Corecard>
                </div>
            </div>
        </div>
    )
}