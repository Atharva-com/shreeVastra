import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { MdAccountCircle, MdPassword } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('myUser')){
      router.push('/')
    }
  }, [])

  const handleChange = (e)=>{
    if(e.target.name == 'name'){
      setName(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'password'){
      setPassword(e.target.value)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = { name, phone, email, password }
    let res =await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    setName("")
    setEmail("")
    setPassword("")
    setPhone("")
    if (response.success) {
      localStorage.setItem('myUser', JSON.stringify({token: response.token, email: response.email}))
      toast.success("Your Account has been created !!! Enjoy the Services !", { autoClose: 1500 })
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
      }, 1500)

    }
    else {
      toast.error(response.error, { autoClose: 1500 })
    }
  }

  
  return (
    <>
      <section className="overflow-hidden mt-16">
        {/* <ToastContainer theme='dark'/> */}
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full flex flex-col items-center justify-center px-6 py-4 mx-auto p-8 lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
                  <div className='flex items-center justify-center'>
                    <MdAccountCircle className='text-red-500 text-5xl' />
                  </div>
                  <h1 className="text-lg font-bold  text-center uppercase leading-tight tracking-tight text-red-900 md:text-2xl dark:text-white">
                    Create new account
                  </h1>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST">
                    <div>
                      <label htmlFor="name" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><MdAccountCircle className='text-red-500 text-lg mr-2' />Username</label>
                      <input value={name} onChange={handleChange} type="text" name="name" id="name" className="text-red-900 sm:text-lg block w-full p-2.5 dark:bg-red-300 placeholder-red-900 font-semibold" placeholder="Set username..." required="" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><MdAccountCircle className='text-red-500 text-lg mr-2' />Mobile No.</label>
                      <input value={phone} onChange={handleChange} type="number" name="phone" id="phone" className="text-red-900 sm:text-lg block w-full p-2.5 dark:bg-red-300 placeholder-red-900 font-semibold" placeholder="Set username..." required="" />
                    </div>
                    <div>
                      <label htmlFor="email" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><AiOutlineMail className='text-red-500 text-lg mr-2' />E-mail</label>
                      <input value={email} onChange={handleChange} type="email" name="email" id="email" className="text-red-900 sm:text-lg block w-full p-2.5 dark:bg-red-300 placeholder-red-900 font-semibold" placeholder="name@company.com..." required="" />
                    </div>
                    <div>
                      <label htmlFor="password" className="items-center mb-2 text-sm font-medium text-red-900 dark:text-white flex"><MdPassword className='text-red-500 text-lg mr-2' />Password</label>
                      <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="password" className="text-red-900 sm:text-lg block w-full p-2.5 dark:bg-red-300 placeholder-red-900 font-semibold" required="" />
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-primary-300 dark:bg-red-300 dark:border-red-600 dark:focus:ring-primary-600 dark:ring-offset-red-800" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-md text-white">I accept the <a className="font-bold text-red-500 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                      <button type="submit" className="md:w-2/3 w-full text-red-900 bg-red-200 rounded-lg text-lg px-3 py-2.5 text-center dark:bg-red-300 font-semibold">Create an account</button>
                    </div>

                    <p className="text-sm font-md text-white">
                      Already have an account? <Link href={'/login'} className="font-bold text-lg text-red-500 hover:underline">Login here</Link>
                    </p>
                  </form>
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

export default Signup