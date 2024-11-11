import React from 'react';
import CountdownTimer from '../pages/timer';
import HalfRating from './rating';
import pro1 from "../assets/deal/1.jpg";
import pro2 from "../assets/deal/2.jpg";
import pro3 from "../assets/deal/3.jpg";
import pro4 from "../assets/deal/4.jpg";

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

function Deal() {
    return (
        <>
            <div className='h-auto flex flex-col justify-center'>
                <div className='font-medium text-center lg:text-start lg:flex lg:justify-around lg:gap-[25%]'>
                    <div>
                        <h2 className="font-quicksand text-[25px] text-[#3D4750]">
                            Day Of The <span className='text-[#6C7FD8]'>Deal</span>
                        </h2>
                        <p className='text-[#757A88]'>
                            Don't wait. The time will never be just right.
                        </p>
                    </div>
                    <div className='text-center mt-6'>
                        <CountdownTimer targetDate="2024-12-31T23:59:59" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-8 mt-10 flex-wrap'>
                {products.map((product, index) => (
                    <div key={index} className='border-2 rounded-lg w-64 flex flex-col gap-1'>
                        <div className='relative'>
                            <img src={product.img} alt="" className='h-64 font-quicksand' />
                            <div className='absolute top-0 left-3 text-[#757A88] font-semibold'>
                                <p>N</p>
                                <p>E</p>
                                <p>W</p>
                            </div>
                        </div>
                        <div className='flex justify-around border-t-2 pt-4'>
                            <p className='text-[#7578AA]'>{product.label}</p>
                            <HalfRating />
                        </div>
                        <p className='text-[#3D4750] text-start ml-5'>{product.description}</p>
                        <div className='flex justify-center gap-28'>
                            <div className='flex items-center gap-1'>
                                <h4 className='font-bold text-[#686E7D]'>${product.price}</h4>
                                <h6 className="text-[13px] text-[#686E7D] line-through">${product.originalPrice}</h6>
                            </div>
                            <p className='text-[#686E7D] font-quicksand text-[16px]'>{product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Deal;
