import {
  SUCCESS,
  GET_COMPONENT_NODES,
  SET_COMPONENT_NODES,
  ADD_COMPONENT_NODE,
} from "../actions/types";

const initialState = {
  data: {},
};

export const componentNodesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPONENT_NODES + "_" + SUCCESS:
      return { data: payload.data };

    case SET_COMPONENT_NODES:
      return { ...state, data: payload.data };
    case ADD_COMPONENT_NODE + "_" + SUCCESS:
      return { ...state, data: payload.data };
    default:
      return state;
  }
};
