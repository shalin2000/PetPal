import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedFishInfo.css';
import Header from './Header';

import Card from "react-bootstrap/Card";
import {Button, Modal} from 'react-bootstrap'

class SelectedFishInfo extends Component {

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
                        {this.state.whichModal === "Commitment" ? 
                        <div>
                            <li>Cheaper to look after than other pets, without the big food costs and vet bills.</li>
                            <li>Fish are fairly low maintenance, although you must allocate time to keep the tank and water in good condition.</li>
                            <li>They are a quiet species, making no noise, ever. Fish are also known as a stress reliever, with research showing that the relaxing act of watching them swim silently and without conflict will lower blood pressure.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Aquarium" ? 
                        <div>
                            <li>The size of the aquarium that you need will depend on the type of fish you decide to bring home (consider if it will be a freshwater fish, saltwater fish and the individual species), and how many you will want to get. Overcrowding can lead to low oxygen levels in the water, excess waste and even, in extreme cases, fatalities.</li>
                            <li>To condition water properly, use a dechlorinating agent along with a biological aquarium supplement.</li>
                            <li>pH is an indicator of the acidity or alkalinity of your tank water. Buy a pH test kit to check the pH level. Freshwater fish typically thrive when the pH level is between 6.8 and 7.5, depending on the species. Check regularly for fluctuations and make the necessary changes to recalibrate as a change in pH greater than 0.3 in a 24-hour period can cause a fish to become stressed or susceptible to disease.</li>
                            <li>Never place your aquarium near a window that gets a lot of sun, or next to heating or air vents that can change water temperatures quickly as change in temperature can hurt aqautic life. Tropical freshwater fish require a constant temperature of 72 °F – 82 °F, depending on the species. An aquatic heater will help you maintain the proper temperature.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Cleaning" ? 
                        <div>
                            <li>Plan to replace 25 percent of the water in your aquarium once a month. This will help keep your tank’s water clean and nitrate concentrations at a safe level.</li>
                            <li>A gravel vacuum can help siphon out water and debris—especially that along the bottom of your tank. Keep an eye out for algae buildup, as well. This might appear as cloud on the glass of your tank, or the water itself could look murky, which will lead to decreased oxygen levels in the water.</li>
                            <li>To help clean the algae from your aquarium, use a tank scrub brush or aquarium algae magnet.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Food" ? 
                        <div>
                            <li>Different types of fish need different types of food. Pellet fish food is categorized by size, nutritional value, and whether it’s floating or sinking. Floating pellets in a round shape are best for fish like cichlids and lionheads. </li>
                            <li>Sinking fish food pellets are ideal for bottom feeders like corydoras that typically hang out on or near the substrate. For non-picky eaters like goldfish, either fish pellet food will do.</li>
                            <li>Some, like Bettas, are entirely carnivorous and often do not make good community tank inhabitants.</li>
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
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Commitment"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Commitment</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What kind of commitment is needed in order to provide for pet fish.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Aquarium"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Aquarium</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What sort of living condition is needed for a fish? Aquarium! Click to see more info!
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Cleaning"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Cleaning</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            How do you keep the aquarium clean? These are some few tips to consider when cleaning. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Food"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Food</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Most important part of caring for a pet. What sort of diet does this pet require?
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
                                Breed: In general
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
                            <h2>Commitment</h2>
                            <div className="bulletList">
                                <li>Cheaper to look after than other pets, without the big food costs and vet bills.</li>
                                <li>Fish are fairly low maintenance, although you must allocate time to keep the tank and water in good condition.</li>
                                <li>They are a quiet species, making no noise, ever. Fish are also known as a stress reliever, with research showing that the relaxing act of watching them swim silently and without conflict will lower blood pressure.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Aquarium</h2>
                            <div className="bulletList">
                                <li>The size of the aquarium that you need will depend on the type of fish you decide to bring home (consider if it will be a freshwater fish, saltwater fish and the individual species), and how many you will want to get. Overcrowding can lead to low oxygen levels in the water, excess waste and even, in extreme cases, fatalities.</li>
                                <li>To condition water properly, use a dechlorinating agent along with a biological aquarium supplement.</li>
                                <li>pH is an indicator of the acidity or alkalinity of your tank water. Buy a pH test kit to check the pH level. Freshwater fish typically thrive when the pH level is between 6.8 and 7.5, depending on the species. Check regularly for fluctuations and make the necessary changes to recalibrate as a change in pH greater than 0.3 in a 24-hour period can cause a fish to become stressed or susceptible to disease.</li>
                                <li>Never place your aquarium near a window that gets a lot of sun, or next to heating or air vents that can change water temperatures quickly as change in temperature can hurt aqautic life. Tropical freshwater fish require a constant temperature of 72 °F – 82 °F, depending on the species. An aquatic heater will help you maintain the proper temperature.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Cleaning</h2>
                            <div className="bulletList">
                                <li>Plan to replace 25 percent of the water in your aquarium once a month. This will help keep your tank’s water clean and nitrate concentrations at a safe level.</li>
                                <li>A gravel vacuum can help siphon out water and debris—especially that along the bottom of your tank. Keep an eye out for algae buildup, as well. This might appear as cloud on the glass of your tank, or the water itself could look murky, which will lead to decreased oxygen levels in the water.</li>
                                <li>To help clean the algae from your aquarium, use a tank scrub brush or aquarium algae magnet.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Food</h2>
                            <div className="bulletList">
                                <li>Different types of fish need different types of food. Pellet fish food is categorized by size, nutritional value, and whether it’s floating or sinking. Floating pellets in a round shape are best for fish like cichlids and lionheads. </li>
                                <li>Sinking fish food pellets are ideal for bottom feeders like corydoras that typically hang out on or near the substrate. For non-picky eaters like goldfish, either fish pellet food will do.</li>
                                <li>Some, like Bettas, are entirely carnivorous and often do not make good community tank inhabitants.</li>
                            </div>
                        </div>
                    </div>
                </div> */}
               
           </div> 
        )
    };
}

export default SelectedFishInfo;