import { SAVE_TODO } from "../Constants/action-types";

// const initialState = {};
function taskReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_TODO:
            return payload;
            break;
        default:
            return state;
            break;
    }
}

export default taskReducer;
