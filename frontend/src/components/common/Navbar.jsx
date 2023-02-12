import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";
import { MdPermContactCalendar, MdMenu } from "react-icons/md";
import { FaCartArrowDown, FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="h-20 flex justify-between p-4 bg-gray-800 shadow-2xl fixed w-full z-50">
      <div className="flex gap-14 items-center">
        <NavLink to="/">
          <GiFoodTruck className="ml-4" size={60} color="white" />
        </NavLink>
        <div>
          <ul className="flex gap-10 text-xl font-medium text-white">
            <li className="flex flex-col items-center">
              <AiFillHome />
              <span className="text-base">Home</span>
            </li>
            <li className="flex flex-col items-center">
              <MdMenu />
              <span className="text-base">Menu</span>
            </li>
            <li className="flex flex-col items-center">
              <RiGalleryFill />
              <span className="text-base">Gallery</span>
            </li>
            <li className="flex flex-col items-center">
              <MdPermContactCalendar />
              <span className="text-base">Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center mr-10">
        <ul className="flex gap-10 text-xl font-medium text-white">
          <li className="flex gap-2 items-center">
            <FaBook size={40} />
            <div className="flex flex-col">
              <span className="text-base">My</span>
              <span className="text-base">Bookings</span>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <FaCartArrowDown size={40} />
            <div className="flex flex-col">
              <span className="text-base">My</span>
              <span className="text-base">Cart</span>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <CgProfile size={40} />
            <div className="flex flex-col">
              <span className="text-base">My</span>
              <span className="text-base">Profile</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
