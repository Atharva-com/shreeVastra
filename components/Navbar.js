import React, { useRef, useState, useEffect } from 'react'
import logo from '../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart, AiFillCloseCircle, AiFillHome, AiOutlineSearch, AiFillContacts } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdAccountBox, MdAccountCircle } from 'react-icons/md'
import { FaTshirt } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const [sidebar, setSidebar] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [navbar, setNavbar] = useState(true)

    const router = useRouter()
    useEffect(() => {
        Object.keys(cart).length !== 0 && setSidebar(true)
        const exempted = ['/checkout', '/login', '/signup', '/forgetPass', '/account', '/about', '/orders', '/contact', '/tshirts', '/order', '/setAccount', '/404', '/services', '/testimonals']
        if (exempted.includes(router.pathname)) {
            setSidebar(false)
        }
        const hidden = ['/admin', '/admin/add','/admin/allOrder','/admin/allProducts', '/admin/imageUploader']
        if (hidden.includes(router.pathname)) {
            setNavbar(false)
        }
    }, [router.query])

    const toggleCart = () => {
        setSidebar(!sidebar)

    }


    const ref = useRef()
    return (
        <div className={`container mx-auto fixed top-0 z-50 flex flex-wrap pt-4 md:p-5 flex-row sm:justify-between w-full items-center justify-center shadow-sm bg-gray-800 shadow-slate-50 ${navbar ? '' : 'hidden'}`}>
            <AiOutlineShoppingCart onClick={toggleCart} className='text-4xl hidden cursor-pointer text-red-600 sm:block relative' />
            <div ref={ref} className={`overflow-y-scroll h-[100vh] flex absolute z-50 top-0 transition-all ${sidebar ? 'left-0' : '-left-96'}`}>
                <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-72">
                    <div className="space-y-3 h-[100vh]">

                        <div className="flex items-center justify-between text-center">
                            <AiFillCloseCircle onClick={toggleCart} className="cursor-pointer text-2xl text-red-500" />
                            <h2 className="text-xl font-bold text-red-500 uppercase tracking-wide pr-8">Shopping Cart</h2>
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button
                                    type="submit"
                                    className="p-2 focus:outline-none focus:ring"
                                >
                                    <HiOutlineSearch className="text-red-900" />
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search..."
                                className="w-full py-2 pl-10 text-sm rounded-md text-red-900 font-semibold bg-red-100 focus:outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <ol className="list-decimal text-red-500 font-semibold pt-2 pb-4 pl-3 space-y-1 text-sm">
                                {Object.keys(cart).length == 0 && <div className='mt-4 text-red-500 font-semibold '>Your Cart is Empty ! Please Add Items To Checkout .</div>}
                                {Object.keys(cart).map((k) => {
                                    return (
                                        <li key={k}>
                                            <div className="item flex my-5">
                                                <div className='w-2/3 font-semibold text-lg text-red-500'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                                <div className='flex items-center justify-center font-semibold w-1/3 text-lg'>
                                                    <AiFillMinusCircle onClick={() => removeFromCart(k, 1, cart[k].Price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-red-500 text-lg' />
                                                    <span className='mx-2 text-lg text-red-400 '>{cart[k].qty}</span>
                                                    <AiFillPlusCircle onClick={() => addToCart(k, 1, cart[k].Price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-red-500 text-lg' />
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ol>

                            <div className='w-full mt-2'>
                                <div className="flex justify-between text-red-900 font-semibold bg-red-400 border-0 py-2 px-3 mx-2 focus:outline-none rounded text-md"><span> SUBTOTAL ({Object.keys(cart).length} items) :</span> ₹{subTotal} </div>
                            </div>
                            <div className="py-2 px-4 w-full mt-3">
                                <Link href={'/orders'} ><button disabled={Object.keys(cart).length == 0 || !user} className="disabled:bg-red-100 disabled:text-red-200 flex mx-auto text-red-900 font-bold bg-red-400 border-0 py-2 px-4 focus:outline-none hover:bg-red-300 hover:text-red-700 rounded text-md">CHECKOUT</button></Link>
                            </div>

                            <div className="py-2 px-4 w-full">
                                <button onClick={clearCart} disabled={Object.keys(cart).length == 0 || !user} className="disabled:bg-red-100 disabled:text-red-200 flex mx-auto text-red-900 font-bold bg-red-400 border-0 py-2 px-3 focus:outline-none hover:bg-red-300 hover:text-red-700 rounded text-md">CLEAR CART</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </div> */}

            <nav className="sm:flex flex-wrap hidden text-red-500 items-center justify-center text-base">
                <Link className="mr-3 font-bold tracking-wider md:my-0 mt-2 hover:text-red-200 cursor-pointer" href={'/'} >HOME</Link>
                <Link className="mr-3 font-bold tracking-wider md:my-0 mt-2 hover:text-red-200 cursor-pointer" href={'/about'} >ABOUT</Link>
                <Link className="mr-3 font-bold tracking-wider md:my-0 mt-2 hover:text-red-200 cursor-pointer" href={'/tshirts'} >T-SHIRTS</Link>
                {/* <Link className="mr-3 font-bold tracking-wider md:my-0 mt-2 text-red-500 hover:text-red-200 cursor-pointer" href={'/stickers'} >STICKERS</Link> */}
                <Link className="mr-3 font-bold tracking-wider md:my-0 mt-2 hover:text-red-200 cursor-pointer" href={'/orders'} >CART</Link>
                <Link className="font-bold tracking-wider md:my-0 mt-2 hover:text-red-200 cursor-pointer" href={'/contact'} >CONTACT</Link>
            </nav>


            <nav className="flex flex-wrap w-full fixed bottom-0 sm:hidden p-3 text-red-500 items-center justify-around text-base bg-inherit">
                <Link className="mr-3 font-bold tracking-wider mt-2 hover:text-red-200 cursor-pointer" href={'/'} ><AiFillHome className='text-white text-4xl' /></Link>
                <Link className="mr-3 font-bold tracking-wider mt-2 hover:text-red-200 cursor-pointer" href={'/tshirts'} ><FaTshirt className='text-white text-4xl' /></Link>
                <div className="mr-3 font-bold tracking-wider mt-2 hover:text-red-200 cursor-pointer"><span className="absolute right-[9.5rem] top-[0.5rem] rounded-full bg-red-600 w-8 h-8 top right p-0 m-0 text-white font-mono text-[1.5rem]  leading-tight text-center">{Object.keys(cart).length}
                </span><AiOutlineShoppingCart onClick={toggleCart} className='text-white text-6xl' /></div>
                {user.value && <div className="mr-3 font-bold tracking-wider mt-2 hover:text-red-200 cursor-pointer" href={''} ><MdAccountBox onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='cursor-pointer text-white text-4xl' /></div>}
                <Link className="font-bold tracking-wider mt-2 hover:text-red-200 cursor-pointer" href={'/contact'} ><AiFillContacts className='text-white text-4xl' /></Link>
            </nav>


            <Link href={'/'} className="flex order-first lg:order-none title-font items-center text-red-200 text-2xl font-bold justify-center mb-4 md:mb-0">
                {/* <Image src={logo} alt="" className='w-48 cursor-pointer' width={180} height={70} /> */}<FaTshirt className='text-red-200 text-3xl font-sans mr-2 font-bold'/> SHREEVASTRA.COM 
            </Link>

            <form className='w-[44%] hidden lg:inline-block'>
                <div className="flex">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button onMouseOver={() => { setDropdown1(true) }} onMouseLeave={() => { setDropdown1(false) }} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                    {dropdown1 && <div id="dropdown" onMouseOver={() => { setDropdown1(true) }} onMouseLeave={() => { setDropdown1(false) }} className="z-10 absolute top-16 left-[50%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                        </ul>
                    </div>}
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-md font-semibold text-red-500 rounded-r-lg border-l-gray-50 border-l-2 dark:bg-gray-700 dark:border-l-gray-700 dark:placeholder-gray-400 focus:outline-none" placeholder="Search Mockups, Logos, Design Templates..." required />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-md font-bold text-red-800 bg-red-400 rounded-r-lg hover:bg-red-800 hover:text-red-400 focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only bg-red-500">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="inline-block z-50 lg:justify-end text-gray-800">
                <div className='flex justify-end cursor-pointer z-50'>
                    {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute lg:right-12 right-0 bg-gray-800 lg:top-7 top-[32rem] rounded-md px-5 z-50 w-36">
                        <ul>
                            <div className='flex items-center justify-center'><MdAccountCircle className='text-red-500 my-2 text-4xl' /></div>
                            <Link href={'/account'}><li className="py-1 cursor-pointer font-semibold text-red-300 text-md hover:text-red-600">My Account</li></Link>
                            <Link href={'/orders'}><li className="py-1 cursor-pointer font-semibold text-red-300 text-md hover:text-red-600">My Orders</li></Link>
                            <li onClick={logout} className="py-1 cursor-pointer font-semibold text-red-300 text-md hover:text-red-600">Logout</li>
                        </ul>
                    </div>}
                    {user.value && <MdAccountBox onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='cursor-pointer hidden md:block text-red-700 md:my-0 my-3 text-4xl' />}

                    {!user.value && <Link href={'/login'}>
                        <button className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 hover:text-gray-300 tracking-wider font-bold rounded text-base mt-4 md:mt-0">LOGIN
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 cursor-pointer" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar