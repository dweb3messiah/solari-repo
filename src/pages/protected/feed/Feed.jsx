import React from "react";
import { Helmet } from "react-helmet-async";

import Paths from "@/routes/paths";
import AllCommunityCard from "@/components/ui/protected/feed/AllCommunityCard";
import LatestYouLove from "@/components/ui/protected/feed/LatestYouLove";
import Notifications from "@/components/ui/protected/feed/Notifications";
import Post from "@/components/ui/protected/post/Post";

const Feed = () => {
  return (
    <>
      <Helmet>
        <title>Solari | Feed</title>
        <meta name="description" content="" />
        <link rel="canonical" href={Paths.FEED} />
      </Helmet>

      <div className="min-h-screen">
        <div className="container">
          <div className="flex gap-4">
            {/* Left Section */}
            <div className="hidden xl:w-1/4 xl:block sticky top-0 h-screen overflow-y-auto scroll-track-hide">
              <div className="flex flex-col gap-4">
                <AllCommunityCard />
              </div>
            </div>

            {/* Middle Section */}
            <div className="xl:w-1/2 flex-1 overflow-y-auto scroll-track-hide">
              <Post />
            </div>

            {/* Right Section (fixed) */}
            <div className="hidden xl:w-1/4 xl:block sticky top-0 h-full overflow-y-auto scroll-track-hide border-l-[0.1px] border-l-primary border-opacity-30">
              <LatestYouLove />

              <Notifications />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
