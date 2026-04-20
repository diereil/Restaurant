import React from "react";


const TableCard = () => {
    return (
        <div className="w-full max-w-[300px] bg-[#262626] p-5 rounded-xl border border-[#333]
        cursor-pointer">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-xl font-semibold">Table 1</h1>
                <p className="text-[#02ca3a] text-[10px] font-bold flex items-center bg-[#02ca3a]/10 px-2 py-1 rounded-md border border-[#02ca3a]/20">
                    Booked
                </p>
            </div>
            <div className="flex items-center justify-center my-5">
                <h1 className="bg-[#025cca] text-white rounded-full p-5 
                text-xl ">AM</h1>
            </div>
        </div>
    );
};

export default TableCard;  