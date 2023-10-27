import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
} from "./type";
import axios from "axios";

const loadApiComment = () => {
  return {
    type: LOAD_COMMENTS,
  };
};

const loadApiCommentSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const loadApiCommentError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiComment());
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch(loadApiCommentSuccess(res.data));
      })
      .catch((error) => {
        dispatch(loadApiCommentError(error.message));
      });
  };
};
