import { SUCCESS, GET_KEYWORDS } from "../actions/types";

const initialState = [];

export const keywordReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(type);
  console.log(payload);
  if (type !== (GET_KEYWORDS + "_" + SUCCESS)) return state;
  console.log('will update keywords');
  return payload.keywords;
};
