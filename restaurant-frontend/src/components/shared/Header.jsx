import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-[#1a1a1a] w-full box-border border-b border-[#333]">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2 flex-1">
        <img src={logo} className="h-7 w-7" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      {/* CENTER: SEARCH BAR (Centered mathematically) */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-full max-w-[450px]">
        <FaSearch className="text-[#ababab] text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none border-none text-[#f5f5f5] w-full text-sm placeholder-[#ababab]"
        />
      </div>

      {/* RIGHT: USER DETAILS */}
      <div className="flex items-center justify-end gap-4 flex-1">
        <div className="bg-[#1f1f1f] rounded-full p-2.5 cursor-pointer hover:bg-[#2a2a2a] transition-colors">
          <FaBell className="text-[#f5f5f5] text-xl" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer shrink-0">
          <FaUserCircle className="text-[#f5f5f5] text-3xl" />
          <div className="flex flex-col items-start leading-tight">
            <h1 className="text-sm text-[#f5f5f5] font-semibold whitespace-nowrap">
              Reil Esdrelon
            </h1>
            <p className="text-[10px] text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;