import React from "react";

import PostList from "@/components/ui/protected/post/PostList";
import { post } from "@/constants/constant";

const Post = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-16">
        {post?.map((post) => (
          <PostList key={post.postId} post={post} />
        ))}
      </div>
    </>
  );
};

export default Post;
