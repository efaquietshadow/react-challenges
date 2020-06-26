import React, { Component } from 'react';

import Align from "./align.js"
import Hide from "./hide.js"
import Color from "./textColorChange.js"
import Number from "./numberChange.js"
import Clock from "./clock.js"
import Size from "./textSizeChange.js"

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
        </div>
      </div>
    );
  }
}
