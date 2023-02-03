import React from 'react'
import { NavLink } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";

const Footer = () => {
  return (
    <section className='h-96 bg-gray-300 shadow-2xl'>
    <div className='p-8 grid grid-cols-4 gap-10 '>
        <div className='flex flex-col gap-5 items-center'>
          <NavLink to="/">
            <GiFoodTruck size={100} color="black" />
          </NavLink>
          <p>Dear diet, things just aren’t looking good for the both of us. It’s not me, it’s you. You’re too much work. You’re boring and I can’t stop cheating on you.</p>
        </div>
        <ul className='flex flex-col gap-4 hover:cursor-pointer text-lg'>
          <li>Gallery</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='flex flex-col gap-4 hover:cursor-pointer text-lg'>
          <li>Experience With Us</li>
          <li>Know More</li>
          <li>Free Delivery 24/7</li>
          <li>Get free Vouchers</li>
          <li>Refund & Return</li>
        </ul>
        <div className='flex flex-col gap-5 text-lg hover:cursor-pointer'>
          <p>WZ- 228A, Street Number - 16/3, Sadh Nagar Palam Colony New Delhi, PINCODE - 110045</p>
          <p className='flex items-center'><MdMarkEmailRead size={25} /> <span>: guptarishabh792@gmail.com</span></p>
          <p className='flex items-center'><AiFillPhone size={25} /> <span>: +91 9354697528</span></p>
        </div>
    </div>
    <hr />
    <div className='flex justify-between px-8 py-5 items-center'>
      <p>All Rights Reserved | @ Copywrite - 2023 </p>
      <span>V 1.1.1</span>
    </div>
    </section>
  )
}

export default Footer