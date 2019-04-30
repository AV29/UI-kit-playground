import {combineReducers} from 'redux';
import inputs from './inputReducers';

const rootReducer = combineReducers({
  inputs
});

export default rootReducer;