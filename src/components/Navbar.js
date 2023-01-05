import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-10 px-20">
      <Link to="/" className="flex items-center">Logo of TheTox</Link>
      <div className="grid grid-cols-4 md:grid-cols-8 justify-items-end">
        <div className="flex items-center justify-center md:col-start-5 ">
          <AiOutlinePlus />
        </div>
        <Link to="/notification" className="flex items-center justify-center">
          <BsBell />
        </Link>
        <Link to="/user" className="flex items-center justify-center">
          <img
            class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={require("../Designs/ProfilePic.jpg")}
            alt="Bordered avatar"
          />
        </Link>
        <div className="flex items-center justify-center">
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
