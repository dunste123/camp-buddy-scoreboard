import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/style/BuddyButton.scoped.scss";

export default class BuddyButton extends Component {

    render () {
        const { text, click, noMargin } = this.props;
        const marginCls = noMargin ? "no-margin" : "";

        return (
            <button className={marginCls} onClick={click}>{text}</button>
        );
    }
}

BuddyButton.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    noMargin: PropTypes.bool,
};
