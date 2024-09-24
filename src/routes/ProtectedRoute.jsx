import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/layout/Layout";
import Paths from "@/routes/paths";

const Feed = lazy(() => import("@/pages/protected/feed/Feed"));
const MyCommunity = lazy(() =>
  import("@/pages/protected/my-community/MyCommunity")
);
const Chats = lazy(() => import("@/pages/protected/chats/Chats"));
const GeneralBoard = lazy(() =>
  import("@/pages/protected/general-board/GeneralBoard")
);
const MarketPlace = lazy(() =>
  import("@/pages/protected/market-place/MarketPlace")
);
const WorkPlace = lazy(() => import("@/pages/protected/work-space/WorkSpace"));
const Specs = lazy(() => import("@/pages/protected/specs/Specs"));
const Profile = lazy(() => import("@/pages/protected/profile/Profile"));

const ProtectedRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path={Paths.HOME}
            element={<Navigate to={Paths.FEED} replace="true" />}
          />
          <Route path={Paths.FEED} element={<Feed />} />
          <Route path={Paths.MY_COMMUNITY} element={<MyCommunity />} />
          <Route path={Paths.CHAT} element={<Chats />} />
          <Route path={Paths.GENERAL_BOARD} element={<GeneralBoard />} />
          <Route path={Paths.MARKET_PLACE} element={<MarketPlace />} />
          <Route path={Paths.WORK_SPACE} element={<WorkPlace />} />
          <Route path={Paths.SPECS} element={<Specs />} />
          <Route path={Paths.PROFILE} element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
};

export default ProtectedRoute;
