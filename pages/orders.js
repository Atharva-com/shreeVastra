import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { FaAmazonPay } from 'react-icons/fa'
import { toast } from 'react-toastify'
import {
  Container,
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Alert
} from "@mui/material";

const Orders = ({ cart, subTotal, addToCart, removeFromCart }) => {
  const router = useRouter()

  useEffect(() => {

    if (!localStorage.getItem('myUser')) {
      toast.error("Oops! Login to access your Account ")
      router.push('/')
    }


  }, [router])


  return (
    <>
      <section className="text-gray-600 flex body-font overflow-hidden mt-24">

        <div className="container px-5 pb-20 pt-8 mx-auto sm:flex sm:items-center sm:justify-center lg:flex-row flex-col ">
          <div className="lg:w-1/2 mx-auto flex flex-wrap">
            <div className=" w-full lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-red-500 tracking-widest">SHREEVASTRA.COM</h2>
              <h1 className="text-red-600 md:text-5xl text-3xl title-font font-medium mb-12">Items Details - </h1>
              <div className="w-full overflow-auto">
                <table className="table-auto w-full text-right whitespace-no-wrap overflow-x-hidden overflow-scroll">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100 rounded-tl rounded-bl">Item Name</th>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Quantity</th>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Color</th>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Price</th>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Add Item</th>
                      <th className="px-4 py-3 title-font tracking-wider font-semibold text-red-500 text-lg bg-red-100">Remove Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(cart).map((k) => {
                      return (
                        <tr key={k}>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">{cart[k].name}</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">{cart[k].qty}</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-red-300">{cart[k].variant}</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-red-500">₹{cart[k].Price}.00</td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-red-500"><AiFillPlusCircle onClick={() => addToCart(k, 1, cart[k].Price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer relative left-[50%] text-red-300 text-xl' /></td>
                          <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-red-500"><AiFillMinusCircle onClick={() => removeFromCart(k, 1, cart[k].Price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer relative left-[50%] text-red-300 text-xl' /></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between md:flex-row flex-col gap-y-4 mt-8">
                <span className="title-font font-medium text-2xl text-red-600"><span className='text-red-300'>Total Quantity :</span> {Object.keys(cart).length}</span>
                <span className="title-font font-medium text-2xl text-red-600"><span className='text-red-300'>Total Amount :</span>  ₹{subTotal}.00</span>
                <Link href={'/checkout'}><button disabled={subTotal == 0} className='flex disabled:bg-red-200 text-red-300 font-bold bg-red-700 border-0 py-2 px-6 focus:outline-none rounded text-xl' ><FaAmazonPay className='text-red-300 mr-2 mt-2 w-6 h-5' />PAY</button></Link>
              </div>
            </div>
          </div>


          {subTotal == 0 ? <Container>
            <Grid container justifyContent="center" mt={3} spacing={3}>
              <Grid item md={4}>
                <Card variant="outlined">
                  <CardContent sx={{ p: "30px" }}>
                    <Box textAlign="center">
                      <img
                        src={
                          "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/products/empty-shopping-bag.gif"
                        }
                        alt="star"
                        width={200}
                      />

                      <Typography variant="h6" mt={3}>
                        Oop, Your cart is empty!
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        mt={1}
                        mb={2}
                      >
                        Get back to shopping and get
                        <br /> rewards from it.
                      </Typography>

                      <Link href={'/tshirts'}><Button color="primary" variant="contained" size="large">
                        Go for shopping!
                      </Button></Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container> : <img className="lg:w-1/3 sm:mx-8 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://imageio.forbes.com/specials-images/imageserve/6349c12e2476e78de0de06ab/Online-Shopping/960x0.jpg?format=jpg&width=960" alt="" />}
        </div>

      </section>
    </>
  )
}

export default Orders