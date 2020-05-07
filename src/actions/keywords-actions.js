import { saralApi } from "./api";
import { SUCCESS, FAILURE, REQUEST, GET_KEYWORDS } from "./types";

export const getKeywords = () => async (dispatch) => {
  let response;

  dispatch({
    type: GET_KEYWORDS + "_" + REQUEST,
    payload: {},
  });

  try {
    response = await saralApi.get("/keywords");
    dispatch({
      type: GET_KEYWORDS + "_" + SUCCESS,
      payload: {
        keywords: response.data,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_KEYWORDS + "_" + FAILURE,
      payload: {
        message: err.toString(),
      },
    });
  }
  
};
