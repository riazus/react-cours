import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";
import axios from "axios";

const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};

const fetchBooksSuccess = (data) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};

const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error,
  };
};

export const fetchBooks = (subject) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading());

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${subject}&maxResults=20`
      )
      .then((res) => {
        console.log(res);
        dispatch(fetchBooksSuccess(res.data.items));
      })
      .catch((e) => {
        dispatch(fetchBooksError(e.message));
      });
  };
};
