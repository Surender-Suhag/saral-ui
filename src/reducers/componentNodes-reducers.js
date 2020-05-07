import { SUCCESS, Get_COMPONENT_TREE } from "../actions/types";

const initialState = {};

export const componentNodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_COMPONENT_TREE + "_" + SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
