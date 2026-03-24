import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
    return (
        /* Increased h-16 to h-20 for a bit more breathing room and added items-center */
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-15 flex justify-around items-center border-t border-[#333]'>
            
            {/* HOME - Active State */}
            <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] h-12 rounded-[20px] border-none cursor-pointer'>
                <FaHome className="inline mr-2" size={20} /> <p className="font-medium">Home</p>
            </button>

            {/* ORDERS - Added bg-transparent and border-none to fix the white box */}
            <button className='flex items-center justify-center text-[#ababab] w-[200px] bg-transparent border-none cursor-pointer hover:text-white'>
                <MdOutlineReorder className="inline mr-2" size={20} /> <p className="font-medium">Orders</p>
            </button>

            {/* TABLES */}
            <button className='flex items-center justify-center text-[#ababab] w-[200px] bg-transparent border-none cursor-pointer hover:text-white'>
                <MdTableBar className="inline mr-2" size={20} /> <p className="font-medium">Tables</p>
            </button>

            {/* MORE */}
            <button className='flex items-center justify-center text-[#ababab] w-[200px] bg-transparent border-none cursor-pointer hover:text-white'>
                <CiCircleMore className="inline mr-2" size={20} /> <p className="font-medium">More</p>
            </button>

            {/* DISH BUTTON - Added flex, border-none, and set icon size to 28 */}
            <button className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 item-center">
                <BiSolidDish size={30} />
            </button>
        </div>
    );
}

export default BottomNav;