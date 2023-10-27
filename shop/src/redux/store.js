import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import commentReducer from "./comments/reducerComments";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  phone: phoneReducer,
  television: tvReducer,
  comments: commentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
