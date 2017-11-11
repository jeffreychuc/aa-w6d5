import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render()  {
    return(
      <div>
        <div> clock is working? </div>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }

  tick()  {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timer = setInterval(()=> {this.tick();
    }, 
    1000);
  }

  componentWillUnmount()  {
    clearInterval(this.timer);
  }
}

export default Clock;
