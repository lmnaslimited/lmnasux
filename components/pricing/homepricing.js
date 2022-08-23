import React from "react";
import Container from "../container";
import Pricecard from "./pricecard";
export default function Homepricing({pricing}) {
    return (
      <Container>
            <div className=" my-48">
                <section className="bg-th-background-primary body-font overflow-hidden justify-center items-center">
  <div className=" ">
    <div className="flex flex-col md:flex-row justify-center">
    <Pricecard key={pricing[0].title} src={pricing[0].image} title={pricing[0].title} subTitle={pricing[0].subTitle} linkName={pricing[0].linkName} href={pricing[0].href} ></Pricecard>
    <Pricecard key={pricing[1].title} src={pricing[1].image} title={pricing[1].title} subTitle={pricing[1].subTitle} linkName={pricing[1].linkName} href={pricing[1].href}></Pricecard>
    <Pricecard key={pricing[2].title} src={pricing[2].image} title={pricing[2].title} subTitle={pricing[2].subTitle} linkName={pricing[2].linkName} href={pricing[2].href}></Pricecard>
     </div>
  </div>
</section>
</div>
                </Container>
      
    );
}
