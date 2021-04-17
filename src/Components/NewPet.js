import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"

class NewPet extends React.Component{

    constructor(props){
        super(props)

        // initial state of information for new pet card form
        this.state={
            petName: "", 
            petAge: 0,
            petInfo: "",
            img: "",
            petAnimal: ""

        }
        this.savePet = this.savePet.bind(this)
    }

    // update the information the users types in the form 
    updateName(name){
        this.setState(()=>{
            return {
                petName: name.target.value,
            }
        })
    }
    updateAge(age){
        this.setState(()=>{
            return {
                petAge: age.target.value,
            }
        })
    }
    updateAnimal(animal){
        this.setState(()=>{
            return {
                petAnimal: animal.target.value
            }
        })
    }
    updateInfo(info){
        this.setState(()=>{
            return {
                petInfo: info.target.value,
            }
        })
    }
    updateImg(image){
        this.setState(()=>{
            return {
                img: image.target.value,
            }
        })
    }

    savePet(){
        // save the new pet card, and display it
        this.props.addPetCard(
            this.state.petName, 
            this.state.petAge,
            this.state.petInfo,
            this.state.img,
            this.state.petAnimal
         )
    }

    render(){
        return(
            <form className="new-pet-form">
                <Modal.Header closeButton  >
                <Modal.Title>New Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form >
                        <div className='form-group' >
                            <label className="form-label">Pet Name</label>
                            <input type='text' className='form-control' placeholder='Enter pet name' onChange={(e)=>{this.updateName(e)}}/>
                            <br/>
                        </div>
                        <div className='form-group'>
                            <label className="form-label">Pet Age</label>
                            <input type='text' className='form-control' placeholder='Enter age' onChange={(e)=>{this.updateAge(e)}}/>
                            <br/>
                        </div>
                        <div>
                            <label className="form-label">Enter Animal </label>
                            <input type='text' className='form-control' onChange={(e)=>{this.updateAnimal(e)}}/>
                            <br/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Pet Info </label>
                            <textarea type='text' className='form-control' onChange={(e)=>{this.updateInfo(e)}}/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Img URL </label>
                            <input type='text' className='form-control' onChange={(e)=>{this.updateImg(e)}}/>
                        </div>
                        
                    </form>
                    

                </Modal.Body>
                <Modal.Footer>
                <Button className="form-buttons" variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button className="form-add" variant="primary" onClick={this.savePet}>
                    Add Pet
                </Button>
            </Modal.Footer>
        </form>
        )
    }
}

export default NewPet