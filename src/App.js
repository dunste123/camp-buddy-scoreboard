import React, { Component } from "react";
import ForkRibbon from "./components/ForkRibbon";
import BuddyStore from "./BuddyStore";
import BuddyComponent from "./components/BuddyComponent";
import BuddyButton from "./components/BuddyButton";
import "./assets/style/App.scoped.scss";

export default class App extends Component {
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

    _resetScores = () => {
        const conf = window.confirm("Hold up buddy\nThis will reset all your scores, are you sure?");

        if (conf) {
            this._store.resetScores();
            window.location.reload();
        }
    };

    render () {
        const buddies = this._store.buddies;

        return (
            <div className="container">
                <ForkRibbon/>

                <div className="buddies">
                    {buddies.map((buddy) =>
                        <BuddyComponent
                            buddy={buddy}
                            key={buddy.emoteId}
                            className="buddy"
                            incrementScore={() => this._incrementScore(buddy.name)}
                            decrementScore={() => this._decrementScore(buddy.name)}/>)}
                </div>

                <div className="reset">
                    <BuddyButton text="Reset" click={this._resetScores}/>
                </div>
            </div>
        );
    }
}
