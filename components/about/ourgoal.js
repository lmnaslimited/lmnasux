import Image from "next/image";
import Missionvission from "./missionvission";
export default function Ourgoal({ourgoal}){
    return(
        <div className="w-full mt-44 ">
                <div className="container md:px-10 xl:px-28 ">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between md:justify-around sm:justify-around lg:justify-around">
                       <Missionvission key={ourgoal[0].title} src={ourgoal[0].image} title={ourgoal[0].title} subTitle={ourgoal[0].subTitle} ></Missionvission>
                       <Missionvission key={ourgoal[1].title} src={ourgoal[1].image} title={ourgoal[1].title} subTitle={ourgoal[1].subTitle} ></Missionvission>
                       </div>
                       </div>
                       </div>
    )
}