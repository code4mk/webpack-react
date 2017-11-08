import React, { Component } from 'react';
import Img from './assets/logo1.png'
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> <strong>Webpack + <span>React</span> = React-pack</strong> </h1>
        <img src={Img} alt="mk" />
      </div>

    );
  }
}

export default App
