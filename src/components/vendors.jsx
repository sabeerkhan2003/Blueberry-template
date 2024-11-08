import React from 'react'
import vendor from "../assets/vendors/img-1.jpg"
import subvendor from "../assets/vendors/vendor-1.jpg"


function Vendors() {
    return (
        <div>
            <div className='font-quicksand text-center flex flex-col gap-2 lg:mb-12'>
                <h2 className='text-[#3D4750] text-[24px] font-bold'>Top <span className='text-[#6C7FD8]'>Vendors</span></h2>
                <p className='text-[#686E7D] hover:text-[#6C7FD8] text-12px font-thin  w-full'>Discover Our Trusted Partners: Excllence & Reliability in <br className='hidden lg:block'></br>Every choice</p>
            </div>

            <div className='lg:flex lg:justify-center lg:gap-3 '>
            <div className='m-5 lg:relative'>
                <img src={vendor} alt="vendorsAd" className='rounded-3xl lg:size-[450px]' />
                <img src={subvendor} alt="subvendor" className='size-36 hidden lg:block lg:rounded-3xl bg-white lg:absolute lg:bottom-16 lg:-right-5 p-5' />
            </div>


            <div className='lg:w-[700px]'>
            <div className='border-2 hover:border-[#6C7FD8] m-5 p-8 rounded-3xl flex flex-col gap-2 font-quicksand bg-[#F8F8FB]'>
                <div className='flex justify-between'>
                <h5 className='text-[18px] text-[#6C7FD8] font-bold'>
                Mira Fashion Pvt. Ltd.</h5>
                <span className=' text-[14px] text-[#686E7D] font-medium tracking-wide'>Sales 587</span>
                </div>
                <p className=' text-[14px] text-[#686E7D] font-extralight'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>
            <div className='border-2 hover:border-[#6C7FD8] m-5 p-8 rounded-3xl flex flex-col gap-2 font-quicksand bg-[#F8F8FB]'>
            <div className='flex justify-between'>
                <h5 className='text-[18px] text-[#6C7FD8] font-bold'>
                Eelna Fashion Pvt. Ltd.</h5>
                <span className=' text-[14px] text-[#686E7D] font-medium tracking-wide'>Sales 428</span>
                </div>
                <p className=' text-[14px] text-[#686E7D] font-extralight'>Fruits (8) | Vegetables (15) | Snacks (04)</p>
            </div>
            <div className='border-2 hover:border-[#6C7FD8] m-5 p-8 rounded-3xl flex flex-col gap-2 font-quicksand bg-[#F8F8FB]'>
                <div className='flex justify-between'>
                <h5 className='text-[18px] text-[#6C7FD8] font-bold'>
                Mario Fashion Pvt. Ltd.</h5>
                <span className=' text-[14px] text-[#686E7D] font-medium tracking-wide'>Sales 1024</span>
                </div>
                <p className=' text-[14px] text-[#686E7D] font-extralight'>Fruits (16) | Vegetables (42) | Snacks (18)</p>
            </div>
            <div className='border-2 hover:border-[#6C7FD8] m-5 p-8 rounded-3xl flex flex-col gap-2 font-quicksand bg-[#F8F8FB]'>
            <div className='flex justify-between'>
                <h5 className='text-[18px] text-[#6C7FD8] font-bold'>
                Mira Fashion Pvt. Ltd.</h5>
                <span className=' text-[14px] text-[#686E7D] font-medium tracking-wide'>Sales 257</span>
                </div>
                <p className=' text-[14px] text-[#686E7D] font-extralight'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Vendors