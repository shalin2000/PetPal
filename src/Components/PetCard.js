import React,{Component} from 'react'
import {Card,Button} from 'react-bootstrap'

class PetCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        
        return (
            <div style={{margin:'15px', display:'flex',}}>
            <Card style={{ width: '18rem',padding:'5px'}}>
                <Card.Img variant="top" src={this.props.info.img} />
                <Card.Body>
                        <Card.Title>{this.props.info.title}</Card.Title>
                        <Card.Text>Age: {this.props.info.age}</Card.Text>
                        <Card.Text>Breed: {this.props.info.breed}</Card.Text>
                        <Card.Text>Info: {this.props.info.info}</Card.Text>  
                    <Button variant="primary" onClick={this.props.info.handleReminder}>New Reminder</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default PetCard