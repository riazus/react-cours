import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOK } from "../constants";

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

export const deleteAllBook = () => {
  return {
    type: DELETE_ALL_BOOK,
  };
};
