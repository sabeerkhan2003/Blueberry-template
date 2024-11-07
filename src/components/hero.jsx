import React from 'react'
import flower from "../assets/hero/hero-1.png"
import ss from "../assets/hero/ss.png"

function Hero() {
  return (
    <div className='bg-[#F8F8FB]'>
    <div className='mt-6 flex flex-col-reverse m-5 lg:flex lg:flex-row lg:justify-center lg:gap-[10%] '>
      <div className='font-poppins ml-4 flex flex-col gap-3 lg:justify-center'>
        <p className='text-[#777777] text-center lg:text-start lg:text-lg'>Flat 30% Off</p>
        <div className='text-[#3D4750] text-[30px] lg:text-[50px] text-center lg:text-start font-semibold tracking-wider lg:leading-tight leading-tight lg:w-fit '>
          
        <h1 className='bg-[#EEEEF1] inline-block '>Explore <span className='text-[#6C7FD8]'>Healthy</span></h1><br className='hidden md:block'></br>
          <h1 className='bg-[#EEEEF1] inline-block border-t-4'>& Fresh Fruits</h1></div>
        <button className='border-2 text-[#3F4952] px-3 py-2 rounded-lg border-gray-400 w-fit ml-[35%] md:ml-[43%] text-sm font-thin lg:ml-0 '>shop now</button>
      </div>

      <div className='md:flex md:justify-center'>
        <img src={flower} className='md:m-0 lg:size-[90%]' ></img>
      </div>
      
    </div>
    <img src={ss} alt="bb" className='hidden lg:block lg:ml-[8%] lg:h-6 lg:relative bottom-14' />
    </div>

  )
}

export default Hero