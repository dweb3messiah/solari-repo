import React from "react";

import Avatar from "@/assets/svg/user.svg";
import Img from "@/assets/svg/img.svg";
import Share from "@/assets/svg/share.svg";
import Comment from "@/assets/svg/comment.svg";
import Heart from "@/assets/svg/heart.svg";

const PostList = ({ post }) => {
  return (
    <>
      <div className="border-[0.1px] border-primary border-opacity-30 rounded-xl p-4 text-white">
        <div className="flex items-center gap-3">
          <Avatar className="w-[50px] h-[50px]" />
          <div className="">
            <p className="font-semibold text-xs mb-1">{post.name}</p>
            <p className="font-normal text-xs">{post.time}</p>
          </div>
        </div>

        <h3 className="font-bold text-[13px] pt-7 pb-4">{post.header}</h3>

        <p className="font-normal text-[13px] pb-6">{post.desc}</p>

        <Img />

        <div className="flex items-center gap-6 pt-5">
          <div className="flex items-center gap-2">
            <Heart />
            <p>{post.likeCount}</p>
          </div>
          <div className="flex items-center gap-1">
            <Comment />
            <p>{post.messageCount}</p>
          </div>
          <div>
            <Share />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
