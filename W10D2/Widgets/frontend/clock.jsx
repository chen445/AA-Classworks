import React from 'react';

class Clock extends React.Component{
    constructor(){
        super();
        this.state = {date: new Date().toDateString(), time: new Date().toLocaleTimeString()};
        this.tick = this.tick.bind(this);
        this.interval=0;
    }
    
    tick(){
        this.setState({time:new Date().toLocaleTimeString()})
    }

    componentDidMount(){
       this.interval=setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }



    render(){
        return (
        <div className="clock-widget">
            <h1>Clock</h1>
                <div className='clock'>
                <div className="date">
                    <h2>Date:</h2>
                    <p>{this.state.date}</p>
                </div>
                <div className="time">
                    <h2>Time:</h2>
                    <p>{this.state.time}</p>
                </div>
                </div>
        </div>
        )

        
    }
}



export default Clock;