export const setPosts = (data) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_POSTS", payload: data });
  };
};
