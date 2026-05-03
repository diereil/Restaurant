import React from "react";

const TableCard = ({ table, onToggle }) => {
  return (
    <div className="w-full max-w-[300px] bg-[#262626] p-5 rounded-xl border border-[#333]">
      
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          {table.name}
        </h1>

        <p
          className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
            table.available
              ? "text-[#02ca3a] bg-[#02ca3a]/10 border-[#02ca3a]/20"
              : "text-red-400 bg-red-400/10 border-red-400/20"
          }`}
        >
          {table.available ? "Available" : "Booked"}
        </p>
      </div>

      {/* Avatar */}
      <div className="flex items-center justify-center my-5">
        <h1 className="bg-[#025cca] text-white rounded-full p-5 text-xl">
          AM
        </h1>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => onToggle(table.id)}
        className="w-full mt-2 py-2 rounded-lg bg-[#444] text-white hover:bg-[#666] transition"
      >
        Toggle Status
      </button>
    </div>
  );
};

export default TableCard;