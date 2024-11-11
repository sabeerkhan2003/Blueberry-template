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

function Footer() {
  // State for managing each dropdown individually
  const [openSections, setOpenSections] = useState([false, false, false, false]);

  // Toggle dropdown for each section
  const toggleCategory = (index) => {
    setOpenSections((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-[#F8F8FB]">
      <div className="lg:flex lg:justify-center lg:pt-8 w-full lg:gap-12">
        {/* Logo and Description */}
        <div className="lg:w-[25%] lg:ml-28 md:pt-5 pt-5 lg:pt-0">
          <img className="ml-5 mt-5" src={logo} alt="logo" />
          <p className="text-[#686E7D] mx-3 lg:w-60 ml-5 font-poppins text-sm tracking-wider my-6">
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
                onClick={() => toggleCategory(0)}
                className={`lg:hidden cursor-pointer ${openSections[0] ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${
                openSections[0] ? 'max-h-[500px]' : 'max-h-0'
              } lg:max-h-[500px]`}
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
                onClick={() => toggleCategory(1)}
                className={`lg:hidden cursor-pointer ${openSections[1] ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${
                openSections[1] ? 'max-h-[500px]' : 'max-h-0'
              } lg:max-h-[500px]`}
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
                onClick={() => toggleCategory(2)}
                className={`lg:hidden cursor-pointer ${openSections[2] ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${
                openSections[2] ? 'max-h-[500px]' : 'max-h-0'
              } lg:max-h-[500px]`}
            >
              {fastFood.map((item, index) => (
                <li className="text-[#686E7D] text-sm mx-5 font-poppins lg:mt-1" key={index}>
                  {item.product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex justify-between mx-5">
              <h4 className="text-lg font-semibold">Contact</h4>
              <IoChevronDown
                onClick={() => toggleCategory(3)}
                className={`lg:hidden cursor-pointer ${openSections[3] ? 'rotate-180' : ''}`}
              />
            </div>
            <ul
              className={`lg:flex lg:flex-col gap-1 my-6 transition-all duration-300 ease-in-out overflow-hidden ${
                openSections[3] ? 'max-h-[500px]' : 'max-h-0'
              } lg:max-h-[500px]`}
            >
              <li className="flex items-center gap-3 ml-5">
                <MdOutlineLocationOn className="text-[#6C7FD8]" />
                <span className="text-[#686E7D]">971 Lajamni, Surat, Gujarat</span>
              </li>
              <li className="flex items-center gap-3 ml-5">
                <FaWhatsapp className="text-[#6C7FD8]" />
                <span className="text-[#686E7D]">+00 9876543210</span>
              </li>
              <li className="flex items-center gap-3 ml-5">
                <MdMailOutline className="text-[#6C7FD8]" />
                <span className="text-[#686E7D]">example@email.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 lg:gap-[12%] mb-1 lg:flex lg:flex-row">
        <span className="text-[#4B5966] text-center">
          Copyright &copy;2024 <span className="text-[#6C7FD8]">BlueBerry</span> all rights reserved.
        </span>
        <img className="mx-5 md:w-96 md:ml-48" src={payment} alt="payment" />
      </div>
    </div>
  );
}

export default Footer;
