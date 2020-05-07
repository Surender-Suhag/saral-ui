import {saralApi} from './api';
import { SUCCESS, FAILURE, REQUEST, Get_COMPONENT_TREE } from "./types";

export const getComponents = () => async dispatch => {

    dispatch({
        type: Get_COMPONENT_TREE +"_" + REQUEST,
        payload:{}
    });

    try {
        const response = await saralApi.get("/component-nodes");

        dispatch({
            type:Get_COMPONENT_TREE + "_" + SUCCESS,
            payload: response.data
        })
    }catch (error){
        dispatch({
            type: Get_COMPONENT_TREE+ "_" + FAILURE,
            payload : {
                message: error.toString()
            }
        })
    }
}