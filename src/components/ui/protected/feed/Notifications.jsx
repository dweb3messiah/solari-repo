import React from "react";

import Avatar from "@/assets/svg/superteam.svg";
import Premium from "@/assets/svg/premium.svg";

const Notifications = () => {
  return (
    <>
      <div className="text-white font-normal p-4 pt-6 flex flex-col min-h-screen">
        <h2 className="text-xl">Notifications</h2>

        {notifications.map((notification, i) => (
          <div key={i} className="flex items-center gap-4 pt-3">
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
              {notification.icon}
            </div>
            <p className="font-semibold text-[14px]">{notification.name}</p>
            <p className="font-normal text-[10px]">{notification.tag}</p>
          </div>
        ))}
      </div>
      {/* 
      <div className="flex flex-col justify-center pt-24 items-center">
        <Premium />
        <h3 className="text-white font-semibold text-base text-center py-3">
          Upgrade to Collosium pro to use <br /> premuim
        </h3>
        <button className="text-white font-bold text-lg rounded-[18px] px-6 py-1.5 bg-[#511393]">
          Explore
        </button>
      </div> */}
    </>
  );
};

export default Notifications;

const notifications = [
  {
    icon: <Avatar />,
    name: "@Nobleman",
    tag: "Tagged you. 1hr",
  },
  {
    icon: <Avatar />,
    name: "@Nobleman",
    tag: "Tagged you. 1hr",
  },
  {
    icon: <Avatar />,
    name: "@Nobleman",
    tag: "Tagged you. 1hr",
  },
];
