import ActionTypes from "../enums/ActionTypes";

export function incrementBuddyStore(buddy: string) {
    return {
        type: ActionTypes.BUDDY_INC_SCORE,
        buddy,
    };
}

export function decrementBuddyScore(buddy: string) {
    return {
        type: ActionTypes.BUDDY_DEC_SCORE,
        buddy,
    };
}
