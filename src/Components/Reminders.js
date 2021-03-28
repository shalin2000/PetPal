import React, { Component } from 'react';
import Calendar from 'react-calendar';

import '../CSS/Reminders.css';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';

class Reminders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render (){
        var date = new Date().toDateString();
        console.log(date)
        return(
            <div className="reminder">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center'}}>Reminders</h2>
                
                {/* calender with reminders */}
                <div class="container center">
                    <div class="row justify-content-center">
                        <Calendar
                            onChange={(value) => this.setState({value: value})}
                            value={this.state.value}
                        />
                    </div>
                    {/* todo list for the current day */}
                    <br></br>
                    <div class="row justify-content-center">
                        <h3 style={{fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center'}}>TODO Today: {date}</h3>
                    </div>
                    <div class="row justify-content-center">
                            <div class="col-md-auto todoContent">
                                <label style={{fontWeight: 'bold', textDecoration: 'underline'}}>Task:</label>
                                <br></br>
                                <label>Feed Trev and Amy</label>
                                <br></br>
                                <label>Take Trev and Amy on a walk</label>
                                <br></br>
                                <label>..............................</label>
                                <br></br>
                                <label>..............................</label>
                            </div>
                            <div class="col-md-auto todoContent">
                                <label style={{fontWeight: 'bold', textDecoration: 'underline'}}>Time:</label>
                                <br></br>
                                <label>12:00 pm, 5:00 pm</label>
                                <br></br>
                                <label>6:00 pm </label>
                                <br></br>
                                <label>..............................</label>
                                <br></br>
                                <label>..............................</label>
                            </div>
                            <div class="col-md-auto my-auto">
                                <button type="button" class="btn btn-primary" style={{justifyContent: 'center'}}>Add Reminder</button>
                            </div>
                        </div>
                </div>
            </div> 
         )
    };
}

export default Reminders;