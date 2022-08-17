import React from "react";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Image from "next/image";
function Index({title, src, card_title, subTitle}) {
    return (
<section className="mb-32 text-gray-800 text-center">
  <h2 className="text-3xl font-bold mb-12 uppercase">{title}</h2>
  <p className="text-xl xl:px-52 mb-32 text-center">{subTitle}</p>

  <div className="grid  md:grid-cols-3 mx-12 gap-12 mt-40">
    <div className="mb-24 md:mb-0">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    <div className="mb-24 md:mb-0">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    <div className="mb-24 md:mb-0">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    <div className="mb-24 md:mb-0 mt-32">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    <div className="mb-24 md:mb-0 mt-32">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    <div className="mb-24 md:mb-0 mt-32">
      <div className=" w-full h-full border-2">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-20 w-40 h-40 lg:w-1/2 lg:h-1/2 bg-blue-50 rounded-full mx-auto shadow-lg">
            <Image width="640" height="640" src={src} className="" alt="" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-4">{card_title}</h5>
          <p className="mb-6"></p>
          
        </div>
      </div>
    </div>
    
  </div>
</section>
    );
}

export default Index;
