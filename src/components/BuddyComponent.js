import React, { Component } from "react";
import type { Buddy } from "../types/Buddy";
import PropTypes from "prop-types";
import BuddyButton from "./BuddyButton";
import "../assets/style/BuddyComponent.scoped.scss";

export default class BuddyComponent extends Component {
    _extraScores ({ title, score }, key, incExtraScore, decExtraScore) {
        return (<div className="buddy" key={key}>
            <h3>{title}</h3>
            <h4>Score: {score}</h4>
            <div className="buttons">
                <BuddyButton text="+" click={() => incExtraScore(title)}/>
                <BuddyButton text="-" click={() => decExtraScore(title)}/>
            </div>
        </div>);
    }

    render () {
        const { incrementScore, decrementScore, incExtraScore, decExtraScore } = this.props;

        const buddy: Buddy = this.props.buddy;
        const { name, emoteId, score, extra_scores } = buddy;
        const imgSrc = `https://cdn.discordapp.com/emojis/${emoteId}.png?v=1`;

        return (<div className="buddy">
            <img src={imgSrc} alt={name} crossOrigin="anonymous"/>
            <h1>{name}</h1>
            <h2>Score: {score}</h2>
            <div className="buttons">
                <BuddyButton text="+" click={incrementScore}/>
                <BuddyButton text="-" click={decrementScore}/>
            </div>
            {extra_scores ? extra_scores.map(
                (score, index) => this._extraScores(score, index, incExtraScore, decExtraScore)) : ""}
        </div>);
    }
}

BuddyComponent.propTypes = {
    // buddy: PropTypes.objectOf(BuddyObjectType).isRequired,
    incrementScore: PropTypes.func.isRequired,
    decrementScore: PropTypes.func.isRequired,
};
