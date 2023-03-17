import Image from 'next/image'
import styles from '../../styles/carousel.module.css'
import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from '@/models/Product'
import mongoose from 'mongoose'
import Error from 'next/error';
import Link from 'next/link';
import { MdLocalOffer } from 'react-icons/md'

const Slug = ({ error, buyNow, addToCart, product, variants, products }) => {

  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState('')
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)

  useEffect(() => {
    if (!error) {
      setColor(product.color)
      setSize(product.size)
    }

  }, [router.query])

  const onPinChange = (e) => {
    setPin(e.target.value)
  }

  const checkService = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pinsJson = await pins.json()

    if (Object.keys(pinsJson).includes(pin)) {
      toast.success("The Product is available at given Pin . Order Now!", { autoClose: 1000 })
    }
    else {
      toast.error("Oops! Sorry , we could not deliver the product to this pincode yet", { autoClose: 1000 })
      setPin('')
    }

  }

  const refreshVariants = (newSize, newColor) => {
    // alert(newSize)
    // alert(newColor)
    setColor(newColor)
    try {
      const location = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newColor][newSize]['slug']}`
      router.push(location)
    } catch (error) {
      toast.error("Size is Out Of Stock in this color !! Stay Tuned for Updates ")
    }
  }

  if (error == 404) {
    return <Error statusCode={404} />
  }
  return (
    <>

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden mt-24">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap md:justify-center">
            <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-[46rem] md:h-32 object-contain object-center rounded" src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">SHREEVASTRA</h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{product.color})</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3">4 Reviews</span>
                </span>

              </div>
              <h2 className='text-red-500 font-semibold mb-1 dark:text-red-400 text-xl'>Product Description</h2>
              <p className="leading-relaxed text-red-300">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <button onClick={() => { refreshVariants(size, 'red') }} className={`border-2 bg-red-900 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-white' : 'border-none'}`}></button>}
                  {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(size) && <button onClick={() => { refreshVariants(size, 'yellow') }} className={`border-2 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none ${color === 'yellow' ? 'border-white' : 'border-none'}`}></button>}
                  {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) && <button onClick={() => { refreshVariants(size, 'green') }} className={`border-2 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color === 'green' ? 'border-white' : 'border-none'}`}></button>}
                  {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) && <button onClick={() => { refreshVariants(size, 'black') }} className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === 'black' ? 'border-white' : 'border-none'}`}></button>}
                  {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <button onClick={() => { refreshVariants(size, 'blue') }} className={`border-2 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-white' : 'border-none'}`}></button>}
                  {Object.keys(variants).includes('gray') && Object.keys(variants['gray']).includes(size) && <button onClick={() => { refreshVariants(size, 'gray') }} className={`border-2 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none ${color === 'gray' ? 'border-white' : 'border-none'}`}></button>}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">

                    <select value={size} onChange={(e) => { setSize(e.target.value), refreshVariants(e.target.value, color) }} className="rounded border border-red-700 bg-red-400 appearance-none py-1 focus:outline-none text-red-900 text-lg font-bold pl-2 pr-8">
                      {<option value={'S'}>S</option>}
                      {<option value={'M'}>M</option>}
                      {<option value={'L'}>L</option>}
                      {<option value={'XL'}>XL</option>}
                      {<option value={'XXL'}>XXL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-red-900 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-0 gap-y-3">
                {product.availableQty > 0 && <span className="title-font text-center font-medium text-2xl text-white">₹599.00</span>}
                {product.availableQty <= 0 && <span className="title-font text-center font-medium text-2xl text-white">Out of Stock!</span>}
                <button disabled={product.availableQty <= 0} onClick={() => buyNow(slug, 1, product.price, product.title, product.size, product.color)} className="flex items-center justify-center md:ml-12 mr-4 text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none disabled:bg-red-100 disabled:text-red-200 hover:bg-red-800 hover:text-red-300 rounded"><AiOutlineShoppingCart className='text-xl font-bold mr-3 cursor-pointer text-red-300' />BUY NOW</button>
                <button disabled={product.availableQty <= 0} onClick={() => addToCart(slug, 1, product.price, product.title, product.size, product.color)} className="flex items-center justify-center mr-4 text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none disabled:bg-red-100 disabled:text-red-200 hover:bg-red-800 hover:text-red-300 rounded"><AiOutlineShoppingCart className='text-xl font-bold mr-3 cursor-pointer text-red-300' />ADD TO CART</button>
                <button className="left-[45%] md:left-0 relative rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-0 focus-within:text-red-500 focus-within:bg-red-200">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative flex md:gap-0 gap-y-2 md:flex-row flex-col items-center justify-start text-red-900 mb-4">
                <input value={pin} onChange={onPinChange} type="number" id="pin" name="pin" placeholder='Enter Your City PIN ...' className="w-[20rem] md:my-8 mt-8  bg-red-300 placeholder:text-red-900 font-semibold rounded border text-lg outline-none text-red-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button disabled={pin.length !== 6} onClick={checkService} className="disabled:bg-red-100 md:w-[6rem] w-[20rem] mx-3 flex items-center justify-center text-red-200 bg-red-500 py-2 focus:outline-none hover:bg-red-800 rounded">CHECK PIN</button>
              </div>

              <div className='mt-6 items-center'>
                <h1 className='text-red-500 font-semibold mb-2 text-xl'>Exciting Offers :</h1>
                <ul className='text-red-300'>
                  <li className='flex flex-wrap items-center p-1 leading-relaxed text-xs md:text-[15px]'><MdLocalOffer className='text-red-500 mr-2' /> Free keychain with all prepaid orders.</li>
                  <li className='flex flex-wrap items-center p-1 leading-relaxed text-xs md:text-[15px]'><MdLocalOffer className='text-red-500 mr-2' /> 1 Free Plain cap with all prepaid orders above ₹549.</li>
                  <li className='flex flex-wrap items-center p-1 leading-relaxed text-xs md:text-[15px]'><MdLocalOffer className='text-red-500 mr-2' /> 1 Free <span>Anonymous Hacker Mask </span> with all prepaid orders above ₹899.</li>
                  <li className='flex flex-wrap items-center p-1 leading-relaxed text-xs md:text-[15px]'><MdLocalOffer className='text-red-500 mr-2' /> Buy 2 get 1 Free and buy 3 get 2 Free on all Caps- Prepaid orders only.</li>
                  <li className='flex flex-wrap items-center p-1 leading-relaxed text-xs md:text-[15px]'><MdLocalOffer className='text-red-500 mr-2' /> Buy 2 get 1 Free and buy 3 get 2 Free on all Mousepads- Prepaid orders only.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-start md:justify-center'>
          <section className="text-gray-600 body-font w-full">
            <div className='flex flex-col mx-14 lg:mx-32'>
              <h1 className='font-semibold m-2 mb-7 text-3xl md:text-5xl text-center capitalize text-red-500'>Explore More Collection</h1>
              <p className="text-md hidden md:inline-block font-medium text-red-600 dark:text-red-400 tracking-widest mb-3">Welcome to Codeswear.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
            </div>
            <div className="container lg:px-0 px-5 pb-24 pt-12 mx-auto">
              <div className="flex flex-wrap items-center justify-center m-auto ">
                {Object.keys(products).length == 0 && <p>Sorry , All the T-shirts are currently <b>Out Of Stock</b> . New Stock will be available soon . Stay Tuned . </p>}
                {Object.keys(products).map((item) => {
                  return (<Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} className="lg:w-[15rem] md:w-1/3 p-3 w-full md:mr-1 mx-8 mb-16 cursor-pointer shadow-md bg-gray-800 shadow-gray-600">
                    <div >
                      <div className="flex w-full items-center justify-center relative rounded overflow-hidden">
                        <img alt="ecommerce" className="w-full h-[40vh] md:h-[45vh] m-auto md:mx-0 block  hover:opacity-80 hover:scale-125" src={products[item].img} />
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
      </section>

      <section className="text-gray-600 body-font">
        <div className='font-semibold mt-6 m-2 mb-5 text-3xl title-font md:text-5xl ml-8 capitalize text-red-500'>Our Latest Collection</div>
        <div className='h-1 w-24 rounded ml-6 bg-red-600'></div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap items-center justify-center -m-4">
            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/music-with-headset-logo-hoodie-red/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">HOODIE</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">Music With Heads...</h2>
                <p className="mt-1 text-gray-200">₹ 499.00</p>
              </div>
            </div>


            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gymshark-zipperhoodie-black/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">ZIPPERHOODIE</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">Gymshirt ..</h2>
                <p className="mt-1 text-gray-200">₹599</p>
              </div>
            </div>


            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/false-tshirt-black/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">TSHIRT</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">False Tshirt</h2>
                <p className="mt-1 text-gray-200">₹ 299.00</p>
              </div>
            </div>


            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Tokyo-Revengers-standard-mug-black/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">MUG</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">Tokyo Avengers</h2>
                <p className="mt-1 text-gray-200">₹ 188.40</p>
              </div>
            </div>


            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/Jujutsu-Kaisen-sweatshirt-navyblue/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">SWEATSHIRT</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">The Catalyzer...</h2>
                <p className="mt-1 text-gray-200">₹ 416.00</p>
              </div>
            </div>


            <div className="lg:w-[15%] md:w-1/2 p-4 bg-slate-700 mb-4  mx-2 md:px-8 w-[80%] cursor-pointer">
              <div className="block relative h-[18rem] rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/first-rule-of-programming-tshirt-bottlegreen/0.webp" />
              </div>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">TSHIRT</h3>
                <h2 className="text-red-500 title-font text-lg font-medium">First Rule Of Prog...</h2>
                <p className="mt-1 text-gray-200">₹ 21.15</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className='font-semibold mt-6 m-2 mb-5 text-3xl title-font md:text-5xl ml-8 capitalize text-red-500'>Latest From Watches</div>
        <div className='h-1 w-24 rounded ml-6 bg-red-600'></div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between px-12 w-full gap-y-8 -m-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
              </div>
              <div className="px-5 pb-5">
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-y-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-red-300">₹ 2599.00</span>
                  <button disabled={product.availableQty <= 0} onClick={() => addToCart(slug, 1, 2599, 'Apple Watch Series 7 GPS', 'M', 'black')} className="flex items-center justify-center text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-800 hover:text-red-400 rounded"><AiOutlineShoppingCart className='text-xl font-bold mr-3 cursor-pointer text-red-300' />ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='flex items-center justify-center'>
                <img className="p-8 rounded-t-lg h-[16.5rem]" src="https://o.remove.bg/downloads/1318edd4-953b-47c3-b85e-f8238a4c772c/61wJNP17lEL._AC_UL320_-removebg-preview.png" alt="product image" />
              </div>
              <div className="px-5 pb-5">
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Noise Pulse Go Buzz Smart Watch with Smart Call & Advanced Bluetooth Tech</h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-y-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-red-300">₹ 1499.00</span>
                  <button disabled={product.availableQty <= 0} onClick={() => addToCart(slug, 1, 1499, 'Noise Pulse 7 GPS', 'M', 'cream')} className="flex items-center justify-center text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-800 hover:text-red-400 rounded"><AiOutlineShoppingCart className='text-xl font-bold mr-3 cursor-pointer text-red-300' />ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='flex items-center justify-center'>
                <img className="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/51wwevsxWVL.gif" alt="product image" />
              </div>
              <div className="px-5 pb-5">
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-red-500">Noise Pulse 2 Max Advanced</h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-y-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-red-300">₹ 1799.00</span>
                  <button disabled={product.availableQty <= 0} onClick={() => addToCart(slug, 1, 1799, 'Noise Pulse', 'M', 'black')} className="flex items-center justify-center text-red-100 bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-800 hover:text-red-400 rounded"><AiOutlineShoppingCart className='text-xl font-bold mr-3 cursor-pointer text-red-300' />ADD TO CART</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  let error = null
  if (!mongoose.connections[0].readyState) {           // check the Previous connections
    await mongoose.connect(process.env.MONGO_URI)
  }

  let product = await Product.findOne({ slug: context.query.slug })
  if (product == null) {
    return {
      props: { error: 404 }
    }
  }
  let variants = await Product.find({ title: product.title, category: product.category })
  let colorSizeSlug = {}   // {red: {xl: {slug: 'wear-the-code-xl'}}}
  for (let item of variants) {

    try {
      if (Object.keys(colorSizeSlug).includes(item.color)) {
        colorSizeSlug[item.color][item.size] = { slug: item.slug }
      }

      else {
        colorSizeSlug[item.color] = {}
        colorSizeSlug[item.color][item.size] = { slug: item.slug }

      }

    } catch (error) {
      console.log(error)
    }
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
    props: { error: error, products: JSON.parse(JSON.stringify(tshirts)), product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }
  }
}




export default Slug