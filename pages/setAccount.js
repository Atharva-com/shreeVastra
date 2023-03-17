import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { toast } from 'react-toastify';

const SetAccount = () => {

    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [colony, setColony] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')
    const [currPassword, setCurrPassword] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [user, setUser] = useState({ value: null })


    useEffect(() => {
        let myUser = JSON.parse(localStorage.getItem('myUser'))
        if (!myUser) {
            router.push('/')
        }
        if (myUser && myUser.token) {
            setUser(myUser)
            setEmail(myUser.email)
            fetchData(myUser.token)
        }
    }, [router])


    const fetchData = async (token) => {

        let data = { token: token }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        setPhone(response.phone)
        setStreet(response.street)
        setHouse(response.house)
        setColony(response.colony)
        setPin(response.pincode)
        setName(response.name)
        // console.log(response)
        // toast.success("Successfully Updated the details !!")
    }

    const handleUserSubmit = async (e) => {
        e.preventDefault()
        if (phone.length !== 10 && pin.length !== 6) {
            toast.error("Invalid Credentials")
        }
        else {
            let data = { token: user.token, name, phone, street, house, colony, pin }
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
            // console.log(response)
            if (response.success) {
                toast.success("Successfully Updated the !!")
            }
            else {
                toast.error("Internal Server Error !!")

            }
        }
    }



    const handlePasswordSubmit = async (e) => {
        e.preventDefault()
        if (password == cpassword) {
            let data = { token: JSON.parse(localStorage.getItem('myUser')).token, currPassword, password, cpassword }
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatePassword`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
            console.log(response)
            if (response.success) {
                toast.success("Successfully Updated the Password !!")
            }
            else {
                toast.error("Facing Problems while Updating . Try after sometime !!")
            }
        }
        else {
            toast.error("Invalid Details . Try Again !! ")
        }

    }

    const submitForm = async (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'street') {
            setStreet(e.target.value)
        }
        else if (e.target.name == 'house') {
            setHouse(e.target.value)
        }
        else if (e.target.name == 'colony') {
            setColony(e.target.value)
        }
        else if (e.target.name == 'pin') {
            setPin(e.target.value)
        }
        else if (e.target.name == 'currPassword') {
            setCurrPassword(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'cpassword') {
            setCpassword(e.target.value)
        }


    }


    return (
        <section className='py-12 mt-20'>
            <div className='conatiner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="text-3xl md:text-4xl font-semibold flex tracking-tight items-center justify-center text-red-500"><MdAccountCircle className="text-5xl mr-4 text-red-400" />Update Your Account</h2>
                <section>
                    <div className="pt-5">
                        <h3 className="text-base font-semibold leading-6 text-red-500">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Updating username and phone </p>
                    </div>

                    <form onSubmit={handleUserSubmit}>
                        {/* <div className="lg:w-full md:w-2/3 gap-y-8 flex flex-col my-6 mx-auto">

                            <div className="flex flex-wrap items-center justify-center md:justify-between md:flex-row flex-col -m-2">
                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-md mb-1 text-red-500">User Name</label>
                                        <input onChange={submitForm} value={name} type="text" placeholder='Your Name...' id="name" name="name" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="name" />
                                    </div>
                                </div>

                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="phone" className="leading-7 text-md mb-1 text-red-500">Phone</label>
                                        <input onChange={submitForm} value={phone} type="text" placeholder='Your 10-digit Phone Number' id="phone" name="phone" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="phone" />
                                    </div>
                                </div>

                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-md mb-1 text-red-500">Email(cannot be changed)</label>
                                        <input value={email} type="email" placeholder='xyz@gmail.com' id="email" name="email" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />

                                    </div>
                                </div>
                            </div>

                        </div> */}

                        <div className="lg:w-full md:w-2/3 gap-y-8 flex flex-col mx-auto">


                            <div className="flex flex-wrap items-center sm:justify-between justify-center md:flex-row flex-col -m-2">
                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-md mb-1 text-red-500">User Name</label>
                                        <input onChange={submitForm} value={name} type="text" placeholder='Your Name...' id="name" name="name" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-md mb-1 text-red-500">Email ( cannot be changed )</label>
                                        <input value={email} type="email" placeholder='xyz@gmail.com' id="email" name="email" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />

                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-wrap items-center sm:justify-between justify-center -m-2">
                                <div className="p-2 md:w-[20.8rem]">
                                    <div className="relative">
                                        <label htmlFor="street" className="leading-7 text-md mb-1 text-red-500">Street/Road/Nearest famous - place</label>
                                        <input onChange={submitForm} value={street} type="text" placeholder='xyx road...' id="street" name="street" className="w-full bg-red-100  rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:w-[20.8rem]">
                                    <div className="relative">
                                        <label htmlFor="house" className="leading-7 text-md mb-1 text-red-500">House/Flat Number</label>
                                        <input onChange={submitForm} value={house} type="number" placeholder='Your house no...' id="house" name="house" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:w-[20.8rem]">
                                    <div className="relative">
                                        <label htmlFor="colony" className="leading-7 text-md mb-1 text-red-500">Colony/Society/Building - Name</label>
                                        <input onChange={submitForm} value={colony} type="text" placeholder='locality name...' id="colony" name="colony" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-wrap items-center sm:justify-between justify-center md:flex-row flex-col -m-2">
                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="phone" className="leading-7 text-md mb-1 text-red-500">Phone</label>
                                        <input onChange={submitForm} value={phone} type="number" placeholder='Your 10-digit Phone Number' id="phone" name="phone" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3 w-full">
                                    <div className="relative">
                                        <label htmlFor="pin" className="leading-7 text-md mb-1 text-red-500">PINcode</label>
                                        <input onChange={submitForm} value={pin} placeholder='6-digit PinCode' type="number" id="pin" name="pin" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 w-full">
                            <button type="submit" className="flex text-red-400 cursor-pointer font-bold bg-red-700 border-0 py-3 px-6 focus:outline-none hover:bg-red-300 disabled:bg-red-100 disabled:text-red-200 rounded text-xl">Submit Details<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-10 h-6 ml-2 mt-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg></button>
                        </div>
                    </form>
                </section>

                <section>
                    <div className="pt-5 mt-8 mb-4">
                        <h3 className="text-base font-semibold leading-6 text-red-500">User Password</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Password Updation</p>
                    </div>

                    <form onSubmit={handlePasswordSubmit}>
                        <div className="flex flex-wrap items-center justify-center md:justify-between md:flex-row flex-col -m-2">
                            <div className="p-2 md:w-[24.8rem]">
                                <div className="relative">
                                    <label htmlFor="currPassword" className="leading-7 text-md mb-1 text-red-500">Current Password</label>
                                    <input onChange={submitForm} value={currPassword} type="password" placeholder='Enter Your Current Password' id="currPassword" name="currPassword" className="w-full bg-red-100  rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="current-password" required />
                                </div>
                            </div>
                            <div className="p-2 md:w-[24.8rem]">
                                <div className="relative">
                                    <label htmlFor="password" className="leading-7 text-md mb-1 text-red-500">New Password</label>
                                    <input onChange={submitForm} value={password} type="password" placeholder='Choose a new Password' id="password" name="password" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="password" required />
                                </div>
                            </div>
                            <div className="p-2 md:w-[24.8rem]">
                                <div className="relative">
                                    <label htmlFor="cpassword" className="leading-7 text-md mb-1 text-red-500">Confirm Password</label>
                                    <input onChange={submitForm} value={cpassword} type="password" placeholder='Confirm Your New Password' id="cpassword" name="cpassword" className="w-full bg-red-100   rounded focus:bg-red-100 text-lg font-semibold outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="confirm-password" required />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 w-full">
                            <button type="submit" className="flex text-red-400 cursor-pointer font-bold bg-red-700 border-0 py-3 px-6 focus:outline-none hover:bg-red-300 disabled:bg-red-100 disabled:text-red-200 rounded text-xl">Change Password<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-10 h-6 ml-2 mt-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg></button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default SetAccount