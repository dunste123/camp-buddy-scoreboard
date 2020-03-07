import initialState from "./initialState";
import ActionTypes from "../enums/ActionTypes"

function buddies(state = initialState.buddies, action) {
    switch (action.type) {
        case ActionTypes.BUDDY_INC_SCORE:
            break;
        case ActionTypes.BUDDY_DEC_SCORE:
            break;
        default:
            return state;
    }
}

export default (state = initialState, action) => ({
    buddies: buddies(state.buddies, action),
    keitaro: () => state.keitaro || initialState.keitaro,
    indexes: () => state.indexes || initialState.indexes,
});
