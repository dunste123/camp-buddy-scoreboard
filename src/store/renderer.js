import {connect} from "react-redux";
import {incrementBuddyStore, decrementBuddyScore, resetAllScores} from "./actions";
import BuddyRenderer from "../BuddyRenderer";

const mapStateToProps = (state) => {
    return {
        buddies: state.buddies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementBuddyScore: (buddy: string) => {
            dispatch(incrementBuddyStore(buddy))
        },
        decrementBuddyScore: (buddy: string) => {
            dispatch(decrementBuddyScore(buddy))
        },
        resetScores: () => {
            dispatch(resetAllScores());
        },
    };
};

const Renderer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BuddyRenderer);

export default Renderer;
