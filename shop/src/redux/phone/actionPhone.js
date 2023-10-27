import { BUY_PHONE } from "./type";

export const buyPhone = (count) => {
  return {
    type: BUY_PHONE,
    payload: count,
  };
};
