import React, { useEffect, useRef, useState } from 'react';
import i1 from '../assets/insta/1.jpg';
import i2 from '../assets/insta/2.jpg';
import i3 from '../assets/insta/3.jpg';
import i4 from '../assets/insta/4.jpg';

// function Insta() {
//   return (
//     <div className='flex overflow-auto w-full gap-10'>
//       {[i1, i2, i3, i4].map((image, index) => (
//         <div key={index} className='relative h-72 w-72'>
//           {/* Image Section */}
//           <img src={image} alt={`Instagram ${index + 1}`} className='rounded-3xl  h-32 w-72 object-cover' />

//           {/* Overlay Section */}
//           <div className='bg-[#FFFFFFEF] border-2 flex flex-col p-3 rounded-3xl absolute bottom-5 left-5 right-5 '>
//             <span className='font-Poppins font-normal text-[13px] leading-[26px] tracking-[0.02rem] text-[#686e7d]'>
//               June 30, 2024 - organic
//             </span>
//             <a
//               href='blog-detail-left-sidebar.html'
//               className='font-Poppins tracking-[0.03rem] text-[16px] font-medium leading-[1.3] text-[#3d4750]'
//             >
//               Marketing Guide: 5 Steps to Success.
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Insta;





function Insta() {
    const images = [i1, i2, i3, i4,i1, i2, i3, i4];
    const scrollContainerRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(false);
    const scrollInterval = 3000; // Interval of 3 seconds
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      let currentIndex = 0;
      let intervalId;
  
      if (autoScroll) {
        intervalId = setInterval(() => {
          if (scrollContainer) {
            currentIndex++;
            if (currentIndex >= images.length) {
              currentIndex = 0;
            }
            // Scroll to the next image smoothly
            const scrollPosition = currentIndex * scrollContainer.clientWidth;
            scrollContainer.scrollTo({
              left: scrollPosition,
              behavior: 'smooth',
            });
          }
        }, scrollInterval);
      }
  
      // Cleanup interval on component unmount or when autoScroll stops
      return () => clearInterval(intervalId);
    }, [autoScroll, images.length]);
  
    // Function to handle double-click
    const handleDoubleClick = () => {
      setAutoScroll(!autoScroll); // Toggle auto-scroll on double-click
    };
  
    return (
      <div
        ref={scrollContainerRef}
        onDoubleClick={handleDoubleClick}
        className='flex overflow-x-auto lg:w-[1300px] md:gap-8 mx-8  gap-8  relative justify-start md:m-16 lg:m-8 scrollbar-hide cursor-pointer mt-10'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {images.map((item, index) => (
          <div key={index} className='relative flex-shrink-0 '>
            {/* Image Section */}
            <img
              src={item}
              alt={`Image ${index + 1}`}
              className='rounded-3xl  h-[250px] w-[300px] object-cover'
            />
  
            {/* Banner Section */}
            <div className='bg-[#FFFFFFEF] border-2 flex flex-col p-3 rounded-3xl absolute bottom-5 left-5 right-5 opacity-90'>
              <span className='font-Poppins font-normal text-[13px] leading-[26px] tracking-[0.02rem] text-[#686e7d]'>
                June 30, 2024 - organic
              </span>
              <a
                href='blog-detail-left-sidebar.html'
                className='font-Poppins tracking-[0.03rem] text-[16px] font-medium leading-[1.3] text-[#3d4750]'
              >
                Marketing Guide: 5 Steps to Success.
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Insta;