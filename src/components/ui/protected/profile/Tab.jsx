import React, { useState, useEffect } from "react";
import clsx from "clsx";

import PostTab from "@/components/ui/protected/profile/PostTab";
import WalletTab from "@/components/ui/protected/profile/WalletTab";
import DownloadsTab from "@/components/ui/protected/profile/Downloads";

const Tab = () => {
  const [tab, setTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab) : 0;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", tab);
  }, [tab]);

  const handleTabChange = (index) => {
    setTab(index);
  };

  const tabs = [
    { label: "Wallet", content: <WalletTab /> },
    { label: "My Posts", content: <PostTab /> },
    { label: "Downloads", content: <DownloadsTab /> },
  ];

  return (
    <>
      <div className="flex justify-center items-center bg-[#505050] rounded-[30px]">
        {tabs.map(({ label }, index) => (
          <div
            key={index}
            className="relative w-full flex justify-center items-center"
          >
            <button
              className={clsx(
                "relative h-[50px] text-shade1 text-xs font-medium"
              )}
              onClick={() => handleTabChange(index)}
            >
              {label}
            </button>

            {tab === index && (
              <div className="absolute -bottom-[1px] w-[57px] border border-[#1ACC20B8] bg-opacity-70 transform -translate-x-1/2 left-1/2 transition-all duration-300 ease-out" />
            )}
          </div>
        ))}
      </div>

      <div className="pt-1">{tabs[tab].content}</div>
    </>
  );
};

export default Tab;
