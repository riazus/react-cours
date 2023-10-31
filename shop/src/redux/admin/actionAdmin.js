import { CHANGE_PHONE_COLOR } from "./type";

export const changePhoneColor = (color) => {
  return {
    type: CHANGE_PHONE_COLOR,
    payload: color,
  };
};
