import { CHANGE_PHONE_COLOR } from "../admin/type";
import { BUY_PHONE } from "./type";
import { produce } from "immer";

const initialStatePhone = {
  brand: "Apple iPhone",
  infos: {
    version: 11,
    capacity: 64,
    color: "red",
    screen: "Reetina HD",
  },
  phones: 5,
};

const phoneReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return produce(state, (draft) => {
        draft.phones -= action.payload;
      });
    case CHANGE_PHONE_COLOR:
      return produce(state, (draft) => {
        draft.infos.color = action.payload;
      });
    default:
      return state;
  }
};

export default phoneReducer;
