import React, { useState } from "react";
import Navbar from "./navbar";
import AllCampaign from "./allCampaign";
import PendingCampaign from "./pendingCampaign";

const Moderator = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  let viewToRender;
  viewToRender = (
    <div className="w-full flex flex-col items-center border-0">
      <div className="flex space-x-4 bg-gradient-to-b from-gray-400 to-gray-300 border  p-2 py-1  md:p-2 mx-2 rounded-2xl  md:w-2/4 lg:w-2/4 xl:w-2/6 text-sm">
        <button
          onClick={() => handleTabClick(1)}
          className={`${
            activeTab === 1 ? "bg-white " : "bg-transparent text-gray-700"
          } p-2 py-2 rounded-t-lg flex-1 text-center hover:bg-white transition-colors outline-none border-0 focus:outline-none whitespace-nowrap`}
        >
          Pending Campaigns
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`${
            activeTab === 2 ? "bg-white " : "bg-transparent text-gray-700"
          } p-2 py-2 flex-1 text-center hover:bg-white transition-colors outline-none border-0 focus:outline-none whitespace-nowrap`}
        >
          All Campaigns
        </button>
      </div>
      <div className="p-2 md:p-4 rounded-b-lg w-full    ">
        {activeTab === 1 && <PendingCampaign />}
        {activeTab === 2 && <AllCampaign />}
        {/* {activeTab === 3 && <ClosedPage />} */}
      </div>
    </div>
  );
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="w-full rounded-xl shadow-lg bg-white p-4">
          {viewToRender}
        </div>
      </div>
    </>
  );
};

export default Moderator;
