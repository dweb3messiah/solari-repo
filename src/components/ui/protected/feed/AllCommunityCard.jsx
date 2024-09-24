import React from "react";
import { Link } from "react-router-dom";

import Paths from "@/routes/paths";

import SuperTeam from "@/assets/svg/superteam.svg";
import Raydium from "@/assets/svg/raydium.svg";
import Mango from "@/assets/svg/mango.svg";
import Backpack from "@/assets/svg/backpack.svg";
import Foundation from "@/assets/svg/Solana.svg";
import User from "@/assets/svg/user.svg";

const AllCommunityCard = () => {
  return (
    <>
      <div className="text-white font-semibold pt-16">
        <Link to={Paths.PROFILE} className="flex items-center gap-2 text-xs">
          <User className="rounded-full h-[50px] w-[50px]" />
          <div className="text-[12px]">
            <p className="mb-1">Sammy D</p>
            <p>@KOMBAT</p>
          </div>
        </Link>

        <h2 className="text-xl pt-6 pb-4">All Communities</h2>

        <div className="bg-secondary bg-opacity-50 flex flex-col py-10 space-y-8 p-5 max-w-[290px] rounded-[33px]">
          {communities.map((community, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                {community.icon}
              </div>
              <p className="font-medium text-base">{community.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCommunityCard;

const communities = [
  {
    label: "SuperTeam Nigeria",
    icon: <SuperTeam />,
  },
  {
    label: "Raydium",
    icon: <Raydium />,
  },
  {
    label: "Mango Markets",
    icon: <Mango />,
  },
  {
    label: "BackPack",
    icon: <Backpack />,
  },
  {
    label: "Solana Foundation",
    icon: <Foundation />,
  },
];
