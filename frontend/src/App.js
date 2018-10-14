import React, { Component } from 'react';
import './Style/App.css';
import {Events} from './Components/Events.js';

class App extends Component {
  render() {
    return <div>
            <Events />
        </div>;
  }
}

export default App;
