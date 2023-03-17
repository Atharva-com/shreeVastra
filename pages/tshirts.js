import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mongoose from "mongoose";
import Product from "@/models/Product"
import offer1 from '../public/images/sale-1.webp'
import offer2 from '../public/images/sale-2.webp'
import offer8 from '../public/images/sale-8.webp'

const Tshirts = ({ products }) => {
  return (
    <div className='flex flex-row mt-20'>
      <div className='hidden lg:flex flex-col gap-y-12'>
        <Image src={offer1} alt="" />
        <Image src={offer2} alt="" />
        <Image src={offer8} alt="" className='w-[21.2rem]' />
      </div>
      <div className='flex justify-start md:justify-end'>
        <section className="text-gray-600 body-font w-full md:w-[73rem]">
          <div className='flex flex-col mx-14 lg:mx-32'>
            <h1 className='font-semibold m-2 md:mb-7 md:my-6 my-4 text-4xl md:text-5xl text-center capitalize text-red-500'>Explore Our T-shirts Collection</h1>
            <p className="text-md hidden md:inline-block font-medium text-red-600 dark:text-red-400 tracking-widest mb-3">Welcome to ShreeVastra.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
          </div>

          
          <div className="container lg:px-0 px-5 pb-24 pt-12 mx-auto">
            <div className="flex flex-wrap justify-center items-center m-auto ">
              {Object.keys(products).length == 0 && <p className='flex items-center justify-center md:w-2/3 text-red-400 text-2xl'>Sorry , All the T-shirts are currently <b>Out Of Stock</b> . New Stock will be available soon . Stay Tuned . </p>}
              {Object.keys(products).map((item) => {
                return (<Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} className="lg:w-[15rem] md:w-1/3 p-3 w-full md:mr-1 mx-6 mb-16 cursor-pointer shadow-md bg-gray-800 shadow-gray-600">
                  <div >
                    <div className="flex w-full items-center justify-center relative rounded overflow-hidden">
                      <img alt="ecommerce" className="w-full h-[45vh] md:h-[45vh] m-auto md:mx-0 block  hover:opacity-80 hover:scale-125" src={products[item].img} />
                    </div>
                    <div className="mt-4 text-center flex flex-col gap-y-2 md:text-left">
                      <h3 className="text-red-500 text-xl tracking-widest title-font mb-1 uppercase">WEAR THE VASTRA</h3>
                      <h2 className="text-red-300 title-font text-xl font-medium">{products[item].title}</h2>
                      <div className='flex items-center justify-between'> 
                        <div className="mt-2">
                          {products[item].color.includes('red') && <button className="border-2 border-white ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('gray') && <button className="border-2 border-white ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('black') && <button className="border-2 border-white ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('blue') && <button className="border-2 border-white ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('green') && <button className="border-2 border-white ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('yellow') && <button className="border-2 border-white ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].color.includes('white') && <button className="border-2 border-white ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                        </div>
                        <p className="mt-2 text-2xl text-red-300">₹ {products[item].price}.00</p>
                      </div>
                      <div className="my-4 text-red-300">
                        {products[item].size.includes('S') && <span className='border border-red-300 mx-1 py-1 px-2'>S</span>}
                        {products[item].size.includes('M') && <span className='border border-red-300 mx-1 py-1 px-2'>M</span>}
                        {products[item].size.includes('L') && <span className='border border-red-300 mx-1 py-1 px-2'>L</span>}
                        {products[item].size.includes('XL') && <span className='border border-red-300 mx-1 py-1 px-2'>XL</span>}
                        {products[item].size.includes('XXL') && <span className='border border-red-300 mx-1 py-1 px-2'>XXL</span>}
                      </div>


                    </div>
                  </div>
                </Link>)
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {           // check the Previous connections
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'tshirt' })
  let tshirts = {}
  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
      else {
        tshirts[item.title].color = []
        tshirts[item.title].size = []
      }

    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }
  }

}

export default Tshirts