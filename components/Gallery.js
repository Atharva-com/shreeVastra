import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='mb-6 mt-12'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto flex items-center justify-center flex-wrap">
                    <div className="flex flex-wrap md:flex-row flex-col md:gap-0 gap-y-6 items-center justify-center md:-m-2 -m-1">
                        <div className="flex flex-wrap md:w-1/2 w-full cursor-pointer">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-2_2.webp&w=3840&q=75" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-2_1.webp&w=3840&q=75" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-1.webp&w=3840&q=75" />
                            </div>
                        </div>
                        <div className="flex flex-wrap md:w-1/2 w-full cursor-pointer">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-4.webp&w=3840&q=75" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-3_2.webp&w=3840&q=75" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-105 border-2 border-white" src="https://www.codeswear.com/_next/image?url=%2Fimg%2Fbanner-3_1.webp&w=3840&q=75" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery