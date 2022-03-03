import axios from "axios";
import { FILED_UPDATE } from "./Type";

const updateField = (fieldUpdate, event) => {
  return {
    type: FILED_UPDATE,
    payload: event,
  };
};
export const getUserProfile = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(updateField());
        resolve();
      }, 500);
    });
  };
};
export const saveImage = (body) => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:5000/uploadImage/saveImage", {
        body,
      })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
      .then((data) => {
        console.log(data.path);
      });
  };
};
