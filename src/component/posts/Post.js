import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Comments from "../comments/Comments";
import "./style.scss";

function Post({ userId }) {
  // const counter = useRef({ [userId]: 0 });
  const posts = useSelector((state) => {
    // counter.current[userId] = counter.current[userId] + 1;
    // console.log(counter);
    return state.PostsReducer.posts;
  });

  return (
    <div className="post_container">
      {Array.isArray(posts[userId]) ? (
        posts[userId].length < 1 ? (
          <div className="user_posts_container">
            {" "}
            <div className="no_post">No Post</div>
          </div>
        ) : (
          posts[userId].map((post, index) => {
            return (
              <div key={post.id}>
                <div className="user_posts_container">
                  <div className="title">
                    {post.id} : {post.title}
                  </div>
                  <div className="details">{post.body}</div>
                  {/* {loadCommentLink ? (
                    <div className="comments" onClick={(e) => loadComments(e, post.id)}>
                      {" "}
                      Load comments...
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
                <Comments postId={post.id} />
              </div>
            );
          })
        )
      ) : null}
    </div>
  );
}

export default Post;
