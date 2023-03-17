import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import logo from '../public/images/logo.png'

const Footer = ({ logout }) => {
    const router = useRouter()
    const [footer, setFooter] = useState(true)
    useEffect(() => {
        const hidden = ['/admin', '/admin/add', '/admin/allOrder', '/admin/allProducts', '/admin/imageUploader']
        if (hidden.includes(router.pathname)) {
            setFooter(false)
        }
    }, [router.query])
    
    
    return (
        <div>
            <footer className={`text-gray-600 bg-gray-800 body-font sm:mb-0 mb-24 ${footer ? '' : 'hidden'}`}>
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <Link href={'/'} className="flex title-font items-center md:justify-start justify-center text-red-500 font-bold">
                            <Image src={logo} alt="" className='w-48' width={180} height={70} />
                        </Link>
                        <p className="mt-2 text-md py-4 text-white ">ShreeVastra provides comfort and fashionable + Reasonable clothes to the Community . Premium tshirts , hoodies and apparals . </p>

                    </div>

                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font text-red-500 font-bold tracking-widest text-xl mb-3">SHOP</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/tshirts'} className="text-white hover:text-gray-300 text-lg cursor-pointer">T-Shirts</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/hoodies'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Hoodies</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/stickers'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Stickers</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/mugs'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Mugs</Link>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font text-red-500 font-bold tracking-widest text-xl mb-3">ACCOUNT</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/signup'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Create an new Account</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/login'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Login </Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/forgetPass'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Forget Password</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={''} onClick={logout} className="text-white hover:text-gray-300 text-lg cursor-pointer">Logout</Link>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font text-red-500 font-bold tracking-widest text-xl mb-3 uppercase">Get to Know Us</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/about'} className="text-white hover:text-gray-300 text-lg cursor-pointer">About</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/services'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Services</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/testimonals'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Testimonals</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/contact'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Contact</Link>
                                </li>

                            </nav>
                        </div>


                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font text-red-500 font-bold tracking-widest text-xl mb-3">CART</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/orders'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Cart</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/order'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Orders and payment</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/account'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Save your Details</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/checkout'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Payment</Link>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font text-red-500 font-bold tracking-widest text-xl mb-3">Policy</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/privacy'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Privacy Policy</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/terms'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Terms and Conditions</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/returnPage'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Return Centre</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/help'} className="text-white hover:text-gray-300 text-lg cursor-pointer">Help</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Buy fast from anywhere</h5>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with ShreeVastra Store on iOS & Android. Download the app today.</p>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className="cursor-pointer w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Download on the</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Get in on</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-700">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-100 text-sm text-center sm:text-left">© 2023 ShreeVastra —
                            <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank">@ShreeVastra | All Rights Reserved .</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href='' className="text-gray-100">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="cursor-pointer w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href='' className="ml-3 text-gray-100">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="cursor-pointer w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link href='' className="ml-3 text-gray-100">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="cursor-pointer w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link href='' className="ml-3 text-gray-100">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="cursor-pointer w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer