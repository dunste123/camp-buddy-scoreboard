import React, { Component } from "react";

export default class ForkRibbon extends Component {

    imgStyle = {
        position: "fixed",
        top: "-14px",
        right: "-14px",
        border: "0",
        zIndex: "100",
    };

    render () {
        return (<div>
            <a href="https://github.com/dunste123/camp-buddy-scoreboard" rel="noopener noreferrer" target="_blank">
                <img
                    style={this.imgStyle}
                    src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
                    alt="Fork me on GitHub"/>
            </a>
        </div>);
    }
}
