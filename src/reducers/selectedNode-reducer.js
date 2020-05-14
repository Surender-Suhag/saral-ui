import { CHANGE_SELECTED_NODE } from "../actions/types";
const initialState = {
  nodeId:'',
  nodeType:''
};

export const changeSelectedNode = (state = initialState, action) =>
  action.type === CHANGE_SELECTED_NODE ? action.payload : state;
