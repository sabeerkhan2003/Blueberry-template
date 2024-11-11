import React, { useEffect, useRef, useState } from 'react';
import bg1 from "../assets/testimonials/img-1.png";
import bg2 from "../assets/testimonials/img-2.png";
import bg3 from "../assets/testimonials/img-3.png";
import bg4 from "../assets/testimonials/img-4.png";
import bg5 from "../assets/testimonials/img-5.png";
import bg6 from "../assets/testimonials/img-6.png";
import img1 from "../assets/testimonials/1.jpg";
import img2 from "../assets/testimonials/2.jpg";
import img3 from "../assets/testimonials/3.jpg";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialRef = useRef();

    const testimonials = [
        {
            img: img1,
            name: 'Isabella Oliver',
            role: '(Manager)',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus ea, alias dignissimos cupiditate aliquam ut.',
        },
        {
            img: img2,
            name: 'Hema Anee',
            role: '(Manager)',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus ea, alias dignissimos cupiditate aliquam ut.',
        },
        {
            img: img3,
            name: 'Rakshith Jay',
            role: '(Manager)',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus ea, alias dignissimos cupiditate aliquam ut.',
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 2000); // Slide every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Scroll to the current testimonial
        testimonialRef.current.scrollTo({
            left: currentIndex * testimonialRef.current.clientWidth,
            behavior: 'smooth',
        });
    }, [currentIndex]);

    return (
        <div className='h-auto lg:h-[500px] md:h-[400px] mobile-l:w-[420px]  md:w-auto relative '>
            {/* Background decorative images */}
            <img src={bg1} alt="" className='hidden lg:block md:block w-[50px] h-[50px] absolute left-[15%] top-[20%] rounded-2xl object-cover -rotate-12' />
            <img src={bg2} alt="" className='hidden lg:block md:block w-[40px] h-[40px] absolute left-[15%] top-[60%] rounded-2xl object-cover rotate-12 blur-sm' />
            <img src={bg3} alt="" className='hidden lg:block md:block w-[40px] h-[40px] absolute left-[55%] top-[15%] rounded-2xl object-cover -rotate-12 blur-sm' />
            <img src={bg4} alt="" className='hidden lg:block md:block w-[50px] h-[50px] absolute left-[65%] top-[35%] rounded-2xl object-cover rotate-12' />
            <img src={bg5} alt="" className='hidden lg:block md:block w-[50px] h-[50px] absolute left-[80%] top-[22%] rounded-2xl object-cover rotate-12 blur-sm' />
            <img src={bg6} alt="" className='hidden lg:block md:block w-[50px] h-[50px] absolute left-[75%] top-[50%] rounded-2xl object-cover -rotate-12' />

            {/* Title for larger screens */}
            <h1 className='hidden lg:block lg:text-[32px] lg:font-semibold font-quicksand lg:text-transparent text-stroke leading-none lg:my-8 absolute -rotate-90 left-[16%] top-[35%]'>
                <span>Testimonials</span>
            </h1>

            {/* Scrollable Testimonials Container */}
            <div
                className='w-full overflow-x-auto flex lg:overflow-x-hidden mobile-l:gap-[0%] mobile-l:pl-0 lg:w-[60%] lg:gap-0   mobile-l: md:mx-3 md:gap-5  px-0   lg:absolute lg:left-[21%] lg:top-[18%]  md:w-[60%] md:absolute md:left-44 md:top-28 md:px-2'
                ref={testimonialRef}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='flex-shrink-0 w-fit m-5 lg:w-full p-4 mobile-l:w-fit rounded-lg'>
                        <div className='flex items-end gap-4'>
                            <img src={testimonial.img} alt="" className='w-[50px] h-[50px] lg:w-[200px] lg:h-[200px] rounded-2xl lg:rounded-3xl' />
                            <div className='flex flex-col lg:h-auto lg:w-[800px] lg:gap-4'>
                                <div className='flex flex-col'>
                                    <h4 className='font-quicksand text-[#3d4750] text-[18px] lg:text-[20px] font-bold'>{testimonial.name}</h4>
                                    <span className='text-[12px] text-[#777777]'>{testimonial.role}</span>
                                </div>
                                <p className='text-[#686E7D] text-[14px] lg:text-[12px] mt- leading-relaxed lg:border-2 lg:border-gray-100 rounded-3xl lg:w-[80%] lg:p-2 hidden lg:block'>
                                    {testimonial.feedback}
                                </p>
                            </div>
                        </div>
                        <p className='text-[#686E7D] text-[14px] lg:text-[16px] mt-4 leading-relaxed lg:hidden'>
                            {testimonial.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;