import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
    return (
        <div className="flex items-center gap-5 mb-3">
            {/* AM Badge */}
            <button className="bg-[#f6b100] p-3 text-sm font-bold rounded-xl border-none shadow-lg">
                AM
            </button>

            <div className="flex items-center justify-between w-full">
                {/* Name and Items */}
                <div className="flex flex-col items-start leading-tight">
                    <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">
                        Reil
                    </h1>
                    <p className="text-[#ababab] text-xs">8 Items</p>
                </div>

                <div className="flex justify-center">
                    <span className="text-[#f6b100] text-[10px] font-bold rounded-lg px-3 py-1.5 inline-block leading-none uppercase tracking-tight table-border-fix">
                        Table No: 3
                    </span>
                </div>
                

                {/* Status Section */}
                <div className="flex flex-col items-end gap-1">
                    <p className="text-[#02ca3a] text-sm font-bold flex items-center">
                        <FaCheckDouble className="mr-1" /> Ready
                    </p>
                    <p className="text-[#ababab] text-[10px] flex items-center">
                        <FaCircle className="mr-1 text-[#02ca3a]" size={8} /> Ready to serve
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderList;