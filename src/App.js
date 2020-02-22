import React, {Component} from 'react';
import ForkRibbon from "./components/ForkRibbon";
import BuddyStore from "./BuddyStore";
import BuddyComponent from "./components/BuddyComponent";

export default class App extends Component {

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
        <div className="App">
          <ForkRibbon/>

          <div className="buddies">
            { buddies.map((buddy) =>
                <BuddyComponent buddy={buddy}
                                key={buddy.emoteId}
                                incrementScore={() => this._incrementScore(buddy.name)}
                                decrementScore={() => this._decrementScore(buddy.name)} /> ) }
          </div>
        </div>
    );
  }
}
