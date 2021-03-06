import React, { Component } from "react";
import BuddyStore from "./stores/BuddyStore";
import BuddyComponent from "./components/BuddyComponent";
import "./assets/style/App.scoped.scss";

export default class BuddyView extends Component {
    _store;

    constructor (props) {
        super(props);
        this._store = new BuddyStore();
    }

    _incrementScore = (buddy: string) => {
        this._store.incrementScore(buddy);
        this.setState({});
    };

    _decrementScore = (buddy: string) => {
        this._store.decrementScore(buddy);
        this.setState({});
    };

    _incExtraScore = (buddy: string, title: string) => {
        this._store.incrementExtraScore(buddy, title);
        this.setState({});
    };

    _decExtraScore = (buddy: string, title: string) => {
        this._store.decrementExtraScore(buddy, title);
        this.setState({});
    };

    resetScores = () => {
        const conf = window.confirm("Hold up buddy\nThis will reset all your camper scores, are you sure?");

        if (conf) {
            this._store.resetScores();
            window.location.reload();
        }
    };

    render () {
        const buddies = this._store.buddies;

        return (
            <div className="buddies">
                {buddies.map((buddy) =>
                    <BuddyComponent
                        buddy={buddy}
                        key={buddy.emoteId}
                        className="buddy"
                        incrementScore={() => this._incrementScore(buddy.name)}
                        decrementScore={() => this._decrementScore(buddy.name)}
                        incExtraScore={(scoreName) => this._incExtraScore(buddy.name, scoreName)}
                        decExtraScore={(scoreName) => this._decExtraScore(buddy.name, scoreName)}/>)}
            </div>
        );
    }
}
