import React, { Component } from 'react';
import { Modal, Toast } from 'react-bootstrap'
import Calendar from 'react-calendar';
import moment from 'moment';

import '../CSS/Reminders.css';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';
import NewReminder from './NewReminder'
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faInfo, faWindowClose } from '@fortawesome/free-solid-svg-icons'

class Reminders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            addReminderOpen: false,
            reminderList: [
                {
                    title: 'Trev & Amy',
                    description: 'Feed Trev and Amy',
                    date: '4/2/21',
                    time: '12:00 pm, 5:00 pm'
                },
                {
                    title: 'Trev & Amy',
                    description: 'Take Trev and Amy on a walk',
                    date: '5/2/21',
                    time: '6:00 pm'
                }

            ],
        };
        this.removeReminder = this.removeReminder.bind(this);
        this.reminderDate = this.reminderDate.bind(this);
    }

    // used to set the state with the localstorage saved data
    componentWillMount() {
        if (localStorage.getItem('accountReminder')) {
            const re = this.state.reminderList.map(r => r)
            JSON.parse(localStorage.getItem('accountReminder')).map(r => { re.push(r) })
            this.setState({ reminderList: re })
            localStorage.removeItem('accountReminder')
        } else {
            localStorage.getItem('newReminderList') && this.setState({
                reminderList: JSON.parse(localStorage.getItem('newReminderList')),
            })
        }
    }

    // save the current state of the reminders
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('newReminderList', JSON.stringify(nextState.reminderList))
    }


    // open the reminder form
    handleReminderOpen() {
        this.setState(() => {
            return {
                addReminderOpen: true
            }
        })
    }

    //close the reminder form
    handleClose() {
        this.setState(() => {
            return {
                addReminderOpen: false,
                value:""
            }
        })
    }

    // removes selected reminder from list of reminders
    removeReminder(obj) {
        const removeR = this.state.reminderList.filter(c => c !== obj);
        this.setState(() => {
            return {
                reminderList: removeR,
            }
        })
    }

    // adds a new reminder to the list
    handleNewReminder(title_, description_, date_, time_) {
        const nReminders = this.state.reminderList.map(r => r)
        nReminders.push({
            title: title_,
            description: description_,
            date: String(date_),
            time: String(time_),
        })

        this.setState(() => {
            return {
                addReminderOpen: false,
                reminderList: nReminders,
            }
        })
    }

    // save the date the user clicks on in the caldendar
    reminderDate(e){
        this.setState(()=>{
            return {value: e}
        })

        this.handleReminderOpen()
    }

    render() {
        var date = new Date().toDateString();
        console.log(date)
        return (
            <div className="reminder">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{ textAlign: 'center', paddingTop: '1%', paddingBottom: '1%' }}>Reminders</h2>

                {/* calender with reminders */}
                <div class="row justify-content-center">
                    <div class="col-4">
                        <div class="row justify-content-center" >
                            <Calendar
                            
                                onChange={e => this.reminderDate(e)}
                                value={this.state.value}
                                style={{ width: '200px!important', height: '200px!important', marginRight: '20px'}}
                                active="false"
                            />
                        
                        </div>  
                        
                        {/* */}
                        <div class="row justify-content-center">
                            {/* <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center', paddingTop: '20px' }}>Today: {date}</h3> */}
                            <div class="col-md-auto my-auto" >
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    style={{ justifyContent: 'center', marginTop: '20px' }}
                                    onClick={this.handleReminderOpen.bind(this)}
                                >Add Reminder Manually</button>
                            </div>
                        </div>
                    </div>

                    {/* <div class="row justify-content-center"> */}
                        <div class="col-4 text-center list">
                        {/* loop through the reminders and add display them */}
                            {this.state.reminderList.map((reminder) => {
                                return (
                                    <div class="row justify-content-center" style={{width: '95%', marginLeft: '20px'}}>
                                        <Card
                                            style={{ width: '90%'}}
                                            className="mb-2"
                                        >
                                        <Card.Header style={{backgroundColor: 'rgb(212,228,243)', textAlign: "left"}}>
                                            <div class="row">
                                            <div class="col-8" style={{width: '150px'}}>
                                                <div class="row" style={{wordWrap: 'break-word'}}>
                                                    <strong style={{ fontSize: '22px' }}>{reminder.title}</strong>
                                                </div>
                                                <div class="row">
                                                    <small>{moment(reminder.date).fromNow()}</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div style={{marginLeft: '80px', marginTop: '-10px', cursor: 'pointer'}} onClick={() => this.removeReminder(reminder)}>
                                                <FontAwesomeIcon icon={ faWindowClose } size={40} color="black"/>
                                                </div>
                                            </div>
                                            </div>
                                        </Card.Header>
                                        <Card.Body style={{backgroundColor: 'rgb(105,113,130)'}}>
                                            <Card.Text style={{textAlign: "left"}}>
                                                <div className='reminderDesc'>
                                                    <label style={{ fontWeight: 'bold', color:'black' }}>Task:</label>
                                                    <p style={{ fontSize: '20px' }}>{reminder.description}</p>
                                                </div>
                                                <div>
                                                    <label style={{ fontWeight: 'bold', color:'black' }}> When:</label>
                                                    <p style={{ fontWeight: 'inherit', fontSize: '20px' }}>{reminder.date + " at " + reminder.time}</p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                    // <div class="row justify-content-center" style={{width: '800px', paddingLeft: '45px', paddingBottom: '45px', paddingRight: '45px', marginLeft: '-200px'}}>
                                    //     <Toast className='toast' onClose={() => this.removeReminder(reminder)}>
                                    //         <Toast.Header className='toast-header'>
                                    //             <strong className="mr-auto" style={{ fontSize: '22px' }}>{reminder.title}</strong>
                                    //             <small>{moment(reminder.date).fromNow()}</small>
                                    //         </Toast.Header>
                                    //         <Toast.Body style={{ textAlign: 'left' }}>
                                    //             <div className='reminderDesc'>
                                    //                 <label style={{ fontWeight: 'bold', color:'black' }}>Task:</label>
                                    //                 <p style={{ fontSize: '20px' }}>{reminder.description}</p>
                                    //             </div>
                                    //             <div>
                                    //                 <label style={{ fontWeight: 'bold', color:'black' }}> When:</label>
                                    //                 <p style={{ fontWeight: 'inherit', fontSize: '20px' }}>{reminder.date + " at " + reminder.time}</p>
                                    //             </div>
                                    //         </Toast.Body>
                                    //     </Toast>
                                    // </div>
                                )
                            })}

                            <Modal show={this.state.addReminderOpen} onHide={this.handleClose.bind(this)}>
                                <NewReminder 
                                    handleClose={this.handleClose.bind(this)} 
                                    addReminder={this.handleNewReminder.bind(this)}
                                    selectedDate={this.state.value} />
                            </Modal>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    };
}

export default Reminders;