import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../CSS/NewPet.css"


class NewReminder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            date: this.props.selectedDate?this.props.selectedDate.toISOString().slice(0, 10):"",
            time: "",
        }
        this.saveReminder = this.saveReminder.bind(this)
    }

    updateTitle(val) {
        this.setState(() => {
            return {
                title: val.target.value,
            }
        })
    }

    updateDescription(val) {
        this.setState(() => {
            return {
                description: val.target.value,
            }
        })
    }

    updateDate(val) {
        this.setState(() => {
            return {
                date: val.target.value,
            }
        })
    }

    updateTime(val) {
        this.setState(() => {
            return {
                time: val.target.value,
            }
        })
    }


    // call fucntion to save the reminder
    saveReminder() {
        this.props.addReminder(
            this.state.title,
            this.state.description,
            this.state.date,
            this.state.time,
        )


    }

    render() {
        return (
            <form className="new-pet-form">
                <Modal.Header closeButton>
                    <Modal.Title>New Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label className="form-label">Title</label>
                            <input type='text' className='form-control' placeholder='Enter a title' onChange={(e) => { this.updateTitle(e) }} />
                        </div>
                        <div className='form-group'>
                            <label className="form-label">Task Description</label>
                            <textarea type='text' className='form-control' placeholder='Enter task description ' onChange={(e) => { this.updateDescription(e) }} />
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Date </label>
                            <input 
                                type='date' 
                                value={this.props.selectedDate?this.props.selectedDate.toISOString().slice(0, 10):null} 
                                className='form-control' 
                                onChange={(e) => { this.updateDate(e) }} />
                        </div>
                        <div>
                            <label className="form-label">Enter Time </label>
                            <input type='time' className='form-control' onChange={(e) => { this.updateTime(e) }} />
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