import React, { Component } from 'react';

import Align from "./align.js"
import Alignment from "./alignmentHooks.js"
import Hide from "./hide.js"
import HideHook from "./hideHooks.js"
import Color from "./textColorChange.js"
import ColorHook from "./textColorChangeHook.js"
import Number from "./numberChange.js"
import NumberHook from "./numberChangehook"
import Size from "./textSizeChange.js"
import SizeHook from "./textSizeChangeHook.js"
import Clock from "./clock.js"
import ClockHook from "./clockHook.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="app-wrapper">
          <Align />
          <Hide />
          <Number />
          <Size />
          <Color />
          <Clock />
          <Alignment />
          <HideHook />
          <NumberHook />
          <SizeHook />
          <ColorHook />
          <ClockHook />
        </div>
      </div>
    );
  }
}
