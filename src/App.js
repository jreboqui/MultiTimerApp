import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';
import { Panel } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
      <Panel>
        <Panel.Body>
        <div className="panel-body">
          <Timer />
        </div>
        </Panel.Body>
      </Panel>
      </div>
    );
  }
}

export default App;
