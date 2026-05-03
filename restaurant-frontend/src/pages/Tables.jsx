import React from "react";
import ButtomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";

const Tables = () => {
  const [status, setStatus] = React.useState("all");

  // 🔥 SAMPLE DATA (you can replace later with backend)
  const [tables, setTables] = React.useState([
    { id: 1, name: "Table 1", available: false },
    { id: 2, name: "Table 2", available: true },
    { id: 3, name: "Table 3", available: true },
    { id: 4, name: "Table 4", available: false },
    { id: 5, name: "Table 5", available: true },
    { id: 6, name: "Table 6", available: false },
  ]);

  // 🔥 TOGGLE FUNCTION
  const toggleAvailability = (id) => {
    setTables((prev) =>
      prev.map((table) =>
        table.id === id
          ? { ...table, available: !table.available }
          : table
      )
    );
  };

  // 🔥 FILTER LOGIC
  const filteredTables =
    status === "all"
      ? tables
      : tables.filter((table) => !table.available);

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-3.5rem)] overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-9 py-4 mt-2">
        
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wider">
            Tables
          </h1>
        </div>

        {/* Filter Buttons */}
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

      {/* Tables Grid */}
      <div className="flex flex-wrap gap-5 p-10">
        {filteredTables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            onToggle={toggleAvailability}
          />
        ))}
      </div>

      <ButtomNav />
    </section>
  );
};

export default Tables;