import React, { useState } from 'react';
import logo from "../assets/footer/logo.png";
import android from "../assets/footer/android.png";
import apple from "../assets/footer/apple.png";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import payment from "../assets/footer/payment.png";

// Constants for product categories
const dairyAndMilk = [
  { product: "Milk" },
  { product: "Cheese" },
  { product: "Butter" },
  { product: "Curd" },
];

const snacksAndSpice = [
  { product: "Chips" },
  { product: "Biscuits" },
  { product: "Namkeens" },
  { product: "Spices" },
];

const fastFood = [
  { product: "Pizza" },
  { product: "Pasta" },
  { product: "Burger" },
  { product: "Sandwich" },
];

const juiceAndDrinks = [
  { product: "Orange Juice" },
  { product: "Apple Juice" },
  { product: "Cold Drink" },
  { product: "Lemonade" },
];

const bakery = [
  { product: "Bread" },
  { product: "Cake" },
  { product: "Cookies" },
  { product: "Pastry" },
];

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#F8F8FB]">
      <div className=" lg:flex lg:justify-center lg:pt-8 w-full lg:gap-12">
        <div className=" lg:w-[25%] lg:ml-28 md:pt-5 pt-5 lg:pt-0 ">
          <img className="ml-5 mt-5" src={logo} alt="logo" />
          <p className="text-[#686E7D]  mx-3 lg:w-60 ml-5 font-poppins text-sm tracking-wider my-6">
            BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
          </p>
          <div className="flex gap-3 my-5 ml-5 w-fit">
            <img className="w-28 h-8 rounded-md" src={android} alt="android" />
            <img className="w-28 h-8 rounded-md" src={apple} alt="apple" />
          </div>
        </div>

        <div className="my-5 lg:flex lg:gap-12 mr-20 w-full">
          {/* Category Section */}
          <div>
            <div className="flex justify-between mx-5">
              <h4 className="text-lg font-semibold">Category</h4>
              <IoChevronDown
                onClick={toggleCategory}
                className={`lg:hidden cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'} lg:max-h-[500px]`}
            >
              {dairyAndMilk.map((item, index) => (
                <li className="text-[#686E7D] text-sm mx-5 font-poppins lg:mt-1" key={index}>
                  {item.product}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <div className="flex justify-between mx-5">
              <h4 className="text-lg font-semibold">Company</h4>
              <IoChevronDown
                onClick={toggleCategory}
                className={`lg:hidden cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'} lg:max-h-[500px]`}
            >
              {snacksAndSpice.map((item, index) => (
                <li className="text-[#686E7D] text-sm mx-5 font-poppins lg:mt-1" key={index}>
                  {item.product}
                </li>
              ))}
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <div className="flex justify-between mx-5">
              <h4 className="text-lg font-semibold">Account</h4>
              <IoChevronDown
                onClick={toggleCategory}
                className={`lg:hidden cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'} lg:max-h-[500px]`}
            >
              {fastFood.map((item, index) => (
                <li className="text-[#686E7D] text-sm mx-5 font-poppins lg:mt-1" key={index}>
                  {item.product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='lg:w-60'>
            <div className="flex justify-between ml-5 mr-5 lg:w-fit">
              <h4 className="text-lg font-semibold">Contact</h4>
              <IoChevronDown
                onClick={toggleCategory}
                className={`lg:hidden cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'} lg:max-h-[500px]`}
            >
              <li className="flex flex-col gap-3 ml-5 lg:ml-0">
                <div className="flex items-center ml- gap-3 lg:w-64 xl:w-60">
                  <MdOutlineLocationOn className="text-[#6C7FD8] size-7 lg:size-9 ml- " />
                  <a className="text-[#686E7D] w-full font-poppins text-sm lg:w-96 inline">
                    971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.
                  </a>
                </div>
                <div className="flex items-center ml-1 gap-3 lg:w-64">
                  <FaWhatsapp className="text-[#6C7FD8]  size-5 lg:size-7" />
                  <p className="text-[#686E7D] w-1/2 font-poppins text-sm lg:w-96">
                    +00 9876543210.
                  </p>
                </div>
                <div className="flex items-center ml-1 gap-3 lg:w-64">
                  <MdMailOutline className="text-[#6C7FD8] size-5 lg:size-9" />
                  <p className="text-[#686E7D] w-1/2 font-poppins text-sm lg:w-96">
                    example@email.com
                  </p>
                </div>
                <div className="flex">
                  <FaFacebookSquare className="size-8 text-[#4B5966]" />
                  <FaSquareTwitter className="size-8 text-[#4B5966]" />
                  <FaLinkedin className="size-8 text-[#4B5966]" />
                  <FaInstagramSquare className="size-8 text-[#4B5966]" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer2 */}
      </div>
      <div className="flex flex-col justify-center gap-2 lg:gap-[12%] mb-1 lg:flex lg:flex-row ">
        <span className="text-[#4B5966] text-center mx-10 lg:mx-0">
          Copyright &copy;2024 <bb className="text-[#6C7FD8]">BlueBerry</bb> all rights reserved.
        </span>
        <img className="mx-5 md:w-96 md:ml-48" src={payment} alt="payment" />
      </div>
    </div>
  );
}

export default Footer;
