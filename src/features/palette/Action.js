import { BG_COLOR_UPDATE, TEXT_COLOR_UPDATE, NOTIFICATION } from "./Type";

export const triggerBGChange = (payload) => {
  return {
    type: BG_COLOR_UPDATE,
    payload,
  };
};
export const triggerTextChange = (payload) => {
  return {
    type: TEXT_COLOR_UPDATE,
    payload,
  };
};
export const notify = () => {
  return {
    type: NOTIFICATION,
    payload: null,
  };
};
