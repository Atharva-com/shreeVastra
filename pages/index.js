import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Gallery from '@/components/Gallery'
import brand3 from '../public/images/brand-03.png'
import brand4 from '../public/images/brand-04.png'
import brand5 from '../public/images/brand-05.png'
import brand6 from '../public/images/brand-06.png'
import brand7 from '../public/images/brand-07.png'
import brand8 from '../public/images/brand-08.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>ShreeVastra.com - Wear the Vastra</title>
        <meta name="description" content="ShreeVastra.com - wear the Vastra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <Gallery />

      <div className="min-h-screen hidden md:flex bg-gray-800 flex-col justify-center">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="md:min-w-[786px] lg:min-w-[1250px] flex flex-col group">
            <div
              className="h-48 md:h-[34rem] lg:h-[80vh] cursor-pointer w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

              <img src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                className="cursor-pointer object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                alt="" />

              <div
                className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
              </div>

            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className='font-semibold mt-8 m-2 mb-5 text-3xl title-font md:text-5xl ml-8 capitalize text-red-500'>Our Latest Collection</div>
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

      <section className="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-2">
        <div className='font-semibold mt-8 m-2 mb-5 text-3xl title-font md:text-6xl ml-8 capitalize text-red-500'>Accessories</div>
        <div className='h-1 w-24 rounded ml-6 bg-red-600'></div>

        <div className="my-8 px-4 grid place-content-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 298.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 295.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 299.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 295.00</p>
          </div>
        </div>

        <div className="my-8 px-4 grid place-content-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Focus Card Tray</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 298.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Focus Multi Pack</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 295.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Brass Sccissors</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 299.00</p>
          </div>

          <div className="group">
            <div className="cursor-pointer  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-red-500">Focus Carry Pouch</h3>
            <p className="mt-1 text-lg font-medium text-red-400">₹ 295.00</p>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
        <div className='font-semibold mt-8 m-2 mb-5 text-3xl title-font md:text-5xl ml-8 capitalize text-red-500'>Customers also purchased</div>
        <div className='h-1 w-24 rounded ml-6 bg-red-600'></div>

        <div className="my-6 grid grid-cols-1 place-content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full cur" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-red-500">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </div>
                </h3>
                <p className="mt-1 text-md text-red-400">Black</p>
              </div>
              <p className="text-sm font-medium text-red-500">₹ 235.00</p>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full cur" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-red-500">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </div>
                </h3>
                <p className="mt-1 text-md text-red-400">Cream</p>
              </div>
              <p className="text-sm font-medium text-red-500">₹ 235.00</p>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full cur" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-red-500">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </div>
                </h3>
                <p className="mt-1 text-md text-red-400">Dark Grey</p>
              </div>
              <p className="text-sm font-medium text-red-500">₹ 235.00</p>
            </div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full cur" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-red-500">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </div>
                </h3>
                <p className="mt-1 text-md text-red-400">Light</p>
              </div>
              <p className="text-sm font-medium text-red-500">₹ 235.00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font my-8">
        <div className="container px-5 py-4 mx-auto">

          <div className="flex flex-wrap items-center justify-center">
            <div className="xl:w-1/5 lg:w-1/2 md:w-full  mx-2 px-8 py-6 border border-red-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">Premium Tshirts</h2>
              <p className="leading-relaxed text-red-300 mb-4">Our T-Shirts are 100% made of cotton.</p>

            </div>
            <div className="xl:w-1/5 lg:w-1/2 md:w-full  mx-2 px-8 py-6 border border-red-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">Free Shipping</h2>
              <p className="leading-relaxed text-red-300 mb-4">We ship all over India for FREE. Do not pay while getting order.</p>

            </div>
            <div className="xl:w-1/5 lg:w-1/2 md:w-full  mx-2 px-8 py-6 border border-red-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">Exciting Offers</h2>
              <p className="leading-relaxed text-red-300 mb-4">We provide amazing offers & discounts on our products.</p>

            </div>
            <div className="xl:w-1/5 lg:w-1/2 md:w-full  mx-2 px-8 py-6 border border-red-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">Best Customer Services</h2>
              <p className="leading-relaxed text-red-300 mb-4">We provide best workers and delivery persons for customers.</p>

            </div>
          </div>
        </div>
      </section>


      <div className="container p-20">
        <h1 className='font-semibold text-red-500 text-3xl md:text-5xl text-center'>OUR PARTNERS</h1>
        <div className="flex md:flex-row flex-col items-center justify-center my-6">
          <div className='flex items-center justify-center'>
            <Image src={brand4} alt="" className='md:mx-7 mx-4' />
            <Image src={brand3} alt="" className='md:mx-7 mx-4' />
          </div>
          <div className='flex items-center justify-center'>
            <Image src={brand5} alt="" className='md:mx-7 mx-4' />
            <Image src={brand6} alt="" className='md:mx-7 mx-4' />
          </div>
          <div className='flex items-center justify-center'>
            <Image src={brand7} alt="" className='md:mx-7 mx-4' />
            <Image src={brand8} alt="" className='md:mx-7 mx-4' />
          </div>
        </div>
      </div>
    </>
  )
}
