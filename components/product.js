import Image from "next/image"
import Container from "./container"
import Cardtype from "./cardtype"
export default function products({ products }) {
    return ( 
        <Container>
            <section id="product" className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white my-24 ">
                <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
                    <h1 className="text-2xl text-center md:text-3xl font-bold md:font-sans md:pt-0 md:mt-12 lg:ml-12 text-center text-gray-800 antialiased uppercase">products</h1>
                </div>
                <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
                    <div className="lg:row-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:bg-pink-50 sr-only lg:not-sr-only">
                        <div className="container justify-center px-4">
                            <h1 className="text-3xl font-bold md:font-sans text-center text-gray-800 antialiased uppercase mt-28">{products.title}</h1>
                            <p className="leading-relaxed text-md lg:text-center text-gray-800 lg:mt-4">{products.subTitle}</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:border-b-2 ">
                        <div className="md:w-1/2 ">
                        
                            <Cardtype key={products.products[0].title} src={products.products[0].image} title={products.products[0].title} subTitle={products.products[0].subTitle} />
                        </div>
                    </div>
                  <div className="col-span-1 lg:col-start-2 md:border-r-2">
                         <Cardtype key={products.products[1].title} src={products.products[1].image} title={products.products[1].title} subTitle={products.products[1].subTitle} />
                    </div>
                    <div className=" col-span-1 lg:col-start-3">
                            <Cardtype key={products.products[2].title} src={products.products[2].image} title={products.products[2].title} subTitle={products.products[2].subTitle} />
                      
                    </div>
                </div>
            </section>
        </Container>
    )
}