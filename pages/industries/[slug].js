import { getAllIndustriesPageData, getIndustryPageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Whylmnas from "./whylmnas";
export default function Industries({industry, preview})
{
    return(
      <>
      <Layout>
      <div className="xl:mx-auto xl:container md:my-0">
                <h1 className="xl:text-5xl md:text-4xl text-xl font-bold leading-tight text-center text-gray-800 sm:mb-0 pt-6">
                    {industry.hero_title}
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                  <div className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden">
                    <Image width="8192" height="3896" src={industry.hero_image} alt="large-image"/>
                    </div>
                    <div className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0">
                    <Image width="8192" height="3896" src="/manufacturing/manufacturing-hero-8192x3896.jpg" alt="large-image"/>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">{industry.hero_point_a}</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">{industry.hero_point_b}</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">{industry.hero_point_c}</p>
                    </div>
                </div>
            </div>
        <Container>
        <div className="md:mx-auto md:container px-4 text-gray-800">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-xl lg:text-3xl font-bold text-center">{industry.title}</h1>
                                    <h2 className="text-lg lg:text-xl text-center lg:leading-7  py-4 md:py-8">{industry.subtitle}</h2>
                                    <div className="flex items-center justify-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-center text-lg lg:text-xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative mb-32 md:mb-0 md:h-96 flex items-end justify-center">
                            <div className="absolute w-full h-full rounded-md border-4 shadow-lg">
                                <Image width="1500" height="1000" src={industry.image_a} alt="" />
                            </div>   
                                <div className="relative z-10 rounded p-6 w-10/12 -mb-20 -ml-12 ">
                                    <div className="flex items-center w-full sm:w-full mb-8 ">
                                        <div className="flex items-center md:h-32">
                                        <div className="absolute w-full h-full rounded-md border-4 shadow-lg hidden md:block">
                                <Image width="1000" height="600" src={industry.image_b} alt="" />
                            </div>  
                                        </div>
                                        <div>
                                            </div>
                                    </div>
                                    <div className="relative mb-3">
                                        </div>
                                          </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h1 className="text-center font-bold text-xl lg:text-3xl">{industry.title}</h1>
                                    <h2 className="text-center text-lg lg:text-xl leading-7 py-8">{industry.subtitle}</h2>
                                    <div className="justify-center flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative mb-32 md:mb-0 md:h-96 flex items-end justify-center">
                            <div className="absolute w-full h-full rounded-md border-4 shadow-lg">
                                <Image width="1500" height="1000" src={industry.image_a} alt="" />
                            </div>   
                                <div className="relative z-10 rounded p-6 w-10/12 -mb-20 -ml-12 ">
                                    <div className="flex items-center w-full sm:w-full mb-8 ">
                                        <div className="flex items-center md:h-32">
                                        <div className="absolute w-full h-full rounded-md border-4 shadow-lg hidden md:block">
                                <Image width="1000" height="600" src={industry.image_b} alt="" />
                            </div>  
                                        </div>
                                        <div>
                                          </div>
                                          </div>
                                          </div>
                                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:py-12 py-8 my-12">
            <div className="lg:flex items-center ">
                <div className="lg:w-3/4 ">
                    <h1 className="text-center md:px-6 text-xl uppercase lg:text-3xl font-bold leading-9 text-gray-800">{industry.title}</h1>
                    <p className="text-lg md:px-6 lg:text-xl text-center lg:leading-7  py-4 md:py-8">{industry.subtitle}</p>
                    <div className="flex items-center justify-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-center text-lg lg:text-xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                </div>
                <div className="lg:w-3/4 lg:mt-0 mt-8">
                    <div className="w-full h-full">
                      <div  className="w-full sm:block hidden border-4 shadow-lg">
                      <Image width="1500" height="1000" src={industry.image_a} alt="" />
                      </div>
                      <div  className="sm:hidden block w-full border-4 shadow-lg">
                      <Image width="1500" height="1000" src={industry.image_a} alt="" />
                      </div>
                      </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                     <div className="border-4 shadow-lg md:block hidden">
                     <Image width="1500" height="1000" src={industry.image_b} alt="" />
                     </div>
                     <div className="border-4 shadow-lg md:block hidden">
                      <Image width="1500" height="1000" src={industry.image_b} alt="" />
                      </div>
                      </div>
                </div>
            </div>
        </div>
        <div className="md:mx-auto md:container px-4 text-gray-800">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-xl lg:text-3xl font-bold text-center">{industry.title}</h1>
                                    <h2 className="text-lg lg:text-xl text-center lg:leading-7  py-4 md:py-8">{industry.subtitle}</h2>
                                    <div className="flex items-center justify-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-center text-lg lg:text-xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative mb-32 md:mb-0 md:h-96 flex items-end justify-center">
                            <div className="absolute w-full h-full rounded-md border-4 shadow-lg">
                                <Image width="1500" height="1000" src={industry.image_a} alt="" />
                            </div>   
                                <div className="relative z-10 rounded p-6 w-10/12 -mb-20 -ml-12 ">
                                    <div className="flex items-center w-full sm:w-full mb-8 ">
                                        <div className="flex items-center md:h-32">
                                        <div className="absolute w-full h-full rounded-md border-4 shadow-lg hidden md:block">
                                <Image width="1000" height="600" src={industry.image_b} alt="" />
                            </div>  
                                        </div>
                                        <div>
                                            </div>
                                    </div>
                                    <div className="relative mb-3">
                                        </div>
                                          </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h1 className="text-center font-bold text-xl lg:text-3xl">{industry.title}</h1>
                                    <h2 className="text-center text-lg lg:text-xl leading-7 py-8">{industry.subtitle}</h2>
                                    <div className="justify-center flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative mb-32 md:mb-0 md:h-96 flex items-end justify-center">
                            <div className="absolute w-full h-full rounded-md border-4 shadow-lg">
                                <Image width="1500" height="1000" src={industry.image_a} alt="" />
                            </div>   
                                <div className="relative z-10 rounded p-6 w-10/12 -mb-20 -ml-12 ">
                                    <div className="flex items-center w-full sm:w-full mb-8 ">
                                        <div className="flex items-center md:h-32">
                                        <div className="absolute w-full h-full rounded-md border-4 shadow-lg hidden md:block">
                                <Image width="1000" height="600" src={industry.image_b} alt="" />
                            </div>  
                                        </div>
                                        <div>
                                          </div>
                                          </div>
                                          </div>
                                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:py-12 py-8 my-12">
            <div className="lg:flex items-center ">
                <div className="lg:w-3/4 ">
                    <h1 className="text-center md:px-6 text-xl uppercase lg:text-3xl font-bold leading-9 text-gray-800">{industry.title}</h1>
                    <p className="text-lg md:px-6 lg:text-xl text-center lg:leading-7  py-4 md:py-8">{industry.subtitle}</p>
                    <div className="flex items-center justify-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-center text-lg lg:text-xl font-semibold underline text-indigo-700">{industry.linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                </div>
                <div className="lg:w-3/4 lg:mt-0 mt-8">
                    <div className="w-full h-full">
                      <div  className="w-full sm:block hidden border-4 shadow-lg">
                      <Image width="1500" height="1000" src={industry.image_a} alt="" />
                      </div>
                      <div  className="sm:hidden block w-full border-4 shadow-lg">
                      <Image width="1500" height="1000" src={industry.image_a} alt="" />
                      </div>
                      </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                     <div className="border-4 shadow-lg md:block hidden">
                     <Image width="1500" height="1000" src={industry.image_b} alt="" />
                     </div>
                     <div className="border-4 shadow-lg md:block hidden">
                      <Image width="1500" height="1000" src={industry.image_b} alt="" />
                      </div>
                      </div>
                </div>
            </div>
        </div>
    </Container>
      </Layout>

    </>
    )
}
export async function getStaticProps({ params, preview = null }) {
  const data= await getIndustryPageData(params.slug)
  return {
    props: {
      preview,
     industry: {
        ...data
      },
    },
  }
}
export async function getStaticPaths() {
 const  industries = await getAllIndustriesPageData()
 const paths = industries.map((industry) => ({
    params: { slug: industry.slug },
  }))
  return {
    paths: industries?.map((industry) => `/industries/${industry.slug}`) || [],
    paths,
    fallback: false,
  }
    
}