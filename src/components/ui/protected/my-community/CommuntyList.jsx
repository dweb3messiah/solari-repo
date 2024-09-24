import React from "react";

import { communities } from "../../../../constants/constant";

import User from "@/assets/svg/user.svg";
import Backpack from "@/assets/svg/backpack.svg";

const CommuntyList = () => {
  return (
    <>
      <div className="pt-16 pb-8 text-white flex items-center md:gap-x-56">
        <div className="flex items-center gap-2 text-xs">
          <User className="rounded-full h-[50px] w-[50px]" />
          <div className="text-[12px]">
            <p className="mb-1">Sammy D</p>
            <p>@KOMBAT</p>
          </div>
        </div>

        <h2 className="text-lg">My Communities Forums</h2>
      </div>

      <div className="border border-[#FFFFFF4D] rounded-xl overflow-y-auto scroll-track-hide p-4">
        <div className="flex flex-col gap-4">
          {communities.map((community, i) => (
            <div
              key={i}
              className="text-white flex items-center justify-between hover:bg-[#51139387] bg-opacity-50 cursor-pointer rounded-2xl p-4"
            >
              <div className="flex items-center gap-4">
                <Backpack className="rounded-full h-[60px] w-[60px]" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-xl">{community.name}</h3>
                    <p className="font-normal text-sm">{community.time}</p>
                  </div>
                  <p className="text-sm font-normal mt-1">{community.desc}</p>
                </div>
              </div>

              <div>
                <div class="mt-3 flex -space-x-2 overflow-hidden">
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>{" "}
                <p className="font-normal text-xs mt-1">10.7k posts</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommuntyList;
