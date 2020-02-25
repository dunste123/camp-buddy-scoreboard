import React, { Component } from "react";
import type { Buddy } from "../types/Buddy";
import PropTypes from "prop-types";
import BuddyButton from "./BuddyButton";
import "../assets/style/BuddyComponent.scoped.scss";

export default class BuddyComponent extends Component {
    render () {
        const { incrementScore, decrementScore } = this.props;

        const buddy: Buddy = this.props.buddy;
        const { name, emoteId, score } = buddy;
        const imgSrc = `https://cdn.discordapp.com/emojis/${emoteId}.png?v=1`;

        return (<div className="buddy">
            <img src={imgSrc} alt={name} crossOrigin="anonymous"/>
            <h1>{name}</h1>
            <h2>Score: {score}</h2>
            <div className="buttons">
                <BuddyButton text="+" click={incrementScore}/>
                <BuddyButton text="-" click={decrementScore}/>
            </div>
        </div>);
    }
}

BuddyComponent.propTypes = {
    // buddy: PropTypes.objectOf(BuddyObjectType).isRequired,
    incrementScore: PropTypes.func.isRequired,
    decrementScore: PropTypes.func.isRequired,
};
