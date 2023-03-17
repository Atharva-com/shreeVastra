import Link from 'next/link';
import { useRouter } from 'next/router'
import User from "@/models/User"
import mongoose from "mongoose";
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ clearCart, cart, currUser, user }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [house, setHouse] = useState('')
  const [colony, setColony] = useState('')
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [myuser, setMyuser] = useState({ value: null })

  const router = useRouter()
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem('myUser'))
    if (myuser && myuser.token) {
      setMyuser(myuser)
      setEmail(myuser.email)
      setName(user.name)
      setPhone(user.phone)
    }
    else {
      toast.error("Oops! Login to access your Account ")
      router.push('/')
    }
  }, [])

  useEffect(() => {
    if (email.length > 7 && street.length >= 3 && house.length > 0 && colony.length >= 5 && pin.length == 6) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [name, email, street, house, colony, phone, pin])


  useEffect(() => {
    let myUser = JSON.parse(localStorage.getItem('myUser'))
    if (myUser && myUser.token) {
      fetchData()
    }
  }, [])


  const fetchData = async () => {
    let data = { token: JSON.parse(localStorage.getItem('myUser')).token }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    setName(response.name)
    setPhone(response.phone)
    setStreet(response.street)
    setHouse(response.house)
    setColony(response.colony)
  }

  const submitForm = async (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
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
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'city') {
      setCity(e.target.value)
    }
    else if (e.target.name == 'state') {
      setState(e.target.value)
    }
    else if (e.target.name == 'pin') {
      setPin(e.target.value)
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinsJson = await pins.json()
        if (Object.keys(pinsJson).includes(e.target.value)) {
          setCity(pinsJson[e.target.value][0])
          setState(pinsJson[e.target.value][1])
        }
        else {
          setCity('')
          setState('')
          setDisabled(true)
        }
      }
      else {
        setCity('')
        setState('')
        setDisabled(true)
      }
    }


  }

  const HandlePay = () => {
    setTimeout(() => {
      // clearCart()
      toast.success("Payment Method has not been added yet !!", { autoClose: 3000 })
    }, 1000);

  }
  return (
    <>
      {/* <ToastContainer theme='dark' /> */}
      <div className="container px-5 py-20 mt-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-3 text-red-500 tracking-wide">DELIVERY DETAILS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed tracking-wide text-red-500">PROVIDE CORRECT DETAILS TO SAFELY GET ORDER . ENJOY THE SERVICES !!!</p>
        </div>
        <div className="lg:w-full md:w-2/3 gap-y-8 flex flex-col mx-auto">


          <div className="grid md:grid-cols-2 md:gap-6 sm:px-20 items-center justify-items-center justify-center">
            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={name} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="name" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">Full Name </label>
              </div>
            </div>


            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                {(myuser && myuser.token) ? <input onChange={submitForm} value={email} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " readOnly={true} /> : <input onChange={submitForm} value={email} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " readOnly={true} />}
                <label htmlFor="email" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">E-mail (cannot be changed) </label>

              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-3 md:gap-4 sm:px-32 items-center justify-items-center justify-center">
            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={street} type="text" name="street" id="street" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="street" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">Street/Road/Nearest - Place </label>
              </div>
            </div>

            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={house} type="number" name="house" id="house" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="house" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">House/Flat- Number </label>
              </div>
            </div>


            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={colony} type="text" name="colony" id="colony" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="colony" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">Colony/Society/Building - Name </label>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-6 sm:px-20 items-center justify-items-center justify-center">
            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={phone} type="number" name="phone" id="phone" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="phone" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">Mobile No.</label>
              </div>
            </div>


            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={pin} type="number" name="pin" id="pin" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="pin" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">PIN code</label>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 sm:px-20 items-center justify-items-center justify-center">
            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={city} type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="city" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">City/District</label>
              </div>
            </div>


            <div className="p-2 md:w-2/3 w-full">
              <div className="relative z-0 w-full group">
                <input onChange={submitForm} value={state} type="text" name="state" id="state" class="block py-2.5 px-0 w-full text-lg text-red-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label htmlFor="state" class="peer-focus:font-medium absolute text-md text-red-500 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 text-md peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-2">State</label>
              </div>
            </div>
          </div>


        </div>


        <div className="mt-8 w-full">
          <Link href={'/order '}><button onClick={HandlePay} disabled={disabled} className="flex mx-auto text-red-400 cursor-pointer font-bold bg-red-700 border-0 py-3 px-4 focus:outline-none hover:bg-red-300 disabled:bg-red-100 disabled:text-red-200 rounded text-xl">CONTINUE FOR PAYMENT<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-10 h-6 ml-4 mt-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg></button></Link>
        </div>
      </div>
    </>
  )
}


export default Checkout