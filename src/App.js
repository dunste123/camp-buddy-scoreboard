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

  render () {
    const buddies = this._store.buddies;

    return (
        <div className="App">
          <ForkRibbon/>

          <div className="buddies">
            { buddies.map((buddy) => <BuddyComponent buddy={buddy} key={buddy.emoteId} /> ) }
          </div>
        </div>
    );
  }
}
