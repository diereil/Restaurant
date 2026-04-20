import React from "react";
import ButtomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";

const Tables = () => {
  const [status, setStatus] = React.useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Header Container */}
      <div className="flex items-center justify-between px-9 py-4 mt-2">
        {/* Left Side: Back Button and Title */}
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wider">
            Tables
          </h1>
        </div>

        {/* Right Side: All and Booked Buttons */}
        <div className="flex items-center gap-3 bg-[#1a1a1a] p-1.5 rounded-[12px] border border-[#333]">
          <button
            onClick={() => setStatus("all")}
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "all"
                ? "bg-[#383838] text-[#f5f5f5] shadow-md"
                : "text-[#ababab] hover:text-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setStatus("booked")}
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "booked"
                ? "bg-[#383838] text-[#f5f5f5] shadow-md"
                : "text-[#ababab] hover:text-white"
            }`}
          >
            Booked
          </button>
        </div>
      </div>

      {/* Content Area: TableCard sits under the title */}
      <div className="flex flex-wrap  gap-5 p-10   ">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />

      </div>

      <ButtomNav />
    </section>
  );
};

export default Tables;