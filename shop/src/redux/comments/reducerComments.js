import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
} from "./type";

const initialStateComment = {
  isLoading: false,
  comments: [],
  error: "",
};

const commentReducer = (state = initialStateComment, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, isLoading: true };
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
        error: "",
      };
    case LOAD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;