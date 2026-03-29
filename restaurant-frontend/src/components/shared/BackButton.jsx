import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center justify-center bg-[#1a1a1a] bg-[#025cca] p-2.5 rounded-full text-[#f5f5f5] transition-all border border-[#333] shadow-md group"
        >
            <IoArrowBackOutline className="text-xl group-active:scale-90 transition-transform" />
        </button>
    );
}

export default BackButton;