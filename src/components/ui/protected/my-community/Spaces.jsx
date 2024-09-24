import React from "react";

import SuperTeam from "@/assets/svg/superteam.svg";
import Raydium from "@/assets/svg/raydium.svg";
import Mango from "@/assets/svg/mango.svg";
import Backpack from "@/assets/svg/backpack.svg";
import Foundation from "@/assets/svg/Solana.svg";
import User from "@/assets/svg/user.svg";

const Spaces = () => {
  return (
    <>
      <div className="pt-16 p-4 border-b-[0.1px] border-b-primary border-opacity-30">
        <h2 className="text-white text-center">
          Creators , Developers & <br /> NFTS activities
        </h2>
      </div>

      <div className="flex flex-col gap-4 text-white p-4 pt-5">
        {communities.map((community, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {community.icon}
            </div>
            <p className="font-medium text-base">{community.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Spaces;

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
