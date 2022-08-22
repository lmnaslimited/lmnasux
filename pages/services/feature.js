import Image from "next/image";
export default function Feature({feature_a, feature_b, feature_c}){
    return(
        <section className="my-40 text-th-text-medium bg-th-background-primary p-16">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
            <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              <div className="w-full rounded-lg shadow-lg">
              <Image
              width="1440" height="880"
                  src="/hero/hero-women-1440x880.gif"
                  alt=""
                />
              </div>
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-center items-center h-full">
                    <div className="px-6 py-12 md:px-12 text-th-text-light text-center">
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    >
                    </div>
                </div>
              </a>
            </div>
          </div>
    
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
            <div className="flex mb-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg">
                  <svg className="w-12 h-12 text-th-background-cta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1 text-xl">{feature_a}</p>
              </div>
            </div>
    
           
    
            <div className="flex mb-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg">
                  <svg className="w-12 h-12 text-th-background-cta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor"
                      d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1 text-xl">{feature_b}</p>
              </div>
            </div>
    
            <div className="flex">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg">
                  <svg className="w-12 h-12 text-th-background-cta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                    <path fill="currentColor"
                      d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1 text-xl">{feature_c}</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
}