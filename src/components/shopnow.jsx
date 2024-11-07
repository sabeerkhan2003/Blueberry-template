import React from 'react'
import card1 from "../assets/shopnow/card1.png"
import card2 from "../assets/shopnow/card2.png"
import banner from "../assets/shopnow/banner.jpg"

function Shopnow() {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[#F4DAB4] mt-32 '></div>
            <div className='flex justify-center flex-wrap mt-'>
                <div className='bg-[#FBF2E5] text-center m-8 h-[350px] w-80 rounded-lg lg:w-[480px] lg:h-[250px] lg:p-8 lg:flex lg:items-center lg:justify-center lg:gap-3'>
                    <div className='flex justify-center'>
                        <img src={card1} alt="" className='size-52 ' />
                    </div>
                    <div className='font-quicksand flex flex-col lg:items-start items-center gap-1 lg:w-1/2 lg:text-start'>
                        <h5 className='text-[22px] lg:text-[31px] text-[#3D4750] font-semibold leading-9'>Tasty Snack & Fast food</h5>
                        <p className='text-[14px] text-[#757A88] tracking-wider font-extralight'>The flavour of something special</p>
                        <button className='border-2 text-[#3F4952] px-3 py-2 rounded-lg border-black w-fit  text-sm font-thin lg:ml-0'>shop now</button>

                    </div>
                </div>
                <div className='bg-[#FFE8EE] text-center m-8 h-[350px] w-80 rounded-lg lg:w-[480px] lg:h-[250px] lg:p-8 lg:flex lg:items-center lg:justify-center lg:gap-3'>
                    <div className='flex justify-center'>
                        <img src={card2} alt="" className='size-52 ' />
                    </div>
                    <div className='font-quicksand flex flex-col lg:items-start items-center gap-1 lg:w-1/2 lg:text-start'>
                        <h5 className='text-[22px] lg:text-[31px] text-[#3D4750] font-semibold leading-9'>Fresh Fruits & Vegetables</h5>
                        <p className='text-[14px] text-[#757A88] tracking-wider font-extralight'>A healthy meal for every one</p>
                        <button className='border-2 text-[#3F4952] px-3 py-2 rounded-lg border-black w-fit  text-sm font-thin lg:ml-0'>shop now</button>

                    </div>
                </div>

                <div className='relative mt-20 flex justify-center pb-56 lg:pb-0 '>
                    <img src={banner} alt="banner" className='scale-[200%]  lg:scale-100 lg:h-[80%] md:h-[50%] md:mt-28 lg:mt-0 lg:w-full' />
                    <div className='font-quicksand bg-white p-5  absolute bottom-5 lg:bottom-32 md:bottom-56 md:right-20 lg:right-24 flex flex-col gap-2 lg:gap-3 w-[220px] lg:w-[350px] rounded-3xl'>
                        <span className='text-[#6C7FD8] font-semibold text-[16px] lg:text-[20px]' >25% Off</span>
                        <h5 className='text-[22px] lg:text-[36px] text-[#3D4750] font-semibold leading-7 lg:leading-tight'>Fresh & organic Vegetables</h5>
                        <button className='border-2 text-[#3F4952] px-6 py-3 rounded-lg border-black w-fit  text-sm font-thin lg:text-[16px] lg:mt-3'>shop now</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Shopnow