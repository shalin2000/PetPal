import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../CSS/PetCard.css';

class PetCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popUpOpen: false
        }
    }

    toggleCardOptions() {
        this.setState(() => {
            return {
                popUpOpen: !this.state.popUpOpen
            }
        }
        )
    }
    removePet = () => {
        this.props.handleRemove(this.props.info)
    }

    editCard() {
        this.props.handleEdit(this.props.info)
    }


    render() {

        return (
            <div id="outer-card">
                <Card id="pcards" >
                    <div style={{ border: "red" }}>
                        <button id='removeCard' style={{ display: 'flex' }} onClick={this.removePet} title="Remove Pet">
                            <FontAwesomeIcon icon={faTimes} size={40} style={{ color: 'tan' }} />
                        </button>

                        <Card.Img variant="top" src={this.props.info.img} />
                    </div>

                    <Card.Body>
                        <Card.Title>{this.props.info.title}</Card.Title>
                        <Card.Text>Age: {this.props.info.age}</Card.Text>
                        <Card.Text>Animal: {this.props.info.animal}</Card.Text>
                        <Card.Text>Info: {this.props.info.info}</Card.Text>
                        <Button id="new-reminder-button" variant="primary" onClick={this.props.handleAdd}>New Reminder</Button><br />
                        <Button style={{ marginTop: '5%' }} id="edit-reminder-button" variant="primary" onClick={this.editCard.bind(this)}>Edit pet</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default PetCard