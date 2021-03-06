import React, { Component } from "react";
import BuddyComponent from "./components/BuddyComponent";
import "./assets/style/App.scoped.scss";
import ScoutmasterStore from "./stores/ScoutmasterStore";

export default class ScoutmasterView extends Component {
    _store;

    constructor (props) {
        super(props);
        this._store = new ScoutmasterStore();
    }

    _incrementScore = (scoutmaster: string) => {
        this._store.incrementScore(scoutmaster);
        this.setState({});
    };

    _decrementScore = (scoutmaster: string) => {
        this._store.decrementScore(scoutmaster);
        this.setState({});
    };

    _incExtraScore = (scoutmaster: string, title: string) => {
        this._store.incrementExtraScore(scoutmaster, title);
        this.setState({});
    };

    _decExtraScore = (scoutmaster: string, title: string) => {
        this._store.decrementExtraScore(scoutmaster, title);
        this.setState({});
    };

    resetScores = () => {
        const conf = window.confirm("Stop right there!\nThis will reset all your scoutmaster scores, are you sure?");

        if (conf) {
            this._store.resetScores();
            window.location.reload();
        }
    };

    render () {
        const scoutmasters = this._store.buddies;

        return (
            <div className="buddies">
                {scoutmasters.map((scoutmaster) =>
                    <BuddyComponent
                        buddy={scoutmaster}
                        key={scoutmaster.emoteId}
                        className="buddy"
                        incrementScore={() => this._incrementScore(scoutmaster.name)}
                        decrementScore={() => this._decrementScore(scoutmaster.name)}
                        incExtraScore={(scoreName) => this._incExtraScore(scoutmaster.name, scoreName)}
                        decExtraScore={(scoreName) => this._decExtraScore(scoutmaster.name, scoreName)}/>)}
            </div>
        );
    }
}
