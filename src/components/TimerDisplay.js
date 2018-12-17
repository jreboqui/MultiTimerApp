import React from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './TimerDisplay.css';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}
const TimerDisplay = (props) => (
    
    <div id="clockDiv">
    <div id="one">
         <span class="hours">
           {`${leftPad(props.currentTime.get('hours'))}`}
         </span>
        
         <div class="smalltext">Hours</div>
    </div>
    <div id="two">
         <span class="minutes">
         {leftPad(props.currentTime.get('minutes'))}
         </span>
         <div class="smalltext">Minutes</div>
         
    </div>
    <div id="three">
         <span class="seconds">
         {leftPad(props.currentTime.get('seconds'))}
         </span>
         <div class="smalltext">Seconds</div>
    </div>
 </div>
    
    // <Row className="show-grid">
    //     <Col className="show-grid" xs={12} md={12}>
    //     {/* <div className="text-primary">
    //         <h2 className="text-left" style={{ fontSize:'8rem'}}>{`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`} </h2>
    //     </div> */}
      
    //     </Col>
    // </Row>
);

export default TimerDisplay;
