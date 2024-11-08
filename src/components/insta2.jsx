import React from 'react'
import img1 from "../assets/insta2/1.jpg"
import img2 from "../assets/insta2/2.jpg"
import img3 from "../assets/insta2/3.jpg"
import img4 from "../assets/insta2/4.jpg"
import img5 from "../assets/insta2/5.jpg"
import img6 from "../assets/insta2/6.jpg"

function Insta2() {

    const images=[img1,img2,img3,img4,img5,img6,img1]
  return (
    
    <div className=' flex w-full gap-8 lg:gap-0 lg:w-auto overflow-scroll mt-20 pl-5 mobile-l:pl-8 md:pl-11 lg:pl-2 lg:mx-10 xl:mx-32 xl:gap-8' 
    style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    
    // style={{
    //     scrollbarWidth: 'none',
    //     msOverflowStyle: 'none',
    //   }}
    >
        
        {images.map((item,index)=>(<img src={item} alt="#" className='rounded-3xl w-[150px] h-[150px] mobile-l:w-[100px] mobile-l:h-[100px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] lg:mr-7 object-cover' />))}


    </div>
  )
}

export default Insta2