import React from 'react';
import './clock.css';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hr: 0,
            min: 0,
            year: 0,
            month: 0,
            date: 0,
            day: 0,
        };
        this.interval = null;
    }

    tick(){
        
    }

    componentDidMount(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        this.interval = setInterval(()=>{
            //console.log("HI");
            const time = new Date();
            const hr = time.getHours()>9 ? time.getHours() : "0"+time.getHours().toString();
            const sec = time.getSeconds()>9 ? time.getSeconds() : "0"+time.getSeconds().toString();
            const date = time.getDate()>9 ? time.getDate() : "0"+time.getDate().toString();
            const min = time.getMinutes()>9 ? time.getMinutes() : "0"+time.getMinutes().toString();
            //console.log(time.toDateString());
            this.setState({
                hr: hr,
                min: min,
                sec: sec,
                year: time.getFullYear().toString(),
                month: months[time.getMonth()],
                date: date,
                day: days[time.getDay()]
            });
         }, 1000);
        //this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const time = this.state.sec%2? this.state.hr.toString() + ":" + this.state.min.toString() : this.state.hr.toString() + " " + this.state.min.toString();
        return(
            <div class='clock'>
                <div class='time'>
                    {this.state.hr} {this.state.min} <span class='date'> {this.state.day} . {this.state.month} {this.state.date} {this.state.year} <span class='dot'>{this.state.sec%2? ".":""}</span></span> 
                </div>
            </div>
        );

    };
}