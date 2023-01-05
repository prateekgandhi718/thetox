import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-10 px-20">
      <Link to = "/">Logo of TheTox</Link>
      <div className="grid grid-cols-4 md:grid-cols-8 justify-items-end">
        <div className="md:col-start-5 "><AiOutlinePlus/></div>
        <Link to="/notification"><BsBell/></Link>
        <Link to="/user" className="rounded-full ring-2 ring-fuchsia-600 ">Pict</Link>
        <div><MdOutlineKeyboardArrowDown/></div>
      </div>
    </div>
  );
};

export default Navbar;
