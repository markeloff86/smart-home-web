import {combineReducers} from "redux";
import recommendation from "./recommendation";
import controls from './controls';

const rootReducer = combineReducers({
    recommendation,
    controls
});

export {rootReducer};