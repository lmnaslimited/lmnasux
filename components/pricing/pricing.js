import React from "react";
import Container from "../container";
import Pricecard from "./pricecard";
export default function Pricing({pricing}) {
    return (
      <Container>
            <div className=" my-24">
                <section className="text-th-primary-dark body-font overflow-hidden justify-center items-center ">
  <div className=" ">
    <div className="flex flex-col md:flex-row justify-center">
    <Pricecard key={pricing[0].title} src={pricing[0].image} title={pricing[0].title} subTitle={pricing[0].subTitle} linkName={pricing[0].linkName} ></Pricecard>
    <Pricecard key={pricing[0].title} src={pricing[0].image} title={pricing[0].title} subTitle={pricing[0].subTitle} linkName={pricing[1].linkName}></Pricecard>
    <Pricecard key={pricing[0].title} src={pricing[0].image} title={pricing[0].title} subTitle={pricing[0].subTitle} linkName={pricing[2].linkName}></Pricecard>
     </div>
  </div>
</section>
               
                </div>
                </Container>
      
    );
}
