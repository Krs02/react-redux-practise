import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FaceIcon from "@mui/icons-material/Face";
import "./style.scss";
import { getUserProfiles } from "./Action";
import { fetchUserPosts } from "../posts/Action";
import Post from "../posts/Post";

function Profile() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.UserProfileReducer.users;
  });
  useEffect(() => {
    dispatch(getUserProfiles());
  }, []);

  const getUserPosts = (event, user) => {
    console.log(user.id);
    dispatch(fetchUserPosts(user));
  };
  const randomFaceColor = () => {
    const getRandom = () => {
      const min = 0,
        max = 255;
      return Math.floor(Math.random() * (max - min) + min);
    };
    let color = `#${Number(getRandom()).toString(16)}${Number(getRandom()).toString(16)}${Number(getRandom()).toString(16)}`;
    return color;
  };

  return (
    <div className="profile_container">
      <div className="users">
        {Array.isArray(users)
          ? users.map((user, index) => {
              return (
                <div>
                  <div className="user_row">
                    <div className="face_icon">
                      <FaceIcon
                        className={`${user.status}`}
                        sx={{ fontSize: 40, color: randomFaceColor() }}
                        onClick={(e) => getUserPosts(e, user)}
                      />
                    </div>
                    <div className="details_section">
                      <div className="name">{user.name}</div>
                      <div className="email">{user.email}</div>
                      <div className={`status ${user.status}`}>{user.status}</div>
                    </div>
                  </div>
                  <Post userId={user.id} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Profile;
