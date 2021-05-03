import { combineReducers } from 'redux';
import publicApiReducer from './public-api';
import authentication from './authentication';
export default combineReducers({
  publicAPI: publicApiReducer,
  authentication: authentication
});
