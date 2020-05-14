import { CHANGE_SELECTED_NODE } from "./types";


export const changeSelectedNode = (nodeId,nodeType) => ({
  type: CHANGE_SELECTED_NODE,
  payload: {
    nodeId,
    nodeType
  },
});
