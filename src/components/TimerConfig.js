import React from 'react';

import { FormGroup } from 'react-bootstrap';

class TimerConfig extends React.Component{

    constructor() {
      super();
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(ev) {
      const newBaseTime = this.props.baseTime;
  
      if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
      if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
      if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');
  
      this.props.setBaseTime(newBaseTime);
    }
    render() {
        return (  
          <div className="text-primary">
                  <h2 className="text-left"> Set timer </h2>
                  <FormGroup>
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="hours">Hours</label>
                    </div>
                    <div className="col-sm-9">
                      <input id="hours" className="form-control" type="number"  style={{ width:'35%'}} defaultValue={this.props.baseTime.get('hours')} onChange={this.handleChange}/>
                    </div>
                  </div>
                  </FormGroup>
                  <FormGroup>
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="minutes">Minutes</label>
                    </div>
                    <div className="col-sm-9">
                      <input id="minutes" className="form-control" type="number" style={{ width:'35%'}} defaultValue={this.props.baseTime.get('minutes')} onChange={this.handleChange}/>
                    </div>
                  </div>
                  </FormGroup>
                  <FormGroup>
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="seconds">Seconds</label>
                    </div>
                    <div className="col-sm-9">
                      <input id="seconds" className="form-control" type="number" style={{ width:'35%'}} defaultValue={this.props.baseTime.get('seconds')} onChange={this.handleChange}/>
                    </div>
                  </div>
                  </FormGroup>
                </div>
        )
    }


}

export default TimerConfig;