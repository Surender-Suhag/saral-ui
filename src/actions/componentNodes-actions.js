import {saralApi} from './api';
import { SUCCESS, FAILURE, REQUEST, GET_COMPONENT_NODES, SET_COMPONENT_NODES,ADD_COMPONENT_NODE } from "./types";
import JsonTreeStructureUtil from '../util/JsonTreeStructureUtil';
// import moduleName from '../components/context';
export const getComponents = () => async dispatch => {

    dispatch({
        type: GET_COMPONENT_NODES +"_" + REQUEST,
        payload:{}
    });

    try {
        const response = await saralApi.get("/component-nodes");
        dispatch({
            type:GET_COMPONENT_NODES + "_" + SUCCESS,
            payload: {
                data:response.data
            }
        })
    }catch (error){
        dispatch({
            type: GET_COMPONENT_NODES+ "_" + FAILURE,
            payload : {
                message:  error.toString()
            }
        })
    }
}

export const addNewComponentNode = (componentName) => async (dispatch,getState) => {

    const jsonOp = JsonTreeStructureUtil.for(getState()['component-nodes'].data);
    const parentId = getState().selectedNode.nodeId;

    dispatch({
        type: ADD_COMPONENT_NODE +"_" + REQUEST,
        payload:{}
    });

    try {
        const response = await saralApi.post("/component-nodes",{
            name:componentName,
            parentNode:{
                id:parentId
            }
        });
        const data = response.data;
        data.childFolders = data.childFolders ||  [];
        data.childFiles = data.childFiles ||  [];

        dispatch({
            type:ADD_COMPONENT_NODE + "_" + SUCCESS,
            payload: {
                data:jsonOp.addFolderToNode(parentId,data)
            }
        })
    }catch (error){
        console.log(error.response);
        dispatch({
            type: ADD_COMPONENT_NODE+ "_" + FAILURE,
            payload : {
                message: error.response.data.message
            }
        })
    } 
}

export const addNewComponent = (componentName) => async (dispatch,getState) => {
    const jsonOp = JsonTreeStructureUtil.for(getState()['component-nodes'].data);
    const parentId = getState().selectedNode.nodeId;

    dispatch({
        type: ADD_COMPONENT_NODE +"_" + REQUEST,
        payload:{}
    });

    try {
        const response = await saralApi.post("/components",{
            name:componentName,
            parentComponentNodeDetails:{
                id:parentId
            }
        });
       
        dispatch({
            type:ADD_COMPONENT_NODE + "_" + SUCCESS,
            payload: {
                data:jsonOp.addFileToNode(parentId,response.data)
            }
        })
    }catch (error){
        console.log(error.response);
        dispatch({
            type: ADD_COMPONENT_NODE+ "_" + FAILURE,
            payload : {
                message: error.response.data.message
            }
        })
    } 
}

export const changeComponentData = (data) =>(  {
    type:SET_COMPONENT_NODES,
    payload :{
        data
    }
})