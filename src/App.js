import React, { Component } from "react";
import ForkRibbon from "./components/ForkRibbon";
import BuddyButton from "./components/BuddyButton";
import "./assets/style/App.scoped.scss";
import BuddyView from "./BuddyView";
import ScoutmasterView from "./ScoutmasterView";

export default class App extends Component {
    _viewRef;
    _current = localStorage.getItem("selected") ?? "buddies";

    constructor (props) {
        super(props);
        this._viewRef = React.createRef();
    }

    _resetScores = () => {
        this._viewRef.current.resetScores();
    };

    _setCurrent = (current: string) => {
        this._current = current;
        localStorage.setItem("selected", current);
        this.setState({});
    }

    render () {
        return (
            <div className="container">
                <ForkRibbon/>

                <div className="selectbuttons">
                    <p>Select game:</p>
                    <button className={this._current === "buddies" ? "active" : ""}
                        onClick={() => this._setCurrent("buddies")}>
                        Buddies
                    </button>
                    <button className={this._current === "scoutmasters" ? "active" : ""}
                        onClick={() => this._setCurrent("scoutmasters")}>
                        Scoutmasters
                    </button>
                </div>

                {this._current === "buddies" ? <BuddyView ref={this._viewRef} /> :
                    <ScoutmasterView ref={this._viewRef} />}

                <div className="reset">
                    <BuddyButton text="Reset" click={this._resetScores}/>
                </div>
            </div>
        );
    }
}
