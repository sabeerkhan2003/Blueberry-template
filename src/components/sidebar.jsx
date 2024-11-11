import React from 'react'
import veg from "../assets/explore/vegetable.svg"
import fruit from "../assets/explore/fruits.svg"
import drink from "../assets/explore/cold-drinks.svg"
import bakery from "../assets/explore/bakery.svg"
import HalfRating from './rating';
import pro1 from "../assets/deal/1.jpg";
import pro2 from "../assets/deal/2.jpg";
import pro3 from "../assets/deal/3.jpg";
import pro4 from "../assets/deal/4.jpg";

function Sidebar({appmenu}) {

  const keywords = ["clothes", "fruits", "snacks", "dairy", "seafood", "toys", "perfume", "jewellery", "bags"]


  const categories = [
    { image: veg, name: "Vegetables", items: 10, bgColor: "#FEF1F1" },
    { image: fruit, name: "Fruits", items: 18, bgColor: "#E1FCF2" },
    { image: drink, name: "Cold drinks", items: 20, bgColor: "#F4F1FE" },
    { image: bakery, name: "Bakery", items: 26, bgColor: "#FBF9E4" },
    { image: veg, name: "Vegetables", items: 10, bgColor: "#FEF1F1" },
    { image: fruit, name: "Fruits", items: 18, bgColor: "#E1FCF2" },
  ]

  const products = [
    {
        img: pro1,
        label: "chocos",
        description: "Mixed Fruits Chocolate pack...",
        price: 25,
        originalPrice: 40,
        quantity: "1 Pack",
    },
    {
        img: pro2,
        label: "chocos",
        description: "Mixed Fruits Chocolate pack...",
        price: 25,
        originalPrice: 40,
        quantity: "1 Pack",
    },
    {
        img: pro3,
        label: "chocos",
        description: "Mixed Fruits Chocolate pack...",
        price: 25,
        originalPrice: 40,
        quantity: "1 Pack",
    },
    {
        img: pro4,
        label: "chocos",
        description: "Mixed Fruits Chocolate pack...",
        price: 25,
        originalPrice: 40,
        quantity: "1 Pack",
    },
];

  return (
    <div className="bg-white border-2 overflow-y-scroll h-[450px] w-[350px] mobile-l:w-[400px] md:w-[750px] lg:w-[1000px]  m-3 rounded-2xl fixed mt-20 z-20 ">
    <div className='m-5 flex flex-col gap-5 lg:gap-10 '>
      <h4 class="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750] capitalize">keywords</h4>

      <ul className='flex gap-2 flex-wrap'>
        {keywords.map((item, index) => <li key={index} className='px-2 py-1 text-[12px] border-2 rounded-lg w-fit text-[#9A9EA8] font-poppins'><a>{item}</a></li>)}
      </ul>

      <h4 class="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750] capitalize">explore categories</h4>

      <div className='flex gap-8 justify-center bg-white relative lg:gap-6 rounded-3xl w-full flex-wrap '>
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


      <div className='flex justify-center gap-8 mt-10 flex-wrap lg:flex-nowrap'>
                {products.map((product, index) => (
                    <div key={index} className='border-2 rounded-lg w-64  flex flex-col gap-1'>
                        <div className='relative'>
                            <img src={product.img} alt="" className='h-64 lg:h-52 font-quicksand' />
                            <div className='absolute top-0 left-3 text-[#757A88] font-semibold'>
                                <p>N</p>
                                <p>E</p>
                                <p>W</p>
                            </div>
                        </div>
                        <div className='flex justify-around lg:justify-center border-t-2 pt-4'>
                            <p className='text-[#7578AA]'>{product.label}</p>
                            <HalfRating />
                        </div>
                        <p className='text-[#3D4750] text-start ml-5 '>{product.description}</p>
                        <div className='flex justify-center gap-28 lg:gap-16'>
                            <div className='flex items-center gap-1'>
                                <h4 className='font-bold text-[#686E7D]'>${product.price}</h4>
                                <h6 className="text-[13px] text-[#686E7D] line-through">${product.originalPrice}</h6>
                            </div>
                            <p className='text-[#686E7D] font-quicksand text-[16px]'>{product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    </div>
  )
}

export default Sidebar