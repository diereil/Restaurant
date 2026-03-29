import React, { use } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {

    const navigate = useNavigate();

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-14 flex justify-around items-center border-t border-[#333]'>
            
            <button onClick={() => navigate('/')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[140px] h-10 rounded-[15px] border-none cursor-pointer text-sm'>
                <FaHome className="inline mr-2" size={18} /> <p className="font-medium">Home</p>
            </button>

            <button onClick={() => navigate('/orders')} className='flex items-center justify-center text-[#ababab] w-[140px] bg-transparent border-none cursor-pointer hover:text-white text-sm'>
                <MdOutlineReorder className="inline mr-2" size={18} /> <p className="font-medium">Orders</p>
            </button>

            <button onClick={() => navigate('/tables')} className='flex items-center justify-center text-[#ababab] w-[140px] bg-transparent border-none cursor-pointer hover:text-white text-sm'>
                <MdTableBar className="inline mr-2" size={18} /> <p className="font-medium">Tables</p>
            </button>

            <button className='flex items-center justify-center text-[#ababab] w-[140px] bg-transparent border-none cursor-pointer hover:text-white text-sm'>
                <CiCircleMore className="inline mr-2" size={18} /> <p className="font-medium">More</p>
            </button>

            <button className="absolute bottom-4 bg-[#F6B100] text-[#f5f5f5] rounded-full p-2.5 shadow-lg">
                <BiSolidDish size={24} />
            </button>
        </div>
    );
}

export default BottomNav;