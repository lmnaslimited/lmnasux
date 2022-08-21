import Image from "next/image"
export default function Heroproduct({title, subTitle, src}){
    return(
<div className="px-6 py-12 lg:my-12 md:px-12 text-center lg:text-left">
<div className="container mx-auto xl:px-32">
  <div className="grid lg:grid-cols-2 gap-12 flex items-center">
    <div className="mt-12 lg:mt-0">
      <h1 className="text-5xl md:text-6xl xl:text-7xl text-th-text-dark font-bold tracking-tight mb-12 text-center">{title} <br /><span className="text-th-background-cta">{subTitle}</span></h1>
     </div>
    <div className="mb-12 lg:mb-0 w-full rounded-lg shadow-xl">
      <Image width="3000" height="2000"
        src={src}
        className=""
        alt=""
      />
    </div>
  </div>
</div>
</div>
    )
}