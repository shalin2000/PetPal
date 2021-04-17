import React,{Component} from 'react'
import {Card,Button} from 'react-bootstrap'
import '../CSS/PetCard.css';

class PetCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        
        return (
            <div id="outer-card">
            <Card id="pcards" >
                <div style={{border:"red"}}>
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
}

export default PetCard