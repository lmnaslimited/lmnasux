import Image from "next/image";
export default function Company({}){
    return(
        <>
         <div className="sm:ml-20 lg:ml-10 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-th-text-light">Company</h2>
                    <a href="/aboutus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">About</p></a>
                    <a href="/#products"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Product</p></a>
                    <a href="/#industries"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Industries</p></a>
                    <a href="/#services"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Services</p></a>
                    <a href="/contactus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Contact Us</p></a>
                </div>
        </>
    )
}