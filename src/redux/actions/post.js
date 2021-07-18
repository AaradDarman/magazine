export const setPost = (id) => {
  return async (dispatch, getState) => {
    const posts = [...getState().posts];
    console.log("state.posts");
    console.log(posts);
    const post = await posts.find((post) => post._id === id);
    await dispatch({ type: "SET_POST", payload: post });
  };
};

export const clearPost = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_POST", payload: {} });
  };
};
