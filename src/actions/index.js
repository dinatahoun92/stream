import streams from "../apis/streams";
import history from "../history";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const signInUser = userName => {
  return {
    type: "SIGN_IN_USER",
    payload: userName
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
export const createStream = formValues => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const userName = getState().auth.userName;
  const response = await streams.post(
    "https://my-api-1992.herokuapp.com/streams",
    {
      ...formValues,
      userId,
      userName
    }
  );
  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push(`/`);
};
export const fetchStreams = () => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const userName = getState().auth.userName;
  const response = await streams.get(
    "https://my-api-1992.herokuapp.com/streams",
    userId,
    userName
  );
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};
export const fetchStream = id => async dispatch => {
  const response = await streams.get(
    `https://my-api-1992.herokuapp.com/streams/${id}`
  );
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(
    `https://my-api-1992.herokuapp.com/streams/${id}`,
    formValues
  );
  dispatch({ type: "EDIT_STREAM", payload: response.data });
  history.push(`https://my-api-1992.herokuapp.com/streams/${id}`);
};
export const deleteStream = id => async dispatch => {
  const response = await streams.delete(
    `https://my-api-1992.herokuapp.com/streams/${id}`
  );
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push("/");
};
