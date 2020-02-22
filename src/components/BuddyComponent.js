/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core'
import type { Buddy } from "../types/Buddy";
import PropTypes from 'prop-types';
import BuddyButton from "./BuddyButton";

export default class BuddyComponent extends Component {
  _divStyle = css`
    text-align: center;
    
    @media only screen and (max-width: 371px) {
        width: 100%;
    }
  `;

  _imgStyle = css`
    width: 128px;
    height: 128px;
    
    @media only screen and (max-width: 600px) {
        width: 64px;
        height: 64px;
    }
  `;


  render () {
    const {incrementScore, decrementScore} = this.props;

    const buddy: Buddy = this.props.buddy;
    const { name, emoteId, score } = buddy;
    const imgSrc = `https://cdn.discordapp.com/emojis/${emoteId}.png?v=1`;

    return (<div css={this._divStyle}>
      <img css={this._imgStyle} src={imgSrc} alt={name} crossOrigin="anonymous"/>
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
