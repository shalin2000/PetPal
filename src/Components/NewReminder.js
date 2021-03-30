import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"


// form component for a new reminder
// TODO: save the reminder info to local storage and display it on reminders,
// currently clicking "new reminder" button just closes the form
class NewReminder extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
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
                            <input type='text' className='form-control' placeholder='Enter a title'/>
                        </div>
                        <div className='form-group'>
                            <label className="form-label">Task Description</label>
                            <textarea type='text' className='form-control' placeholder='Enter task description'/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Date </label>
                            <input type='date' className='form-control'/>
                        </div>
                        <div>
                            <label className="form-label">Enter Time </label>
                            <input type='time' className='form-control'/>
                        </div>
                    </form>
                    

                </Modal.Body>
                <Modal.Footer>
                <Button className="form-buttons" variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button className="form-add" variant="primary" onClick={this.props.handleClose}>
                    Add Reminder
                </Button>
            </Modal.Footer>
        </form>
        )
    }
}

export default NewReminder