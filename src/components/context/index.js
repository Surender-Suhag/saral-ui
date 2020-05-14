
import { getComponents,changeComponentData,addNewComponentNode,addNewComponent } from "../../actions";
import {GET_COMPONENT_NODES,ADD_COMPONENT_NODE} from '../../actions/types';
export const treeContext = {
    components: {
      stateDataReducer: "component-nodes",
      getDataReducer: getComponents,
      changeDataReducer:changeComponentData,
      onAddNewFolderClick:addNewComponentNode,
      onAddNewFileClick:addNewComponent,
      getResourcesActionType:GET_COMPONENT_NODES,
      addResourcesActionType:ADD_COMPONENT_NODE
    },
  };