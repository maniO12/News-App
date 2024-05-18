import React, { Component } from 'react'
import loading from './Spinner-3.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div class="spin">
        <img src={loading} alt="loading"></img>
      </div>
     
    )
  }
}


