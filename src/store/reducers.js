import initialState from "./initialState";
import ActionTypes from "../enums/ActionTypes"

function saveState(buddies) {
    const mapped = {};

    buddies.forEach((buddy) => {
        mapped[buddy.name.toLowerCase()] = buddy.score;
    });

    const json = JSON.stringify(mapped);

    localStorage.setItem("buddies", json);
}

function buddies(state = initialState.buddies, action, { indexes }) {
    switch (action.type) {
        case ActionTypes.BUDDY_INC_SCORE:
            const buddyInc = action.buddy.toLowerCase();
            const retInc = JSON.parse(JSON.stringify(state));

            if (typeof indexes[buddyInc] !== "undefined") {
                retInc[indexes[buddyInc]].score++;
            }

            saveState(retInc);

            return Object.assign([], retInc);
        case ActionTypes.BUDDY_DEC_SCORE:
            const buddyDec = action.buddy.toLowerCase();
            const retDec = JSON.parse(JSON.stringify(state));

            if (typeof indexes[buddyDec] !== "undefined") {
                retDec[indexes[buddyDec]].score--;
            }

            saveState(retDec);

            return Object.assign([], retDec);
        case ActionTypes.UNSHIFT_BUDDY:
            state.unshift(action.buddy);
            return state;
        case ActionTypes.RESET_BUDDY_SCORES:
            localStorage.removeItem("buddies");

            return initialState.buddies;
        case ActionTypes.SET_BUDDY_SCORE:
            const {buddy, score} = action;
            const ret = JSON.parse(JSON.stringify(state));

            if (typeof indexes[buddy] !== "undefined") {
                ret[indexes[buddy]].score = score;
            }

            return ret;
        default:
            return state;
    }
}

function indexes(state = initialState.indexes, action) {
    if (action.type === ActionTypes.SET_INDEX) {
        const old = {
            ...state,
        };

        old[action.buddy.toLowerCase()] = action.index;

        return old;
    }

    /*switch (action.type) {
        case ActionTypes.INIT_INDEX:
            console.log(globalState);
            return state;
        default:
            return state;
    }*/
    return state;
}

export default (state = initialState, action) => ({
    buddies: buddies(state.buddies, action, state),
    keitaro: () => state.keitaro || initialState.keitaro,
    indexes: indexes(state.indexes, action),
});
