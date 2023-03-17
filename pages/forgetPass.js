import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdAccountCircle, MdPassword } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const ForgetPass = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const router = useRouter()


    useEffect(() => {
        if (localStorage.getItem('myUser')) {
            router.push('/')
        }
    }, [])


    const handleChange = (e)=>{
        if(e.target.name == 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name == 'password'){
            setPassword(e.target.value)
        }
        else if(e.target.name == 'cpassword'){
            setCpassword(e.target.value)
        }
    }

    const sendResetEmail = async (e) => {
        e.preventDefault()
            let data = { email, sendMail: true }
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgotPassword`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
            if (response.success) {
                toast.success("Password reset instructions have been sent to your registered email  Successfully !", { autoClose: 1500 })

            }
            else {
                toast.error("Some Error Occured !", { autoClose: 1500 })

            }
    }


    const resetPassword = async () => {
        e.preventDefault()
        if (password == cpassword && password.length >= 4) {
            let data = { password, sendMail: false, cpassword  }
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgotPassword`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
            if (response.success) {
                toast.success("Password has been set Successfully !", { autoClose: 1500 })

            }
            else {
                toast.error("Some Error Occured !", { autoClose: 1500 })

            }
        } else {
            toast.error("Some Error Occured !", { autoClose: 1500 })

        }
    }

    return (
        <>
            <section className="overflow-hidden mt-16">

                {/* <ToastContainer theme='dark' /> */}
                <div className="container px-5 py-16 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center px-6 py-4 mx-auto p-8 lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                                <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
                                    <div className='flex items-center justify-center'>
                                        <MdAccountCircle className='text-red-500 text-5xl' />
                                    </div>


                                    <h1 className="text-lg font-bold  text-center uppercase leading-tight tracking-tight text-red-900 md:text-2xl dark:text-white">
                                        Change account password
                                    </h1>

                                    {router.query.token && <form onSubmit={resetPassword} className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="password" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><AiOutlineMail className='text-red-500 text-lg mr-2' />New Password</label>
                                            <input onChange={handleChange} value={password} type="password" name="password" id="password" autoComplete='password' className="text-red-900 sm:text-sm block w-full p-2.5 dark:bg-red-300 dark:placeholder-red-900 focus:outline-none font-semibold" placeholder="Your New Password..." required />
                                        </div>

                                        <div>
                                            <label htmlFor="cpassword" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><AiOutlineMail className='text-red-500 text-lg mr-2' />Confirm New Password</label>
                                            <input onChange={handleChange} value={cpassword} type="password" name="cpassword" id="cpassword" autoComplete='cpassword' className="text-red-900 sm:text-sm block w-full p-2.5 dark:bg-red-300 dark:placeholder-red-900 focus:outline-none font-semibold" placeholder="Confirm New Password..." required />
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <div className='flex items-center'>
                                                <div className="flex items-center h-5">
                                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-primary-300 dark:bg-red-300 dark:border-red-600 dark:focus:ring-primary-600 dark:ring-offset-red-800" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms" className="font-md text-white">Remember Me</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full flex flex-col items-center justify-center'>
                                            <button type="submit" disabled={password !== cpassword} className="md:w-2/3 w-full text-red-900 bg-red-200 rounded-lg text-lg px-3 py-2.5 text-center disabled:bg-red-100 disabled:text-red-200 dark:bg-red-300 font-semibold">Change Password</button>
                                            {password !== cpassword && <span className="text-red-600 mt-1">Password&apos;s do no match</span>}
                                            {password && password == cpassword && <span className="text-green-600 mt-1">Password matched</span>}
                                        </div>

                                        <p className="text-sm font-md text-white">
                                            Create new account? <Link href={'/signup'} className="font-bold text-lg text-red-500 hover:underline">Create here</Link>
                                        </p>
                                    </form>}

                                    {!router.query.token && <form onSubmit={sendResetEmail} className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><AiOutlineMail className='text-red-500 text-lg mr-2' />E-mail</label>
                                            <input onChange={handleChange} value={email} type="email" name="email" id="email" className="text-red-900 sm:text-sm block w-full p-2.5 dark:bg-red-300 dark:placeholder-red-900 dark:text-white font-semibold" placeholder="name@company.com..." required="" />
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <div className='flex items-center'>
                                                <div className="flex items-center h-5">
                                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-primary-300 dark:bg-red-300 dark:border-red-600 dark:focus:ring-primary-600 dark:ring-offset-red-800" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms" className="font-md text-white">Remember Me</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full flex items-center justify-center'>
                                            <button type="submit" className="md:w-2/3 w-full text-red-900 bg-red-200 rounded-lg text-lg px-3 py-2.5 text-center dark:bg-red-300 font-semibold">GET LOGIN DETAILS</button>
                                        </div>

                                        <div className="text-red-500 mb-4 text-center">or</div>

                                        <div className='flex flex-col items-center justify-center'>
                                            <button className="w-full md:w-[80%] h-10 rounded-lg bg-white text-red-700 uppercase font-semibold transition mb-4">Login with Google</button>
                                            <button className="w-full md:w-[80%] h-10 rounded-lg bg-blue-700 text-red-300 uppercase font-semibold transition mb-4">Login with Facebook</button>
                                        </div>

                                        <p className="text-sm font-md text-white">
                                            Don&apos;t have an account? <Link href={'/signup'} className="font-bold text-lg text-red-500 hover:underline">Create here</Link>
                                        </p>
                                    </form>}
                                </div>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded md:my-0 my-4" src="https://appedus.com/wp-content/uploads/2018/02/ecommerce-app-design-tips-1024x683.jpeg" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgetPass