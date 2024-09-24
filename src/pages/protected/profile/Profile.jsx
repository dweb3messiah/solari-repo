import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { Helmet } from "react-helmet-async";

import ProfileHeader from "@/components/ui/protected/profile/ProfileHeader";
import Tab from "@/components/ui/protected/profile/Tab";
import Paths from "@/routes/paths";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Haem | Profile</title>
        <meta name="description" content="" />
        <link rel="canonical" href={Paths.PROFILE} />
      </Helmet>
      <div className="bg-primary min-h-screen">
        <div className="container pt-4">
          <div className="flex gap-4 bg-primary">
            <div className="xl:w-1/2 flex-1 font-Public overflow-y-auto scroll-track-hide pb-6">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-shade5 text-xs font-medium mb-5"
              >
                <ArrowLeft />
                Back
              </button>

              <ProfileHeader />

              <Tab />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Profile;
