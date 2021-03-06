import React, { Component } from "react";
import ForkRibbon from "./components/ForkRibbon";
import BuddyButton from "./components/BuddyButton";
import "./assets/style/App.scoped.scss";
import BuddyView from "./BuddyView";

export default class App extends Component {
    _viewRef;
    _current = "buddies";

    constructor (props) {
        super(props);
        this._viewRef = React.createRef();
    }

    _resetScores = () => {
        if (this._current === "buddies") {
            this._viewRef.current.resetScores();
        } else {
            // scoutmasters
        }
    };

    _setCurrent = (current: string) => {
        this._current = current;
        this.setState({});
    }

    render () {
        return (
            <div className="container">
                <ForkRibbon/>

                <div className="selectbuttons">
                    <p>Select:</p>
                    <button className={this._current === "buddies" ? "active" : ""} onClick={() => this._setCurrent("buddies")}>
                        Buddies
                    </button>
                    <button className={this._current === "scoutmasters" ? "active" : ""} onClick={() => this._setCurrent("scoutmasters")}>
                        Scoutmasters
                    </button>
                </div>

                {
                    this._current === "buddies" ? <BuddyView ref={this._viewRef} /> : <h1>SOON!</h1>
                }

                <div className="reset">
                    <BuddyButton text="Reset" click={this._resetScores}/>
                </div>
            </div>
        );
    }
}
