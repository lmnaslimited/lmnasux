import React from "react";
import Container from "../container";
import Pricecard from "./pricecard";
export default function Pricing(pricing) {
    return (
      <Container>
            <div className="bg-gradient-to-b from-blue-50 via-white to-white my-24">
                <section className="text-gray-600 body-font overflow-hidden justify-center items-center ">
  <div className=" ">
    <div className="flex flex-col md:flex-row justify-center">
    <Pricecard ></Pricecard>
    <Pricecard ></Pricecard>
    <Pricecard ></Pricecard> </div>
  </div>
</section>
               
                </div>
                </Container>
      
    );
}
