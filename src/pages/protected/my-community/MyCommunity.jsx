import React from "react";
import { Helmet } from "react-helmet-async";

import Paths from "@/routes/paths";
import CommuntyList from "@/components/ui/protected/my-community/CommuntyList";
import Spaces from "@/components/ui/protected/my-community/Spaces";

const MyCommunity = () => {
  return (
    <>
      <Helmet>
        <title>TribeX | Feed</title>
        <meta name="description" content="" />
        <link rel="canonical" href={Paths.MY_COMMUNITY} />
      </Helmet>

      <div className="min-h-screen">
        <div className="container">
          <div className="flex gap-4">
            {/* Left Section */}
            {/* <div className="hidden xl:w-1/4 xl:block sticky top-0 h-screen overflow-y-auto scroll-track-hide">
              <div className="flex flex-col gap-4">
                <AllCommunityCard />
              </div>
            </div> */}

            {/* Middle Section */}
            <div className="xl:w-1/2 flex-1 overflow-y-auto scroll-track-hide">
              <CommuntyList />
            </div>

            {/* Right Section (fixed) */}
            <div className="hidden xl:w-1/4 xl:block sticky top-0 min-h-screen overflow-y-auto scroll-track-hide border-l-[0.1px] border-l-primary border-opacity-30">
              <Spaces />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCommunity;
