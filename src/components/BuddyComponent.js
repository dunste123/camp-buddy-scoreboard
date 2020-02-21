import React, { Component } from 'react';
import type { Buddy } from "../types/Buddy";

export default class BuddyComponent extends Component {

  render () {
    const buddy: Buddy = this.props.buddy;
    const { name, emoteId, score } = buddy;
    const imgSrc = `https://cdn.discordapp.com/emojis/${emoteId}.png?v=1`;

    return (<div>
      <img src={imgSrc} alt={name} crossOrigin="anonymous"/>
      <h1>{name}</h1>
      <h2>Score: {score}</h2>
    </div>);
  }
}

/*BuddyComponent.propTypes = {
  buddy: PropTypes.objectOf(BuddyObjectType).isRequired,
};*/
