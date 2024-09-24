import React from "react";

// import emojiIcon from "@/assets/img/emojiface.png";

const ProfileHeader = () => {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-avatar_bg_gradient h-[168px] w-full rounded-lg relative"></div>

        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <div className="relative -top-14 ml-5">
              <div className="bg-red-600 h-[180px] w-[180px] rounded-full"></div>
            </div>

            <div className="mt-3">
              <p className="text-shade5 text-xs font-medium">name</p>
              <p className="text-shade5 text-xs font-medium">username</p>
              <p className="text-shade5 text-xs font-medium">description</p>
              <p className="text-shade5 text-xs font-medium">state</p>

              {/* <div className="text-shade5 text-xs font-medium pt-3">
                <p>JOINED</p>
                <p className="mt-1">date</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
