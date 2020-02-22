/** @jsx jsx */
import {Component} from 'react';
import { css, jsx } from '@emotion/core'
import ForkRibbon from "./components/ForkRibbon";
import BuddyStore from "./BuddyStore";
import BuddyComponent from "./components/BuddyComponent";
import BuddyButton from "./components/BuddyButton";

export default class App extends Component {
  _container = css`
    margin: 3rem;
    display: flex;
    flex-direction: column;
  `;

  _buddiesStyle = css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  `;

  _buddyStyle = css`
    margin: 5px;
  `;

  _resetContainer = css`
    margin: 0 auto;
    display: block;
    padding-top: 3rem;
    align-self: center;
  `;

  _resetButton = css`
    align-self: center;
  `;

  _store;

  constructor(props) {
    super(props);
    this._store = new BuddyStore();

    window.buddies = this._store.buddies;
  }

  _incrementScore = (buddy: string) => {
    this._store.incrementScore(buddy);
    this.setState({});
  };

  _decrementScore = (buddy: string) => {
    this._store.decrementScore(buddy);
    this.setState({});
  };

  render () {
    const buddies = this._store.buddies;

    return (
        <div css={this._container}>
          <ForkRibbon/>

          <div css={this._buddiesStyle}>
            { buddies.map((buddy) =>
                <BuddyComponent buddy={buddy}
                                key={buddy.emoteId}
                                css={this._buddyStyle}
                                incrementScore={() => this._incrementScore(buddy.name)}
                                decrementScore={() => this._decrementScore(buddy.name)} /> ) }
          </div>

          <div css={this._resetContainer}>
            <BuddyButton css={this._resetButton} text="Reset" click={() => {}}/>
          </div>
        </div>
    );
  }
}
