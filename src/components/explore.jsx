import React from 'react'
import big from "../assets/explore/category.jpg"
import veg from "../assets/explore/vegetable.svg"
import fruit from "../assets/explore/fruits.svg"
import drink from "../assets/explore/cold-drinks.svg"
import bakery from "../assets/explore/bakery.svg"

const categories = [
    { image: veg, name: "Vegetables", items: 10, bgColor: "#FEF1F1" },
    { image: fruit, name: "Fruits", items: 18, bgColor: "#E1FCF2" },
    { image: drink, name: "Cold drinks", items: 20, bgColor: "#F4F1FE" },
    { image: bakery, name: "Bakery", items: 26, bgColor: "#FBF9E4" },
]

function Explore() {
    return (
        <div className='lg:flex lg:justify-center lg:gap-0 lg:ml-5 my-28 relative'>
            <img src={big} alt="mainpic" className='lg:size-[450px] rounded-3xl hidden lg:block' />
            <div className='lg:w-1/2 '>
                <div className='font-quicksand lg:ml-5 hidden lg:block  lg:w-fit'>
                    <h1 className='lg:text-[100px] lg:font-semibold lg:text-transparent text-stroke leading-none lg:my-8 '>
                        <span>Explore</span> <span>Categories</span>
                    </h1>
                </div>
                <div className='flex gap-8 justify-center bg-white relative lg:absolute lg:right-40 lg:p-8 rounded-3xl w-full lg:w-fit flex-wrap lg:flex-nowrap'>
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className='text-center w-fit md:w-fit m-5 lg:m-0 lg:w-fit px-28 lg:px-8 py-5 rounded-xl flex flex-col gap-'
                            style={{ backgroundColor: category.bgColor }}
                        >
                            <img src={category.image} alt={category.name} className='h-16' />
                            <a className='text-[#3D4750] font-semibold'>{category.name}</a>
                            <p className='font-[13px] text-[#686e7d]'>{category.items} items</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore
