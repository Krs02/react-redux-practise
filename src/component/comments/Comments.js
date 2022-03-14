import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments } from "./Action";
import "./style.scss";

function Comments({ postId }) {
  const comments = useSelector((state) => {
    return state.CommentsReducer.comments;
  });
  const dispatch = useDispatch();

  const loadComments = (e, postId) => {
    //console.log(postId);
    dispatch(fetchPostComments(postId));
  };
  return (
    <div className="comments_container">
      {!comments[postId] ? (
        <div className="comments" onClick={(e) => loadComments(e, postId)}>
          Load comments...
        </div>
      ) : null}

      {Array.isArray(comments[postId]) ? (
        comments[postId].length < 1 ? (
          <div className="no_comments">No comments on Post</div>
        ) : (
          comments[postId].map((comment, index) => {
            return (
              <div className="post_commment_container">
                <div className="comment_person_name">{comment.id + " - " + comment.name}</div>
                <div className="comment_content">{comment.body}</div>
              </div>
            );
          })
        )
      ) : null}
    </div>
  );
}

export default Comments;
