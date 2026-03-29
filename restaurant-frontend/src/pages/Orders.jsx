import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrdersCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton"; 

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-3.5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-9 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wider">Orders</h1>
        </div>
        
        {/* BUTTON GROUP */}
        <div className="flex items-center gap-3 bg-[#1a1a1a] p-1.5 rounded-[12px] border border-[#333]">
          
          <button 
            onClick={() => setStatus("all")} 
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "all" ? "bg-[#383838] text-[#f5f5f5] shadow-md" : "text-[#ababab] hover:text-white"
            }`}
          >
            All
          </button>

          <button 
            onClick={() => setStatus("progress")} 
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "progress" ? "bg-[#383838] text-[#f5f5f5] shadow-md" : "text-[#ababab] hover:text-white"
            }`}
          >
            In Progress
          </button>

          <button 
            onClick={() => setStatus("ready")} 
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "ready" ? "bg-[#383838] text-[#f5f5f5] shadow-md" : "text-[#ababab] hover:text-white"
            }`}
          >
            Ready
          </button>

          <button 
            onClick={() => setStatus("completed")} 
            className={`text-sm rounded-[10px] px-6 py-2 font-semibold transition-all ${
              status === "completed" ? "bg-[#383838] text-[#f5f5f5] shadow-md" : "text-[#ababab] hover:text-white"
            }`}
          >
            Completed
          </button>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-9
        overflow-y-scroll scrollbar-hide h-[calc(100vh-12rem)] pb-28">
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;