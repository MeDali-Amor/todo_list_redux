import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import taskReducer from "./taskReducer";
export default combineReducers({
    todosReducer,
    taskReducer,
});
