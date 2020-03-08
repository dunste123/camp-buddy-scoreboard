import ActionTypes from "../enums/ActionTypes";

export function incrementBuddyStore(buddy: string) {
    return {
        type: ActionTypes.BUDDY_INC_SCORE,
        buddy,
    };
}

export function resetAllScores() {
    return {
        type: ActionTypes.RESET_BUDDY_SCORES,
    };
}

export function decrementBuddyScore(buddy: string) {
    return {
        type: ActionTypes.BUDDY_DEC_SCORE,
        buddy,
    };
}

export function setIndex(buddy: string, index: number) {
    return {
        type: ActionTypes.SET_INDEX,
        buddy,
        index,
    };
}

export function initIndexes() {
    return (dispatch, getState) => {
        const buddies = getState().buddies;

        for (let i = 0; i < buddies.length; i++) {
            const buddy = buddies[i];

            dispatch(setIndex(buddy.name.toLowerCase(), i));
        }
    };
}

export function unshiftBuddy(buddy: object) {
    return  {
        type: ActionTypes.UNSHIFT_BUDDY,
        buddy,
    };
}

export function setBuddyScore(buddy: string, score: number) {
    return {
        type: ActionTypes.SET_BUDDY_SCORE,
        buddy,
        score,
    };
}

export function loadBuddies() {
    // Can return functions because of react-thunk
    return (dispatch) => {
        if (localStorage.getItem("keitaro") === "true") {
            dispatch(unshiftBuddy({
                name: "Keitaro",
                emoteId: "514293667041771531",
                score: 0,
            }));
        }

        dispatch(initIndexes());

        const storedBuddies = localStorage.getItem("buddies");

        if (!storedBuddies) {
            return;
        }

        const buddies = JSON.parse(storedBuddies);
        const keys = Object.keys(buddies);

        for (const name of keys) {
            console.log(name);

            if (!buddies.hasOwnProperty(name)) {
                continue;
            }


            dispatch(setBuddyScore(name, buddies[name]));
        }
    };
}
