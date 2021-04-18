import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

// form component for a new reminder
// TODO: save the reminder info to local storage and display it on reminders,
// currently clicking "new reminder" button just closes the form
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <form className="new-pet-form">
                <Modal.Header closeButton>
                <Modal.Title>Login/Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{marginTop: "5%"}}>
                        <div className = "row justify-content-right">
                            {/* ----------- Log in stuff ----------- */}
                            <div className = "col" >
                                <div className="grey-text" style={{marginTop:"50%"}}>
                                    <div className='form-group '>
                                        <h5>Email</h5>
                                        <input label="email" placeholder = "johnDoe@gmail.com"  type="text" disabled={true} />
                                    </div>
                                    <div className='form-group '>
                                        <h5>Password</h5>
                                        <input label="Your password" placeholder = "*********"  type="password" disabled={true} />
                                    </div>
                                    <div className = "btn" style={{marginLeft: "15%", marginTop: "25%"}}>
                                        <Button onClick={this.props.handleClose}>
                                            Sign-In
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className = "vl"></div>

                            {/* ----------- Sign up stuff ----------- */}
                            <div className = "col " style={{marginLeft: "10px"}}>
                                <div className="grey-text">
                                    <div className='form-group '>
                                        <h5>Enter name</h5>
                                        <input label="Your name" placeholder = "John Doe" type="text" disabled={true}/>
                                    </div>
                                    <div className='form-group '>
                                        <h5>Email</h5>
                                        <input label="Your email" placeholder = "johnDoe@gmail.com" type="email" disabled={true}/>
                                    </div>
                                    <div className='form-group '>
                                        <h5>Confirm Email</h5>
                                        <input label="Confirm your email" placeholder = "johnDoe@gmail.com" type="text" disabled={true}/>
                                    </div>
                                    <div className='form-group '>
                                        <h5>Password</h5>
                                        <input label="Your password" placeholder = "*********" type="password" disabled={true}/>
                                    </div>
                                    <div className = "btn" style={{marginLeft: "15%"}}>
                                        <Button onClick={this.props.handleClose}>
                                            Sign-Up
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="form-buttons" variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </form>
        )
    }
}

export default Login