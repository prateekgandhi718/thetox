import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-10 px-20  ">
      <Link to="/" className="flex items-center max-w-min  ">TheTox</Link>

      <div className="grid grid-cols-4 md:grid-cols-8 justify-items-end  ">
        <div className="flex items-center justify-center md:col-start-5  ">
          <AiOutlinePlus />
        </div>
        <Link to="/notification" className="flex items-center justify-center  ">
          <BsBell />
        </Link>
        <Link to="/user" className="flex items-center justify-center  ">
          <img
            className="w-6 h-6 rounded-full"
            src={require("../Designs/ProfilePic.jpg")}
            alt="Bordered avatar"
          />
        </Link>
        <div className="flex items-center justify-center  ">
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
