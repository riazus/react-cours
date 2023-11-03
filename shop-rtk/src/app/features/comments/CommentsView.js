import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentsSlice";

const CommentsView = () => {
  const commentSlice = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments()); // AsyncThunkFunction()
  }, []);

  return (
    <>
      <h2>Comments</h2>
      {commentSlice.isLoading ? (
        <p style={{ textAlign: "center" }}>Vueillez Patience...</p>
      ) : commentSlice.error ? (
        <p style={{ color: "red", textAlign: "center" }}>
          {commentSlice.error}
        </p>
      ) : (
        commentSlice.comments.map(({ body, email, id, name }) => {
          return (
            <div className="comments" key={id}>
              <p>Nom: {name}</p>
              <p>Email: {email}</p>
              <p>Comment: {body}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default CommentsView;
