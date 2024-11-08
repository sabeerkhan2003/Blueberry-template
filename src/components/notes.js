// style={{ animation: 'scroll 20s linear infinite' }}\
// <style jsx>{`
//                 @keyframes scroll {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-50%);
//                     }
//                 }
//             `}</style>





// function Insta() {
//     const images = [i1, i2, i3, i4,i2,i1,i3];
//     const scrollContainerRef = useRef(null);
  
//     useEffect(() => {
//       const scrollContainer = scrollContainerRef.current;
//       let currentIndex = 0;
  
//       const intervalId = setInterval(() => {
//         if (scrollContainer) {
//           currentIndex++;
//           if (currentIndex >= images.length) {
//             currentIndex = 0;
//           }
//           // Scroll to the next image smoothly
//           scrollContainer.scrollTo({
//             left: currentIndex * 450, // Adjust based on image width
//             behavior: 'smooth',
//           });
//         }
//       }, 1000); // 3 seconds interval
  
//       // Cleanup the interval on component unmount
//       return () => clearInterval(intervalId);
//     }, [images.length]);
  
//     return (
//       <div
//         ref={scrollContainerRef}
//         className='flex overflow-hidden w-[px]'
//       >
//         {images.map((item, index) => (
//           <img
//             key={index}
//             src={item}
//             alt={`Image ${index + 1}`}
//             className="rounded-3xl m-2 h-[350px] w-[450px] object-cover"
//           />
//         ))}
//       </div>
//     );
//   }
  
//   export default Insta;
  


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