import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrdersCard = () => {
    return (
        /* Changed bg to #1a1a1a to match his darker design and removed fixed width for better grid layout */
        <div className="w-full max-w-[450px] bg-[#262626] p-5 rounded-xl mb-4 border border-[#333]">
            <div className="flex items-center gap-4">
                {/* AM Badge - Matches his rounded style */}
                <button className="bg-[#f6b100] px-3 py-3 text-xs font-bold rounded-lg border-none shadow-md">
                    AM
                </button>

                <div className="flex items-center justify-between w-full">
                    {/* Name and Order Info */}
                    <div className="flex flex-col items-start leading-tight">
                        <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">
                            Reil
                        </h1>
                        <p className="text-[#ababab] text-[11px] mt-1">#101/ Dine in</p>
                    </div>

                    {/* Status Section - Fixed background and opacity to match his "Ready" tag */}
                    <div className="flex flex-col items-end gap-1">
                        <div className="text-[#02ca3a] text-[10px] font-bold flex items-center bg-[#02ca3a]/10 px-2 py-1 rounded-md border border-[#02ca3a]/20">
                            <FaCheckDouble className="mr-1" /> Ready
                        </div>
                        <p className="text-[#ababab] text-[10px] flex items-center mt-1">
                            <FaCircle className="mr-1 text-[#02ca3a]" size={6} /> Ready to serve
                        </p>
                    </div>
                </div>
            </div>

            {/* DateTime and Item Count - Matches his muted style */}
            <div className="flex justify-between items-center mt-6 text-[#888] text-[11px] font-medium">
                <p>January 18, 2026 08:32pm</p>
                <p className="text-[#f5f5f5]">8 Items</p>
            </div>

            {/* Divider - Thin and subtle */}
            <hr className="w-full mt-4 border-t border-[#333]" />

            {/* Total Section */}
            <div className="flex items-center justify-between mt-4">
                <h1 className="text-[#f5f5f5] text-base font-bold uppercase tracking-tight">Total</h1>
                <p className="text-[#f5f5f5] text-xl font-bold">₱ 250.00</p>
            </div>
        </div>
    );
};

export default OrdersCard;