import React, { useState } from 'react';
import logo from "../assets/navbar/logo.png";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import "@fontsource/poppins";

function Nav() {
    const [dropdownsVisible, setDropdownsVisible] = useState({
        vegetable: false,
        location: false
    });

    const Vegetables = [
        { name: "Vegetables" },
        { name: "Cold drinks" },
        { name: "Fruits" },
        { name: "Bakery" },
    ];

    const locations = [
        { loc: "Surat" },
        { loc: "Delhi" },
        { loc: "Rajkot" },
        { loc: "Udaipur" },
    ];

    const toggleDropdown = (type) => {
        // Close the dropdowns if they are already open, else open the clicked one
        setDropdownsVisible(prevState => ({
            ...prevState,
            [type]: !prevState[type],
            ...(type === "vegetable" && { location: false }), // Close the location dropdown if vegetable is opened
            ...(type === "location" && { vegetable: false }) // Close the vegetable dropdown if location is opened
        }));
    };

    const menuItems = [
        { icon: <FaRegUser className='size-8 text-[#6C7FD8]' />, title: "Account", action: "Login" },
        { icon: <FaRegStar className='size-8 text-[#6C7FD8]' />, title: "Items", action: "Wishlist" },
        { icon: <BsCart3 className='size-8 text-[#6C7FD8]' />, title: "Items", action: "Cart" },
    ];

    return (
        <>
            {/* nav1 */}
            <div className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[8%] lg:mt-4 flex flex-col md:flex-row md:gap-5'>
                <div className='lg:flex lg:gap-12 mt-4 relative lg:static md:flex md:h-12 md:justify-around'>
                    <img src={logo} alt="Logo" className='ml-4 lg:ml-0' />
                    <AiOutlineAppstore className='lg:hidden text-[#6C7FD8] absolute lg:static right-8 top-2 size-8 md:left-[38%]' />
                    <div className='flex md:justify-center md:items-center top-0'>
                        <div className='relative lg:flex border-2 p-3 rounded-l-lg items-center hidden lg:h-12'>
                            <input placeholder='Vegetables' readOnly onClick={() => toggleDropdown("vegetable")} className="cursor-pointer outline-none" />
                            <IoIosArrowDown onClick={() => toggleDropdown("vegetable")} className="text-[#565656] lg:size-5 cursor-pointer" />
                            {dropdownsVisible.vegetable && (
                                <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                                    {Vegetables.map((item, index) => (
                                        <p key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-gray-500 ">{item.name}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='border-2 flex items-center lg:rounded-r-lg lg:border-l-0 w-full justify-between m-5 lg:m-0 rounded-sm md:w-fit md:ml-32 md:h-12 lg:h-12'>
                            <input placeholder='Search products...' className='p-3 lg:w-64 lg:h-8 md:h-8 outline-none' />
                            <IoSearchOutline className="text-[#565656] lg:size-5 mr-3" />
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:gap-8 lg:mt-4 flex justify-center gap-4 md:flex md:gap-5 md:mt-5'>
                    {menuItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            {item.icon}
                            <div>
                                <p className='text-[#454E57] text-[13px] hidden lg:block'>{item.title}</p>
                                <p className='font-semibold hidden lg:block'>{item.action}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='mt-5'></hr>

            {/* nav2 */}
            <div className='flex items-center justify-around mt-5 relative'>
                <ul className='hidden lg:flex lg:items-center font-poppins gap-10'>
                    <li> <AiOutlineAppstore className='text-[#6C7FD8] size-8' /></li>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Products</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Offers</li>
                </ul>
                <div className='flex border-2 items-center p-2 relative md:hidden lg:flex'>
                    <IoLocationOutline className='text-[#6C7FD8] m-1 size-5' />
                    <input placeholder='Surat' readOnly onClick={() => toggleDropdown("location")} className="cursor-pointer outline-none" />
                    <IoIosArrowDown onClick={() => toggleDropdown("location")} className="text-[#565656] lg:size-5 cursor-pointer" />
                    {dropdownsVisible.location && (
                        <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                            {locations.map((item, index) => (
                                <p key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-gray-500">{item.loc}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
