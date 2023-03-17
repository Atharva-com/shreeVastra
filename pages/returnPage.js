import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import Link from 'next/link'

const ReturnPage = ({user}) => {
    const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('myUser')) {
      router.push('/')
    }
  }, [])

  return (
    <section className="py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-10 mb-2 text-red-500 dark:text-red300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Return Items You Ordered </h5>
            </div>
            <p className="mb-3 font-normal text-red-500 dark:text-red-400">You can return many items sold on Amazon.in. When you return an item, you may see different return options depending on the seller, item, or reason for return.</p>
            <Link href={'/order'} className="inline-flex items-center text-blue-600 hover:underline">

              <svg className="w-6 h-6 ml-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
          </div>


          <div className="max-w-sm md:h-[17rem] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-10 mb-2 text-red-500 dark:text-red300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Manage Returns</h5>
            </div>
            <p className="mb-3 font-normal text-red-500 dark:text-red-400">Print return labels and check the status of your recent returns.</p>
            <Link href={'/setAccount'} className="inline-flex items-center mt-12 text-blue-600 hover:underline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
          </div>

        </div>
      </div>

      <div className="container mx-auto p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-red-500 dark:text-red-400">

                
                <h2 id="accordion-flush-heading-1">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-red-500 border-b bredr-gray-200 dark:border-red-700 dark:text-red-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span>What can I return ?</span>
                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 font-light border-b border-red-200 dark:border-red-700">
                    <p className="mb-2 text-red-500 dark:text-red-400">You may request returns for most items you buy from Amazon.in, except those that are explicitly identified as not returnable. For details of time frame for requesting returns please refer to our returns policy.</p>
                    <p className="text-red-500 dark:text-red-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">return</a></p>
                    </div>
                </div>


                <h2 id="accordion-flush-heading-2">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-red-500 border-b dark:border-red-700 dark:text-red-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span>When will I get my refund ?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-2" className="" aria-labelledby="accordion-flush-heading-2">
                    <div className="py-5 font-light border-b border-gray-200 dark:border-red-700">
                    <p className="mb-2 text-red-500 dark:text-red-400">Refunds back to Credit Cards, Debit Cards, Net Banking or Bank Accounts (NEFT) are fully refunded within 3-5 days after we receive and process your return. Refunds in form of cheques can take 10-12 business days to arrive via post. Refund in the form of Gift Cards can take 1 business day.</p>
                    <p className="text-red-500 dark:text-red-400">Learn more About <a href="" className="text-blue-600 dark:text-blue-500 hover:underline">Refund Policy</a></p>
                    </div>
                </div>


                <h2 id="accordion-flush-heading-3">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-red-500 border-b bredr-gray-200 dark:border-red-700 dark:text-red-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span>Does ShreeVastra do replacements ?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-3" className="" aria-labelledby="accordion-flush-heading-3">
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-red-500 dark:text-red-400">ShreeVastra offers free replacement for FBA orders including Kindle. Follow the steps in the Return Center to request a replacement for your FBA order.</p>
                    
                    <p className="mb-2 text-red-500 dark:text-red-400">Learn more about<a href="" className="text-blue-600 dark:text-blue-500 hover:underline">Replacement Policy</a></p>
                    
                    </div>
                </div>
                </div>
        </div>
    </section>
  )
}

export default ReturnPage