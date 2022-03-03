import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, saveImage } from "./Action";
function Uploader() {
  const dispatch = useDispatch();
  const renderCnt = useRef(0);
  useEffect(() => {
    renderCnt.current = renderCnt.current + 1;
    console.log("use Effect all time, App - Uploader Count : ", renderCnt.current);
  });
  const loading = useSelector((state) => {
    return state.UploaderReducer.loading;
  });
  const [user, setUser] = useState({
    name: "",
    location: "",
    profilepic: "",
    skills: [],
    aboutme: "",
  });
  const [skill, setSkill] = useState("");
  const saveDetails = (e) => {
    console.log(user);
    dispatch(getUserProfile());
  };
  const uploadImage = (event) => {
    const files = event.target.files;
    const myImage = files[0];
    const imageType = /image.*/;

    if (!myImage.type.match(imageType)) {
      alert("Sorry, only images are allowed");
      return;
    }
    if (myImage.size > 100 * 1024 && false) {
      alert("Sorry, the max allowed size for images is 100KB");
      return;
    }
    const formData = new FormData();
    formData.append("myFile", files[0]);

    dispatch(saveImage(formData));
  };
  return (
    <div className="uploader">
      {loading}
      <div className="main__container">
        <legend>User Profile</legend>
        <div className="row">
          <div className="column">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="column">
            <input
              type="text"
              name="name"
              id="name"
              values={user.name}
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="skills">Add Skills</label>
          </div>
          <div className="column addSkill">
            <input type="text" name="skills" id="skills" value={skill} onChange={(event) => setSkill(event.target.value)} />
            <AddCircleOutlineTwoToneIcon
              className="addIcon"
              onClick={(event) => {
                if (skill) {
                  setUser({ ...user, skills: [...user.skills, skill] });
                }
                setSkill("");
              }}
            />
          </div>
        </div>
        {user.skills && user.skills.length ? (
          <div className="row">
            <div className="column">{`Skillset :  ${user.skills.join(",")}`}</div>
          </div>
        ) : null}
        <div className="row">
          <div className="column">
            <label htmlFor="location">Location</label>
          </div>
          <div className="column">
            <input
              type="text"
              name="location"
              id="location"
              value={user.location}
              onChange={(event) => setUser({ ...user, location: event.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="aboutme">About Me</label>
          </div>
          <div className="column">
            <input
              type="text"
              name="aboutme"
              id="aboutme"
              value={user.aboutme}
              onChange={(event) => setUser({ ...user, aboutme: event.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="uploadpic">Profile Pic</label>
          </div>
          <div className="column">
            <form id="uploadForm" method="post" encType="multipart/form-data">
              <input type="file" name="profilepic" id="profilepic" />
              <input type="submit" value="Upload!" onClick={uploadImage} />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input type="button" value="Save" onClick={saveDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Uploader;
