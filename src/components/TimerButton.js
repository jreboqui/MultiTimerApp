import React from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import * as timerStates from '../timerStates';
import './TimerButton.css';

class TimerButton extends React.Component {
  
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }
  
  getButton(){
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <Row>
        {/* <Button bsStyle="success" onClick={this.props.startTimer}>Start</Button> */}
        <button id="Start" onClick={this.props.startTimer}>Start Timer</button>
        </Row>
      )

      if (this.props.timerState === timerStates.RUNNING)
        return (
          // <Button bsStyle="danger" onClick={this.props.stopTimer}>Stop</Button>
          <div>
          <button id="Stop" onClick={this.props.stopTimer}>Stop Timer</button>
          <br/>
          <button id="Pause" onClick={this.props.pauseTimer}>Pause Timer</button>
          </div>
        )

      if (this.props.timerState === timerStates.COMPLETE)
      return (
        <Button bsStyle="info" onClick={this.props.stopTimer}>Reset</Button>
      )

      if (this.props.timerState === timerStates.NOT_RUNNING)
      return (
        <Button bsStyle="info" onClick={this.props.startTimer}>Resume</Button>
      )


  }
  render() {
    return (
      <div className="row text-primary text-left">
        {this.getButton()}
      </div>

    );
  }
}
export default TimerButton;

