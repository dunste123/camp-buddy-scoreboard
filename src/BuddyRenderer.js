import React, {Component} from "react";
import BuddyComponent from "./components/BuddyComponent";
import BuddyButton from "./components/BuddyButton";

export default class BuddyRenderer extends Component {

    _preReset = () => {
        const conf = window.confirm("Hold up buddy\nThis will reset all your scores, are you sure?");

        if (conf) {
            this.props.resetScores();
            // window.location.reload();
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {buddies, incrementBuddyScore, decrementBuddyScore} = this.props;

        return (
            <div className="container">
                <div className="buddies">
                    {buddies.map((buddy) =>
                        <BuddyComponent
                            buddy={buddy}
                            key={buddy.emoteId}
                            className="buddy"
                            incrementScore={() => incrementBuddyScore(buddy.name.toLowerCase())}
                            decrementScore={() => decrementBuddyScore(buddy.name.toLowerCase())}/>)}
                </div>

                <div className="reset">
                    <BuddyButton text="Reset" click={this._preReset}/>
                </div>
            </div>
        );
    }
}
