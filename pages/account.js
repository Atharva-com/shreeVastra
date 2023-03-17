import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import Link from 'next/link'

const Account = ({ user }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [house, setHouse] = useState('')
  const [colony, setColony] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {

    if (!localStorage.getItem('myUser')) {
      router.push('/')
    }
    else {
      let myUser = JSON.parse(localStorage.getItem('myUser'))
      fetchData(myUser.token)
    }
  }, [])

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
    setName(response.name)
    // console.log(response)
    // toast.success("Successfully Updated the details !!")
  }
  return (

    <section className="py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:flex-row flex-col justify-center items-center sm:items-center sm:justify-between ">
          <h2 className="text-3xl md:text-4xl font-semibold flex tracking-tight items-center justify-center text-red-500"><MdAccountCircle className="text-5xl mr-4 text-red-400" /> My Account</h2>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <Link href={'/setAccount'} className="text-base font-medium text-red-300 hover:text-red-600">Edit Account Info</Link>
          </div>
        </div>

        <div className="overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-red-500">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">{name}</dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">{phone}</dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email(cannot be changed)</dt>
                <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">{user.email}</dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">{house} , {colony} , {street}</dd>
              </div>
            </dl>
          </div>
        </div>


        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-10 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Your Order !</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Track your order , return or buy again for your weekly benefits:</p>
            <Link href={'/order'} className="inline-flex items-center text-blue-600 hover:underline">

              <svg className="w-6 h-6 ml-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
          </div>


          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-10 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Login and Security</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Edit Login details , your name and mobile number and other account details .</p>
            <Link href={'/setAccount'} className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
          </div>


          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-10 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">ShreeVastra Prime</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Check Out the Benefits of Prime Account and Enjoy the store Services much better</p>
            <a href="" className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
          </div>

        </div>

        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-14 h-12 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Your Address !</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Want to Change your Delivery Address ? Check here </p>
            <Link href={'/setAccount'} className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </Link>
          </div>


          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-16 h-12 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Payment Options</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Not Satisfied with payment method .<strong>No Problem!</strong> Edit or Change the Method.</p>
            <a href="" className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
          </div>


          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
            <img className="w-14 h-12 mb-2 text-gray-500 dark:text-red-300" src='https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png' />
            <div className='cursor-pointer'>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Contact For Help</h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Stuck while browsing the Items ?? Contact our team for help .</p>
            <a href="" className="inline-flex items-center text-blue-600 hover:underline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Account