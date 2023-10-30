const BUY_PHONE = "BUY_PHONE";
const BUY_PHONE_GOLD = "BUY_PHONE_GOLD";
const BUY_TV = "BUY_TV";

const actionBuyPhone = () => {
  return {
    type: BUY_PHONE,
  };
};

const actionBuyPhoneGold = () => {
  return {
    type: BUY_PHONE_GOLD,
  };
};

const actionBuyTv = () => {
  return {
    type: BUY_TV,
  };
};

const phoneInitialeState = {
  phones: 20,
  goldPhones: 5,
};

const tvInitialState = {
  tv: 15,
};

const reducerPhone = (state = phoneInitialeState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return { ...state, phones: state.phones - 1 };
    case BUY_PHONE_GOLD:
      return { ...state, goldPhones: state.goldPhones - 1 };
    default:
      return state;
  }
};

const reducerTv = (state = tvInitialState, action) => {
  switch (action.type) {
    case BUY_TV:
      return { ...state, tv: state.tv - 1 };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  phone: reducerPhone,
  tv: reducerTv,
});

const store = Redux.createStore(rootReducer);

const availablePhones = document.getElementById("count");
const availableGoldPhones = document.getElementById("count-gold");
const availableTv = document.getElementById("count-tv");

availablePhones.innerHTML = store.getState().phone.phones;
availableGoldPhones.innerHTML = store.getState().phone.goldPhones;
availableTv.innerHTML = store.getState().tv.tv;

const buyPhoneBtn = document.getElementById("buy-phone");
const buyGoldPhoneBtn = document.getElementById("buy-gold-phone");
const buyTvBtn = document.getElementById("buy-tv");

buyPhoneBtn.addEventListener("click", () => {
  store.dispatch(actionBuyPhone());
});
buyGoldPhoneBtn.addEventListener("click", () => {
  store.dispatch(actionBuyPhoneGold());
});
buyTvBtn.addEventListener("click", () => {
  store.dispatch(actionBuyTv());
});

store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phone.phones;
  availableGoldPhones.innerHTML = store.getState().phone.goldPhones;
  availableTv.innerHTML = store.getState().tv.tv;
});
