import {CHANGE_CONTEXT} from './types';

export const changeContext = (context) => ({
  type: CHANGE_CONTEXT,
  payload: { context },
});