import React,{Component} from 'react'
import {Card,Button} from 'react-bootstrap'
import '../CSS/PetCard.css';

class PetCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    removePet = () =>{
        this.props.handleRemove(this.props.info)
    }

    render(){
        
        return (
            <div id="outer-card">
            <Card id="pcards" >
                <div style={{border:"red"}}>
                    <Button 
                        id='removeCard' 
                        style={{justifyContent: 'flex-end',display: 'flex'}}
                        onClick={this.removePet}
                        title="Remove Pet"
                        >X</Button>
                   <Card.Img variant="top" src={this.props.info.img} /> 
                </div>
                
                <Card.Body>
                        <Card.Title>{this.props.info.title}</Card.Title>
                        <Card.Text>Age: {this.props.info.age}</Card.Text>
                        <Card.Text>Animal: {this.props.info.animal}</Card.Text>
                        <Card.Text>Info: {this.props.info.info}</Card.Text>  
                    <Button id="new-reminder-button" variant="primary" onClick={this.props.handleAdd}>New Reminder</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
    // removePet = () =>{
    //     this.props.handleRemove(this.props.info)
    // }
}

export default PetCard