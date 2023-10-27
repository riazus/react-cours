import { BUY_TV } from "./type";

export const buyTv = (count) => {
  return {
    type: BUY_TV,
    payload: count
  };
};
