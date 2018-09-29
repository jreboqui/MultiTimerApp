import React from 'react';
//import { Button } from 'react-bootstrap';
// import { Panel } from 'react-bootstrap';
//import { Grid, Row, FormGroup } from 'react-bootstrap';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
// import TimerConfig from '../../TimerConfig/TimerConfig';
import TimerButton from './TimerButton';
import moment from 'moment';
import * as timerStates from '../timerStates';
import './Timer.css';

export class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
            currentTimeA: moment.duration(25, 'minutes'),
            baseTimeA: moment.duration(25, 'minutes'),
            timerStateA: timerStates.NOT_SET,
            timerA: null,
            currentTimeB: moment.duration(25, 'minutes'),
            baseTimeB: moment.duration(25, 'minutes'),
            timerStateB: timerStates.NOT_SET,
            timerB: null,
        };

        this.setBaseTimeA = this.setBaseTimeA.bind(this);
        this.startTimerA = this.startTimerA.bind(this);
        this.reduceTimerA = this.reduceTimerA.bind(this);
        this.stopTimerA = this.stopTimerA.bind(this);
        this.resetTimerA = this.resetTimerA.bind(this);

    }

    setBaseTimeA(newBaseTime) {
        this.setState({
            baseTimeA: newBaseTime,
            currentTimeA: newBaseTime
        });
    }

    startTimerA(){
        this.setState({
            timerStateA: timerStates.RUNNING,
            timerA: setInterval(this.reduceTimerA, 1000)
        });
    }

    stopTimerA(){
        if (this.state.timerA) {
            clearInterval(this.state.timerA);
        }

        this.setState({
            timerStateA: timerStates.NOT_SET,
            timerA: null,
            currentTimeA: moment.duration(this.state.baseTimeA)
        })
    }

    reduceTimerA() {
        if (this.state.currentTimeA.get('hours') === 0
            && this.state.currentTimeA.get('minutes') === 0
            && this.state.currentTimeA.get('seconds') === 0
        ) {
            this.resetTimerA();
            return;
        }
        
        const newTime = moment.duration(this.state.currentTimeA);
        newTime.subtract(1, 'second');

        this.setState({
            currentTimeA: newTime
        })
    }

    resetTimerA(){
        if (this.state.timerA) {
            clearInterval(this.state.timerA);
        }

        this.setState({
            timerStateA: timerStates.COMPLETE,
            timerA: null,
        })
    }

    render () {
    return (
        
            <div className="container-1">
                <div className="box-1">
                    <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTimeA}/>
                    <TimerButton startTimer={this.startTimerA} 
                    timerState={this.state.timerStateA} 
                    stopTimer={this.stopTimerA} resetTimer={this.resetTimerA}/>
                </div>
                <div className="box-2">
                    {/* <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton startTimer={this.startTimer} 
                    timerState={this.state.timerState} 
                    stopTimer={this.stopTimer} resetTimer={this.resetTimer}/> */}
                    <TimerHeader />
                </div>
                <div className="box-3">
                    {/* <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton startTimer={this.startTimer} 
                    timerState={this.state.timerState} 
                    stopTimer={this.stopTimer} resetTimer={this.resetTimer}/> */}
                </div>
            </div>


        
                )
    }
}
export default Timer;