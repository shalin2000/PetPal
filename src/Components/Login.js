import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

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
                <Modal.Title >Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>

              <form style={{marginTop: "5%"}}>
                  <div className = "row justify-content-right">
                      <div className = "col " style={{marginLeft: "10px"}}>
                        <div className="grey-text">
                            <div className='form-group '>
                                <h5>Enter name</h5>
                                <input label="Your name" placeholder = "Your Name" type="text"/>
                            </div>
                            <div className='form-group '>
                                <h5>Email</h5>
                                <input label="Your email" placeholder = "Your Email" type="email" />
                            </div>
                            <div className='form-group '>
                                <h5>Confirm Email</h5>
                                <input label="Confirm your email" placeholder = "Confirm Email"  type="text" />
                            </div>
                            <div className='form-group '>
                                <h5>Password</h5>
                                <input label="Your password" placeholder = "Password"  type="password" />
                            </div>
                            <div className = "btn" style={{marginLeft: "15%"}}>
                                <Button  >
                                    Sign-Up
                                </Button>
                            </div>
                        
                        
                        </div>
                      </div>

                      <div className = "vl" >

                      </div>

                      <div className = "col" >
                        <div className="grey-text" style={{marginTop:"50%"}}>
                            <div className='form-group '>
                                <h5>Email</h5>
                                <input label="email" placeholder = "Email"  type="text" />
                            </div>
                            <div className='form-group '>
                                <h5>Password</h5>
                                <input label="Your password" placeholder = "Password"  type="password" />
                            </div>
                            <div className = "btn" style={{marginLeft: "15%", marginTop: "25%"}}>
                                <Button  >
                                    Sign-In
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