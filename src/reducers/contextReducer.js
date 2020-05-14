import {CHANGE_CONTEXT} from '../actions/types';
const initial_state = '';

export const contextReducer = (state = initial_state, action) =>
  action.type === CHANGE_CONTEXT ? action.payload.context : state; 

