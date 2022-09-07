import Image from "next/image";
import Link from "next/link";
export default function Company({}){
    return(
        
         <div className="sm:ml-20 lg:ml-10 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-th-text-light">Company</h2>
                    <Link href="/aboutus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">About</p></Link>
                    <Link href="/#products"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Product</p></Link>
                    <Link href="/#industries"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Industries</p></Link>
                    <Link href="/#services"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Services</p></Link>
                    <Link href="/contactus"><p className="text-base leading-4 mt-6 text-th-text-light cursor-pointer">Contact Us</p></Link>
                </div>
        
    )
}