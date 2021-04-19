import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"
 import Reminders from './Reminders'

// form component for a new reminder
// TODO: save the reminder info to local storage and display it on reminders,
// currently clicking "new reminder" button just closes the form
class NewReminder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            date: "",
            time: "",
        }
        this.saveReminder = this.saveReminder.bind(this)
    }

    updateTitle(val){
        this.setState(()=>{
            return {
                title: val.target.value,
            }
        })
    }

    updateDescription(val){
        this.setState(()=>{
            return {
                description: val.target.value,
            }
        })
    }

    updateDate(val){
        this.setState(()=>{
            return {
                date: val.target.value,
            }
        })
    }

    updateTime(val){
        this.setState(()=>{
            return {
                time: val.target.value,
            }
        })
    }



    saveReminder(){
        let newRe = localStorage.getItem('newReminderList')
        newRe = newRe ? JSON.parse(newRe) : [];
        newRe.push(this.state)
        console.log('newrr', newRe)
        localStorage.setItem('newReminderList1', JSON.stringify(newRe))
        this.props.handleClose()
  
    }

    render(){
        return (
            <form className="new-pet-form">
                <Modal.Header closeButton>
                <Modal.Title>New Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label className="form-label">Task Title</label>
                            <input type='text' className='form-control' placeholder='Enter a title' onChange={(e)=>{this.updateTitle(e)}}/>
                        </div>
                        <div className='form-group'>
                            <label className="form-label">Task Description</label>
                            <textarea type='text' className='form-control' placeholder='Enter task description ' onChange={(e)=>{this.updateDescription(e)}}/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Date </label>
                            <input type='date' className='form-control' onChange={(e)=>{this.updateDate(e)}}/>
                        </div>
                        <div>
                            <label className="form-label">Enter Time </label>
                            <input type='time' className='form-control' onChange={(e)=>{this.updateTime(e)}}/>
                        </div>
                    </form>
                    

                </Modal.Body>
                <Modal.Footer>
                <Button className="form-buttons" variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button className="form-add" variant="primary" onClick={this.saveReminder}>
                    Add Reminder
                </Button>
            </Modal.Footer>
        </form>
        )
    }
}

export default NewReminder