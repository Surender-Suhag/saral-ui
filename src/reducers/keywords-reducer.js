import { SUCCESS, GET_KEYWORDS } from "../actions/types";

const initialState = [];

export const keywordReducer = (state = initialState, action) => {
  let { type, payload } = action;
  if (type !== (GET_KEYWORDS + "_" + SUCCESS)) return state;
  return payload.keywords;
};
