import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedRabbitInfo.css';
import Header from './Header';

import Card from "react-bootstrap/Card";
import {Button, Modal} from 'react-bootstrap'

class SelectedRabbitInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petType: '',
            petImg: '',
            openModal:false,
            whichModal: ''
        };
    }

    componentDidMount(){
        this.setState({
            petType: this.props.location.state.petType,
            petImg: this.props.location.state.petImg
        })
    }
    
    openModal(){
        return <form className="new-pet-form">
                    <Modal.Header closeButton  >
                    <Modal.Title>{this.state.whichModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.whichModal === "Training" ? 
                        <div>
                            <li>To make the rabbit trust you, lead it towardss yourself with treats while calling his name. Repeat this twice a day
                                in a calm environment where it won't get startled. This builds up its confidence to be near you and trains it to come
                                whenever it hears you call its name. Be wary of signs of stress such as freezing in place or trying to leave and stop
                                the session if this happens. To litter train the rabbit place the box in a desired spot and limit them from moving too
                                far away so they get used to it. Make sure to use rabbit approved litter as the animal likes to nibble and could ingest
                                toxic substances.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Diet" ? 
                        <div>
                            <li>Give the pet rabbit safe treats in moderation, as their diet should mainly be timothy hay, pellet feed, and fresh water.
                                Be wary of overfeeding the rabbit pellets, as it leads to obesity and soft stools. In addition, give the rabbits fresh
                                vegetables that are not too high in carbohydrates. While carrots are a stereotypical rabbit food, they are actually
                                very high in carbs and will upset the rabbit's GI tract if given too much. The best vegetables would be lettuce, bok choy,
                                mustard greens, and broccoli greens.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Grooming" ? 
                        <div>
                            <li>Grooming the rabbit involves brushing and trimming their fur, as well as removing debris that gets caught up in it.
                                The rabbit needs to be brushed every three days, and more frequently (daily) when they shed. Brush gently to avoid
                                hurting their skin. Use a slicker brush for this. Follow this up with a rubber grooming tool. Make sure to clip their
                                nails or file them down when they get too long. In this process look at the side of the nail and notice a vein. Do not
                                clip further than the vein as it will cause bleeding. This can be done during a vet visit or at home, but excercise
                                caution.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Supplies" ? 
                        <div>
                            <li>You will need a litter box with a cage, a pellet bowl, water bottle, and chew toys for their dedicated area. The food
                                supplies should be pellets, fresh veggies, timothy hay, and chew safe wood. To bring your rabit along when traveling
                                you will need a carrier with a blanket inside for comfort. For grooming you should have a brush, nail clipper, and
                                styptic powder in case the rabbit bleeds during nail cutting.</li>
                        </div>
                        :
                        null
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="form-buttons" variant="secondary" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: ""})}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
    }

    makeCategoryCard(){
        return ['Dark'].map((variant, idx) => (
            <div class="container center">
                <div class="row justify-content-center">
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Training"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Training</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What are some training that can be taught to this pet? Any special training?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Diet"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Diet</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Most important part of caring for a pet. What sort of diet does this pet require?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Grooming"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Grooming</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Grooming can be hard but is very essential for the pet. Get proper info for grooming!
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Supplies"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Supplies</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What are some supplies that are required for this pet? What will make them happy?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <Modal show={this.state.openModal} onHide={() => this.setState({openModal: !this.state.openModal, whichModal: ""})}>
                        {this.openModal()}
                    </Modal>
                </div>
            </div>
            
        ));
    }

    render (){
        return(
           <div className="selectedPetInfo">
               {/* uses the header.js file to get the burger menu */}
               <Header />

               <h2 style={{textAlign: 'center'}}>{this.state.petType} Info</h2>
               
               {/* chosen pet and enter breed */}
               <div class="container center">
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <img class="petImg" src={this.state.petImg} alt="chosen pet"/>
                            {/* <div class="row justify-content-center">
                                <label class="petName">{this.state.petType}</label>
                            </div> */}
                        </div>
                        <div class="col-md-auto my-auto">
                            <label>
                                Breed: Holland Lop Rabbit
                                {/* <input type="text" name="name" /> */}

                            </label>
                        </div>
                    </div>
               </div>
               
               {/* pet info */}
               <div style={{marginTop: '15px'}}>
                   {this.makeCategoryCard()}
               </div>

               {/* pet info */}
               {/* <div class="container center">
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <h2>Training</h2>
                            <div className="bulletList">
                                <li>To make the rabbit trust you, lead it towardss yourself with treats while calling his name. Repeat this twice a day
                                    in a calm environment where it won't get startled. This builds up its confidence to be near you and trains it to come
                                    whenever it hears you call its name. Be wary of signs of stress such as freezing in place or trying to leave and stop
                                    the session if this happens. To litter train the rabbit place the box in a desired spot and limit them from moving too
                                    far away so they get used to it. Make sure to use rabbit approved litter as the animal likes to nibble and could ingest
                                    toxic substances.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Diet</h2>
                            <div className="bulletList">
                                <li>Give the pet rabbit safe treats in moderation, as their diet should mainly be timothy hay, pellet feed, and fresh water.
                                    Be wary of overfeeding the rabbit pellets, as it leads to obesity and soft stools. In addition, give the rabbits fresh
                                    vegetables that are not too high in carbohydrates. While carrots are a stereotypical rabbit food, they are actually
                                    very high in carbs and will upset the rabbit's GI tract if given too much. The best vegetables would be lettuce, bok choy,
                                    mustard greens, and broccoli greens.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Grooming</h2>
                            <div className="bulletList">
                                <li>Grooming the rabbit involves brushing and trimming their fur, as well as removing debris that gets caught up in it.
                                    The rabbit needs to be brushed every three days, and more frequently (daily) when they shed. Brush gently to avoid
                                    hurting their skin. Use a slicker brush for this. Follow this up with a rubber grooming tool. Make sure to clip their
                                    nails or file them down when they get too long. In this process look at the side of the nail and notice a vein. Do not
                                    clip further than the vein as it will cause bleeding. This can be done during a vet visit or at home, but excercise
                                    caution.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Supplies</h2>
                            <div className="bulletList">
                                <li>You will need a litter box with a cage, a pellet bowl, water bottle, and chew toys for their dedicated area. The food
                                    supplies should be pellets, fresh veggies, timothy hay, and chew safe wood. To bring your rabit along when traveling
                                    you will need a carrier with a blanket inside for comfort. For grooming you should have a brush, nail clipper, and
                                    styptic powder in case the rabbit bleeds during nail cutting.</li>
                            </div>
                        </div>
                    </div>
                </div> */}
               
           </div> 
        )
    };
}

export default SelectedRabbitInfo;