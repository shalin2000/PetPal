import React from 'react'
import {Button, Modal} from 'react-bootstrap'

class NewPet extends React.Component{

    constructor(props){
        super(props)
        this.state={
            petName: "", 
            petAge: 0,
            petInfo: "",
            img: "",
            petBreed: ""

        }
        this.savePet = this.savePet.bind(this)
    }

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
    updateBreed(breed){
        this.setState(()=>{
            return {
                petBreed: breed.target.value
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
        this.props.addPetCard(
            this.state.petName, 
            this.state.petAge,
            this.state.petInfo,
            this.state.img,
            this.state.petBreed
         )
    }

    render(){
        return(
            <form>
                <Modal.Header closeButton>
                <Modal.Title>New Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label >Pet Name</label>
                            <input type='text' className='form-control' placeholder='Enter pet name' onChange={(e)=>{this.updateName(e)}}/>
                        </div>
                        <div className='form-group'>
                            <label>Pet Age</label>
                            <input type='text' className='form-control' placeholder='Enter age' onChange={(e)=>{this.updateAge(e)}}/>
                        </div>
                        <div>
                            <label>Enter Breed </label>
                            <input type='text' className='form-control' onChange={(e)=>{this.updateBreed(e)}}/>
                        </div>
                        <div className='form-group '>
                            <label>Enter Pet Info </label>
                            <textarea type='text' className='form-control' onChange={(e)=>{this.updateInfo(e)}}/>
                        </div>
                        <div className='form-group '>
                            <label>Enter Img URL </label>
                            <input type='text' className='form-control' onChange={(e)=>{this.updateImg(e)}}/>
                        </div>
                        
                    </form>
                    

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.savePet}>
                    Add Pet
                </Button>
            </Modal.Footer>
        </form>
        )
    }
}

export default NewPet