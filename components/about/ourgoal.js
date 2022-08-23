import Image from "next/image";
import Goalcard from "./goalcard";
export default function Ourgoal({abouts }) {
    return (
        <div className="w-full mt-44 ">
            <div className="container md:px-10 xl:px-28">
                <div className="lg:flex md:flex sm:flex items-center xl:justify-between md:justify-around sm:justify-around lg:justify-around">
                    <Goalcard key={abouts.ourgoal[0].title} src={abouts.ourgoal[0].image} title={abouts.ourgoal[0].title} subTitle={abouts.ourgoal[0].subTitle} ></Goalcard>
                    <Goalcard key={abouts.ourgoal[1].title} src={abouts.ourgoal[1].image} title={abouts.ourgoal[1].title} subTitle={abouts.ourgoal[1].subTitle} ></Goalcard>
                </div>
            </div>
        </div>
    )
}