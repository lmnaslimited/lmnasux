import Contactcard from "./contactcard";
import Image from "next/image";
export default function contacts({contacts}){
            
    return(
      <section className=" body-font">
      <div className="py-24 xl:mx-auto flex flex-col md:flex-row">
      <div className="grid grid-cols-1 gap-24 shadow-md  mx-4 xl:mx-8 lg:px-40 md:space-y-20 md:space-y-0 p-12">
                      <div className="col-span-1">
                      <Contactcard key={contacts.contacts.title} title={contacts.contacts[0].title} src={contacts.contacts[0].image} linkName={contacts.contacts[0].linkName} href={contacts.contacts[0].href} ></Contactcard>
  
                      </div>
                      <div className="col-span-1">
                      <Contactcard key={contacts.contacts.title} title={contacts.contacts[1].title} src={contacts.contacts[1].image} linkName={contacts.contacts[1].linkName} href={contacts.contacts[1].href} ></Contactcard>
  
                      </div>
                      </div>
        <div className="lg:w-1/2 justify-center items-center md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full py-6 md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-xl md:text-3xl mb-1 font-bold uppercase title-font">{contacts.title}</h2>
          <div className="flex flex-row w-3/4">
            <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">{contacts.f_Name}</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 ml-6">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">{contacts.l_Name}</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          </div>
          <div className="relative mb-4 w-3/4">
            <select className="block appearance-none w-full bg-th-background-primary border text-th-text-dark py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-th-background-secondary" id="grid-state">
            <option></option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 flex items-center px-2 text-th-text-dark">{contacts.query}
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
    <div className="relative mb-4 w-3/4">
            <label htmlFor="name" className="leading-7 text-sm text-th-text-dark">{contacts.number}</label>
            <input type="number" id="name" name="name" className="w-full bg-th-background-secondary rounded border  text-base outline-none text-th-text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 w-3/4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">{contacts.Message}</label>
            <textarea id="message" name="message" className="w-full bg-th-background-secondary rounded border  focus:ring-2  h-32 text-base outline-none text-th-text-dark py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-th-text-light border-0 py-2 px-6 focus:outline-none bg-th-background-cta rounded text-lg w-3/4">{contacts.linkName}</button>
            </div>
      </div>
      
    </section>
    )
}