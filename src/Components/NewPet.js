import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import "../CSS/NewPet.css"

class NewPet extends React.Component{

    constructor(props){
        super(props)

        // initial state of information for new pet card form
        this.state={
            petName: this.props.pet?(this.props.pet.title):"", 
            petAge: this.props.pet?(this.props.pet.age):"",
            petInfo: this.props.pet?(this.props.pet.info):"",
            img: this.props.pet?(this.props.pet.img):"",
            petAnimal: this.props.pet?(this.props.pet.animal):""

        }
        this.savePet = this.savePet.bind(this)
    }

    // update the information the users types in the form 
    updateName(name){
       
        this.setState(()=>{
            return {
                petName: name,
            }
        })
    }
    updateAge(age){
        this.setState(()=>{
            return {
                petAge: age,
            }
        })
    }
    updateAnimal(animal){
        this.setState(()=>{
            return {
                petAnimal: animal
            }
        })
    }
    updateInfo(info){
        this.setState(()=>{
            return {
                petInfo: info,
            }
        })
    }
    updateImg(image){
        this.setState(()=>{
            return {
                img: image,
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

    editPetCard(){

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
                            <input defaultValue={this.state.petName} type='text' className='form-control' placeholder='Enter pet name' onChange={(e)=>{this.updateName(e.target.value)}}/>
                            <br/>
                        </div>
                        <div className='form-group'>
                            <label className="form-label">Pet Age</label>
                        <input defaultValue={this.state.petAge} type='text' className='form-control' placeholder='Enter age' onChange={(e)=>{this.updateAge(e.target.value)}}/>
                            <br/>
                        </div>
                        <div>
                            <label className="form-label">Enter Animal </label>
                        <input defaultValue={this.state.petAnimal} type='text' className='form-control' placeholder='Enter pet type' onChange={(e)=>{this.updateAnimal(e.target.value)}}/>
                            <br/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Pet Info </label>
                            <textarea defaultValue={this.state.petInfo} type='text' className='form-control' placeholder='Enter pet info' onChange={(e)=>{this.updateInfo(e.target.value)}}/>
                        </div>
                        <div className='form-group '>
                            <label className="form-label">Enter Img URL </label>
                            <input defaultValue={this.state.img} type='text' className='form-control' placeholder='Enter pet img URL' onChange={(e)=>{this.updateImg(e.target.value)}}/>
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