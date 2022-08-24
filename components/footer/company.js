import Image from "next/image";
import Link from "next/link";
export default function Company({}){
    return(
        <>
         <div className="sm:ml-20 lg:ml-10 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-th-text-light">Company</h2>
                    <Link passHref="/aboutus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">About</p></Link>
                    <Link passHref="/#products"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Product</p></Link>
                    <Link passHref="/#industries"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Industries</p></Link>
                    <Link passHref="/#services"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Services</p></Link>
                    <Link passHref="/contactus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Contact Us</p></Link>
                </div>
        </>
    )
}