import { useRouter } from 'next/router';
import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const router = useRouter()
  return (
    <section className="text-red-600 body-font relative mt-12">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-red-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-red-900 tracking-widest text-xs">HEADQUARTER&apos;S ADDRESS</h2>
              <p className="mt-1">INDRAMANI NAGAR , GWALIOR (M.P), INDIA </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-red-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-red-500 leading-relaxed">shreevastra2023@email.com</a>
              <h2 className="title-font font-semibold text-red-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+91 98765-43210</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-red-100 items-center justify-center flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-red-900 text-xl mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-red-700 text-center">SHARE YOUR THOUGHTS AND REVIEW OUR STORE FOR IMPROVEMENT !</p>
          <div className="relative md:w-2/3 w-full mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-red-700">Name</label>
            <input type="text" id="name" name="name" placeholder='Your Full Name..' className="placeholder:text-red-800 w-full bg-red-300 rounded text-lg outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
          <div className="relative md:w-2/3 w-full mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-red-700">Email</label>
            <input type="email" id="email" name="email" placeholder='xyz@gmail.com..' className="placeholder:text-red-800 w-full bg-red-300 rounded text-lg outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-red-700">Reviews about the store</label>
            <textarea id="message" name="message" placeholder='write your reviews about the store and services ...' className="placeholder:text-red-800 w-full bg-red-300 rounded h-28 text-lg outline-none text-red-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
          </div>
          <button onClick={()=>{toast.success("Your Review has been Submitted."), router.push('/')}} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">SUBMIT REVIEW</button>
          
        </div>
      </div>
    </section>
  )
}

export default Contact