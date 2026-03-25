import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/shared/home/Greetings";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import MiniCart from "../components/shared/home/MiniCard";
import RecentOrders from "../components/shared/home/RecentOrders";
import PopularDishes from "../components/shared/home/PopularDishes";

const Home = () => {
  return (
      <section className="bg-[#1f1f1f] h-[calc(100vh-3.5rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-[3]">
          <Greetings />
          <div className="flex items-center w-full gap-4 px-8 mt-4">
            <MiniCart title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6}/>
            <MiniCart title="In Progress" icon={<GrInProgress />} number={512} footerNum={3.6} />
          </div>
          <RecentOrders />
        </div>
          
        {/* Right Div */}
        <div className="flex-[2]">
          <PopularDishes />
        </div>

        <BottomNav />
      </section>
  );
};

export default Home;