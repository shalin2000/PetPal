import React from 'react'
import {Button, Modal} from 'react-bootstrap'

class NewReminder extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <form>
                <Modal.Header closeButton>
                <Modal.Title>New Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label >Task Title</label>
                            <input type='text' className='form-control' placeholder='Enter a title'/>
                        </div>
                        <div className='form-group'>
                            <label>Task Description</label>
                            <textarea type='text' className='form-control' placeholder='Enter task description'/>
                        </div>
                        <div className='form-group '>
                            <label>Enter Date </label>
                            <input type='date' className='form-control'/>
                        </div>
                        <div>
                            <label>Enter Time </label>
                            <input type='time' className='form-control'/>
                        </div>
                    </form>
                    

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.saveReminder}>
                    Add Reminder
                </Button>
            </Modal.Footer>
        </form>
        )
    }
}

export default NewReminder