import { combineReducers } from "redux";
import { keywordReducer } from "./keywords-reducer";
import { componentNodesReducer } from "./componentNodes-reducers";

export const reducers = combineReducers({
  automationkeywords: keywordReducer,
  loading: loadingReducer,
  error: errorReducer,
  "component-nodes": componentNodesReducer,
});

function loadingReducer(state = {}, action) {
  const { type } = action;

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;
  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === "REQUEST",
  };
}

function errorReducer(state = {}, action) {
  const { type, payload } = action;

  const matches = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;
  const [, requestName, requestState] = matches;

  return {
    ...state,

    [requestName]: requestState === "FAILURE" ? payload.message : null,
  };
}
