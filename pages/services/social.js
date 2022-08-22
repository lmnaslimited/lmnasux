import Image from "next/image"
export default function Social({title, subTitle, highlight}){
    return(
<div className="mb-12 lg:mb-0">
        <div className="rounded-lg shadow-lg h-full block bg-th-background-secondary">
          <div className="flex justify-center">
            <div className="p-4 bg-th-background-cta rounded-full shadow-lg inline-block -mt-8">
              <svg
                className="w-7 h-7 text-th-text-light"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl text-th-background-cta font-bold text-blue-600 mb-4">{highlight}</h3>
            <h5 className="text-lg text-th-text-dark font-medium mb-4">{title}</h5>
            <p className="text-th-text-medium">
             {subTitle}
            </p>
          </div>
        </div>
      </div>
    )
}
      

     