import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-10 px-20 border-black border-2">
      <div class="p-1 border-cyan-900 border-2">Logo of TheTox</div>
      <div class="grid grid-cols-4 md:grid-cols-8 justify-items-end  border-cyan-900 border-2">
        <div class="md:col-start-5 p-2 border-cyan-900 border-2"><AiOutlinePlus/></div>
        <div class="p-2 border-cyan-900 border-2"><BsBell/></div>
        <div class="p-2 rounded-full ring-2 ring-fuchsia-600 ">Pict</div>
        <div class="p-2 border-cyan-900 border-2"><MdOutlineKeyboardArrowDown/></div>
      </div>
      {/* <div class="grid grid-cols-8 justify-items-end  border-cyan-900 border-2">
        <div class="col-start-5 p-2 border-cyan-900 border-2"><AiOutlinePlus/></div>
        <div class="p-2 border-cyan-900 border-2"><BsBell/></div>
        <div class="p-2 rounded-full ring-2 ring-fuchsia-600 ">Pict</div>
        <div class="p-2 border-cyan-900 border-2"><MdOutlineKeyboardArrowDown/></div>
      </div> */}
    </div>
  );
};

export default Navbar;
