import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-[#1a1a1a] w-full box-border border-b border-[#333]">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2 flex-1">
        <img src={logo} className="h-6 w-6" alt="restro logo" />
        <h1 className="text-base font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      {/* CENTER: SEARCH BAR */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[12px] px-4 py-1.5 w-full max-w-[400px]">
        <FaSearch className="text-[#ababab] text-xs" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none border-none text-[#f5f5f5] w-full text-xs placeholder-[#ababab]"
        />
      </div>

      {/* RIGHT: USER DETAILS */}
      <div className="flex items-center justify-end gap-4 flex-1">
        <div className="bg-[#1f1f1f] rounded-full p-2 cursor-pointer hover:bg-[#2a2a2a] transition-colors">
          <FaBell className="text-[#f5f5f5] text-lg" />
        </div>

        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <FaUserCircle className="text-[#f5f5f5] text-2xl" />
          <div className="flex flex-col items-start leading-tight">
            <h1 className="text-xs text-[#f5f5f5] font-semibold whitespace-nowrap">
              Reil Esdrelon
            </h1>
            <p className="text-[9px] text-[#ababab] font-medium uppercase">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;