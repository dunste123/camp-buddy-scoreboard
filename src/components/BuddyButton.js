/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core'
import btnIdle from '../assets/btn_idle.png';
import btnHover from '../assets/btn_hover.png';

export default class BuddyButton extends Component {
  _buttonCss = css`
    background: url(${btnIdle}) no-repeat;
    background-size: 100% 100%;
    line-height: 0;
    outline: 0 !important;
    border: none;
    color: #FFFFFF;
    font-size: 50px;
    cursor: pointer;
    min-width: 50px;
    height: 50px;
    margin-left: 10px;
  
    &.no-margin {
      margin: 0 !important;
    }
  
    &:hover {
      background: url(${btnHover}) no-repeat;
      background-size: 100% 100%;
    }
  `;

  render () {
    const {text, click} = this.props;

    return (
        <button css={this._buttonCss} onClick={click}>{ text }</button>
    );
  }
}

BuddyButton.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
