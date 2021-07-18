export const setTopNewPosts = (data) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_TOPNEWPOSTS", payload: data });
  };
};
