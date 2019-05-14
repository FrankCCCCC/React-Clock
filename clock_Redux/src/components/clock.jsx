import React from 'react';
import {Row, Col}from 'reactstrap';

import './clock.css';
import store from '../state/store.js';
import {setTime} from '../state/action.js';

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
            dot: 0
        };
        this.interval = null;
    }

    componentWillMount(){
        this.interval = setInterval(()=>{
            //console.log("HI");
            store.dispatch(setTime());
            this.setState(store.getState());
            //console.log(store.getState());
         }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        
        return(
            <div class='clock'>
                <div class='time'>
                    {this.state.hr} {this.state.min} <span class='date'> {this.state.day} . {this.state.month} {this.state.date} {this.state.year} <span class='dot'>{this.state.dot}</span></span> 
                </div>
            </div>
        );

    };
}