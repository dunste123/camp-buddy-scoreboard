import React, { Component } from "react";
import {Provider} from "react-redux";
import ForkRibbon from "./components/ForkRibbon";
import { store } from "./store";
import "./assets/style/App.scss";

import BuddyRenderer from "./store/renderer";

export default class App extends Component {

    render () {
        return (
            <div>
                <ForkRibbon/>

                <Provider store={store}>
                    <BuddyRenderer/>
                </Provider>
            </div>
        );
    }
}
