import React from 'react'

function Brands() {

    const jewellery=[
        {name:" Necklace |"},
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        
    ]
    const Footwear=[
        {name:" Necklace |"},
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        
    ]
    const fashion=[
        {name:" Necklace |"},
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        
    ]
    const cosmetics=[
        {name:" Necklace |"},
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        {name:"necklace |"}, 
        {name:"Earings |"},
        {name:"Couple Rings |"},
        {name:"Pendants |"},
        
    ]

  return (
    <div className='bg-[#F8F8FB] w-full pt-10 lg:w-full'>

        <h4 className='text-[#3d4750] font-quicksand tracking-0 font-semibold text-center'>BRANDS DIRECTORY</h4>

        <div className=' lg:flex flex-wrap lg:justify-center lg:pt-10'>
        <ul className='w-fit  p-5 tracking-widest lg:w-[600px]'>
            <span className="text-[#686E7D] font-poppins font-semibold flex flex-row flex-wrap">Jewellery :
                {jewellery.map((item,index)=><li key={index} className=''><a href="#" className='text-[13px] font-light pl-1'>{item.name}</a></li>)}
            </span>
        </ul>
        <ul className='w-fit  p-5 tracking-widest lg:w-[600px]'>
            <span className="text-[#686E7D] font-poppins font-semibold flex flex-row flex-wrap">Footwear :
                {Footwear.map((item,index)=><li key={index} className=''><a href="#" className='text-[13px] font-light pl-1'>{item.name}</a></li>)}
            </span>
        </ul>
        <ul className='w-fit  p-5 tracking-widest lg:w-[600px]'>
            <span className="text-[#686E7D] font-poppins font-semibold flex flex-row flex-wrap">fashion :
                {fashion.map((item,index)=><li key={index} className=''><a href="#" className='text-[13px] font-light pl-1'>{item.name}</a></li>)}
            </span>
        </ul>
        <ul className='w-fit  p-5 tracking-widest lg:w-[600px]'>
            <span className="text-[#686E7D] font-poppins font-semibold flex flex-row flex-wrap">cosmetics :
                {cosmetics.map((item,index)=><li key={index} className=''><a href="#" className='text-[13px] font-light pl-1'>{item.name}</a></li>)}
            </span>
        </ul>
        </div>
        
    </div>
  )
}

export default Brands