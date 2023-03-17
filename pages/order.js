import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { toast } from 'react-toastify'

const Order = ({cart, subTotal}) => {
  const router = useRouter()
  useEffect(() => {
    if(!localStorage.getItem('myUser')){
      router.push('/')
    }
    else{
      // router.push('/order')
    }
  }, [])
  

  const handleCancelOrder = ()=>{
    // window.location = window.history.go(0)
    toast.error("Your has been cancelled !!")
  }

  
  return (
    <section className="text-red-600 body-font overflow-hidden mt-24">

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-red-500 tracking-widest">SHREEVASTRA</h2>
            <h1 className="text-red-500 text-4xl title-font font-medium mb-4">Order Id : #047534896428</h1>
            <p className="leading-relaxed mb-4">Your Order has been placed successfully . Your Payment Status is <strong>PAID</strong></p>
            <div className="w-full overflow-auto my-8">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-2 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100 rounded-tl rounded-bl">Item Name</th>
                    <th className="px-2 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Quantity</th>
                    <th className="px-2 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Item Total</th>
                    <th className="px-2 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cart).map((k) => {
                      return (
                        <tr key={k}>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">{cart[k].name}({cart[k].size}/{cart[k].variant})</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">{cart[k].qty}</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-red-500">{cart[k].qty} x {cart[k].Price} = ₹{cart[k].qty*cart[k].Price}.00</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">Not Shipped </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-6 sm:flex-row flex-col sm:gap-0 gap-y-4">
              <span className="title-font font-medium text-2xl text-red-400">₹ {subTotal}.00</span>
              <button className="flex items-center justify-center md:ml-12 mr-4 text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none disabled:bg-red-100 disabled:text-red-200 hover:bg-red-800 hover:text-red-300 rounded">Track Order </button>
              <button onClick={handleCancelOrder} className="flex items-center justify-center md:ml-12 mr-4 text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none disabled:bg-red-100 disabled:text-red-200 hover:bg-red-800 hover:text-red-300 rounded">Cancel Order </button>

            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.codeswear.com/order.jpg" />
        </div>
      </div>

    </section>
  )
}

export default Order