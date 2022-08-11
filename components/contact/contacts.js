import Contactcard from "./contactcard";
import Image from "next/image";
export default function contacts({contacts}){
            
    return(
      <section className="text-gray-600 body-font">
      <div className="py-24 xl:mx-auto flex flex-col md:flex-row">
      <div className="grid grid-cols-1 gap-24 shadow-md  mx-4 xl:mx-8 lg:px-40 space-y-20 md:space-y-0 p-12">
                      <div className="col-span-1">
                      <Contactcard key={contacts.contacts.title} title={contacts.contacts[0].title} src={contacts.contacts[0].image} linkName={contacts.contacts[0].linkName} ></Contactcard>
  
                      </div>
                      <div className="col-span-1">
                      <Contactcard key={contacts.contacts.title} title={contacts.contacts[1].title} src={contacts.contacts[1].image} linkName={contacts.contacts[1].linkName} ></Contactcard>
  
                      </div>
                      </div>
        <div className="lg:w-1/2 justify-center items-center md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-3xl mb-1 font-bold uppercase title-font">Get in Touch with us</h2>
          <div className="flex flex-row w-3/4">
            <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">FirstName</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 ml-6">
            <label for="name" className="leading-7 text-sm text-gray-600">LastName</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          </div>
          <div className="relative mb-4 w-3/4">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option></option>
              <option>ERP</option>
              <option>ECOMMERCE</option>
              <option>DIGITAL MARKETING</option>
              <option>FINANCE</option>
              <option>HR</option>
              <option>PAYROLL</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 flex items-center px-2 text-gray-700">Type your query
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
    <div className="relative mb-4 w-3/4">
            <label for="name" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input type="number" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 w-3/4">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-3/4">SUBMIT</button>
            </div>
      </div>
      
    </section>
    )
}