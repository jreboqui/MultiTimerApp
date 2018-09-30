import React from 'react';
//import { Button } from 'react-bootstrap';
// import { Panel } from 'react-bootstrap';
//import { Grid, Row, FormGroup } from 'react-bootstrap';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerConfig from './TimerConfig';

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
            secondBox: false,
            thirdBox: false,
            currentTimeA: moment.duration(25, 'minutes'),
            baseTimeA: moment.duration(25, 'minutes'),
            timerStateA: timerStates.NOT_SET,
            timerA: null,
            currentTimeB: moment.duration(15, 'minutes'),
            baseTimeB: moment.duration(15, 'minutes'),
            timerStateB: timerStates.NOT_SET,
            timerB: null,
            currentTimeC: moment.duration(10, 'minutes'),
            baseTimeC: moment.duration(10, 'minutes'),
            timerStateC: timerStates.NOT_SET,
            timerC: null,
        };

        this.setBaseTimeA = this.setBaseTimeA.bind(this);
        this.startTimerA = this.startTimerA.bind(this);
        this.reduceTimerA = this.reduceTimerA.bind(this);
        this.stopTimerA = this.stopTimerA.bind(this);
        this.resetTimerA = this.resetTimerA.bind(this);

        this.setBaseTimeB = this.setBaseTimeB.bind(this);
        this.startTimerB = this.startTimerB.bind(this);
        this.reduceTimerB = this.reduceTimerB.bind(this);
        this.stopTimerB = this.stopTimerB.bind(this);
        this.resetTimerB = this.resetTimerB.bind(this);

        this.setBaseTimeC = this.setBaseTimeC.bind(this);
        this.startTimerC = this.startTimerC.bind(this);
        this.reduceTimerC = this.reduceTimerC.bind(this);
        this.stopTimerC = this.stopTimerC.bind(this);
        this.resetTimerC = this.resetTimerC.bind(this);

        this.handleSecondDisplay = this.handleSecondDisplay.bind(this);
        this.handleThirdDisplay = this.handleThirdDisplay.bind(this);

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
    //B stuff
    setBaseTimeB(newBaseTime) {
        this.setState({
            baseTimeB: newBaseTime,
            currentTimeB: newBaseTime
        });
    }
    startTimerB(){
        this.setState({
            timerStateB: timerStates.RUNNING,
            timerB: setInterval(this.reduceTimerB, 1000)
        });
    }
    stopTimerB(){
        if (this.state.timerB) {
            clearInterval(this.state.timerB);
        }

        this.setState({
            timerStateB: timerStates.NOT_SET,
            timerB: null,
            currentTimeB: moment.duration(this.state.baseTimeB)
        })
    }
    reduceTimerB() {
        if (this.state.currentTimeB.get('hours') === 0
            && this.state.currentTimeB.get('minutes') === 0
            && this.state.currentTimeB.get('seconds') === 0
        ) {
            this.resetTimerB();
            return;
        }
        
        const newTime = moment.duration(this.state.currentTimeB);
        newTime.subtract(1, 'second');

        this.setState({
            currentTimeB: newTime
        })
    }
    resetTimerB(){
        if (this.state.timerB) {
            clearInterval(this.state.timerB);
        }

        this.setState({
            timerStateB: timerStates.COMPLETE,
            timerB: null,
        })
    }
    //C stuff
    setBaseTimeC(newBaseTime) {
        this.setState({
            baseTimeC: newBaseTime,
            currentTimeC: newBaseTime
        });
    }
    startTimerC(){
        this.setState({
            timerStateC: timerStates.RUNNING,
            timerC: setInterval(this.reduceTimerC, 1000)
        });
    }
    stopTimerC(){
        if (this.state.timerC) {
            clearInterval(this.state.timerC);
        }

        this.setState({
            timerStateC: timerStates.NOT_SET,
            timerC: null,
            currentTimeC: moment.duration(this.state.baseTimeC)
        })
    }
    reduceTimerC() {
        if (this.state.currentTimeC.get('hours') === 0
            && this.state.currentTimeC.get('minutes') === 0
            && this.state.currentTimeC.get('seconds') === 0
        ) {
            this.resetTimerC();
            return;
        }
        
        const newTime = moment.duration(this.state.currentTimeC);
        newTime.subtract(1, 'second');

        this.setState({
            currentTimeC: newTime
        })
    }
    resetTimerC(){
        if (this.state.timerC) {
            clearInterval(this.state.timerC);
        }

        this.setState({
            timerStateC: timerStates.COMPLETE,
            timerC: null,
        })
    }

    handleSecondDisplay(){
        this.setState({
            secondBox: true,
        });
    }

    handleThirdDisplay(){
        this.setState({
            thirdBox: true,
        });
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
                     {
                    (this.state.timerStateA !== timerStates.RUNNING && this.state.timerStateA !== timerStates.COMPLETE)
                    &&
                    (<TimerConfig 
                        baseTime={this.state.baseTimeA}
                        setBaseTime={this.setBaseTimeA}
                    />)
                }
                </div>
                <div className="box-2">
                    {/* <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton startTimer={this.startTimer} 
                    timerState={this.state.timerState} 
                    stopTimer={this.stopTimer} resetTimer={this.resetTimer}/> */}
                    {this.state.secondBox ? (<div><TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTimeB}/>
                    <TimerButton startTimer={this.startTimerB} 
                    timerState={this.state.timerStateB} 
                    stopTimer={this.stopTimerB} resetTimer={this.resetTimerB}/> 
                      {
                    (this.state.timerStateA !== timerStates.RUNNING && this.state.timerStateA !== timerStates.COMPLETE)
                    &&
                    (<TimerConfig 
                        baseTime={this.state.baseTimeB}
                        setBaseTime={this.setBaseTimeB}
                    />)
                       }
                       </div>) :
                    (  <button className="plus-button plus-button--large" onClick={this.handleSecondDisplay}></button>) }
                </div>
                <div className="box-3">
                    {/* <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton startTimer={this.startTimer} 
                    timerState={this.state.timerState} 
                    stopTimer={this.stopTimer} resetTimer={this.resetTimer}/> */}
                    
                    {this.state.thirdBox ? (<div><TimerHeader /><TimerDisplay currentTime={this.state.currentTimeC}/>
                    <TimerButton startTimer={this.startTimerC} 
                    timerState={this.state.timerStateC} 
                    stopTimer={this.stopTimerC} resetTimer={this.resetTimerC}/>
                      {
                    (this.state.timerStateA !== timerStates.RUNNING && this.state.timerStateA !== timerStates.COMPLETE)
                    &&
                    (<TimerConfig 
                        baseTime={this.state.baseTimeC}
                        setBaseTime={this.setBaseTimeC}
                    />)
                    }
                    </div>)
                     : (  <button className="plus-button plus-button--large" onClick={this.handleThirdDisplay}></button>)}
                    
                    
                </div>
            </div>


        
                )
    }
}
export default Timer;