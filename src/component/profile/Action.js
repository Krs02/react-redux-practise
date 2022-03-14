import _AXIOS from "../../app/axios";
import { LOAD_USER_PROFILE, LOAD_USER_PROFILE_SUCCESS, LOAD_USER_PROFILE_ERROR } from "./Type";

export const getUserProfiles = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "LOAD_USER_PROFILE",
    });

    _AXIOS("/users", "GET")
      .then((response) => {
        console.log(JSON.stringify(response));
        dispatch({
          type: LOAD_USER_PROFILE_SUCCESS,
          response,
        });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        //console.log("Finally");
      });
  };
};
