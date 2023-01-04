import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-10 px-20">
      <div>Logo of TheTox</div>
      <div className="grid grid-cols-4 md:grid-cols-8 justify-items-end">
        <div className="md:col-start-5 "><AiOutlinePlus/></div>
        <div><BsBell/></div>
        <div className="rounded-full ring-2 ring-fuchsia-600 ">Pict</div>
        <div><MdOutlineKeyboardArrowDown/></div>
      </div>
    </div>
  );
};

export default Navbar;
