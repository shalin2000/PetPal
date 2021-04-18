import React, { Component } from 'react';
// import { Dropdown } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import { Link } from "react-router-dom";

import '../CSS/SelectedDogInfo.css';
import Header from './Header';
import GermanShepard from '../Images/GermanShepard.png';
import Husky from '../Images/Husky1.png';

import Card from "react-bootstrap/Card";
import {Button, Modal} from 'react-bootstrap'

class SelectedDogInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petType: '',
            petImg: '',
            breed: '',
            openModal:false,
            whichModal: ''
        };
    }

    componentDidMount(){
        this.setState({
            petType: this.props.location.state.petType,
            petImg: this.props.location.state.petImg,
            breed: ''
        })
    }
    
    openModal(){
        return <form className="new-pet-form">
                    <Modal.Header closeButton  >
                    <Modal.Title>{this.state.whichModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {/* ---------- For initial option ---------- */}
                    {this.state.breed === "" ?
                        <div>
                            <div>
                                {this.state.whichModal === "Training" ? 
                                <div>
                                    Select a breed first!
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Diet" ? 
                                <div>
                                    Select a breed first!
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Grooming" ? 
                                <div>
                                    Select a breed first!
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Supplies" ? 
                                <div>
                                    Select a breed first!
                                </div>
                                : null}
                            </div>
                        </div>
                    :
                    null }
                    {/* ---------- For Husky ---------- */}
                    {this.state.breed.value === "Husky" ?
                        <div>
                            <div>
                                {this.state.whichModal === "Training" ? 
                                <div>
                                    <li>The most important thing to keep in mind with a husky is that, huskies are quiet stubborn dogs, and they’re not the best option if you’re a first-time owner or you want a dog that will tolerate being alone.</li>
                                    <li>Siberian Huskies are a popular breed thanks to their unique appearance and representation in films and books. However, these sled-pulling dogs tend to have a mind of their own and an independent spirit, which makes them one of the worst dogs to train.</li>
                                    <li>Be a good leader when training a husky. These dogs have a strict hierarchy order and will challenge owners who don’t enforce their rules. So, one of the most important things in training husky puppies is to establish your position as the leader.</li>
                                    <li>The husky obedience training formula relies on positive reinforcement and patience. Start by teaching your husky puppy something easy – his name, for example. Then you can move to other basic commands such as “sit,” “stay,” or “lay down.”</li>
                                    <li>All dogs need collars, and Husky puppies are no exception. Since Huskies tend to be stubborn, some owners consider pinch or choke collars. However, such collars are risky to use for inexperienced owners due to the risk of damaging your dog’s throat.</li>
                                    <li>You must train your husky to potty outside. A lot of owners wonder how to potty training their husky puppy since they’re notoriously difficult to housebreak.</li>
                                    <li>Train your husky to use crate. Can you allow your Husky puppy to roam the house without supervision? The answer is no. Even if you’ve puppy-proofed the house, Huskies can be quite destructive and get into a lot of trouble.</li>
                                    <li>Prevent your dog from running away. A lot of owners make the mistake of letting their Husky puppy off the leash only to discover that the little bugger has run way. Huskies have a strong desire to chase small animals, so they will use every opportunity you give them to indulge in this habit.</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Diet" ? 
                                <div>
                                    <li>There are three main types of diets that Siberian huskies are fed: raw food, commercial dog food including dry and wet varieties, or a combination of the two.</li>
                                    <li>Before discussing the best foods for your dog, it’s important to consider just how much food you should be feeding him and how often. A consistent feeding schedule is  essential for your husky, especially around his exercise schedule. Never feed your husky right before exercising; wait at least two hours so he won’t exercise with a full stomach.</li>
                                    <li>Do not feed your husky 30 minutes after exercising either, as this time allows his body to cool down. Feeding him too close to his exercise routines subjects him to gastric torsion, which is when a dog’s stomach twists and bloats dangerously with gas.</li>
                                    <li>Siberian huskies were bred to be working dogs in harsh conditions where food was hard to come by. Huskies’ bodies are more efficient at burning calories and using nutrients, and therefore they are used to eating less than other breeds of dogs.</li>
                                    <li>Recommended food: Nutro Max Chicken Meal And Rice, Orijen, Innova etc.</li>
                                    <li>And avoid foods such as avacado, alcohol, sweets, sugar, onions, raw meet and fish, dairy, grapes or raisins, yeast dow etc.</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Grooming" ? 
                                <div>
                                    <li>At least once a year the Siberian Husky sheds his entire undercoat. This process can last up to six weeks from start to finish.</li>
                                    <li>Overall the Siberian Husky needs very little grooming compared to other breeds, no trimming of hair is needed, just a regular brush to remove any dead hair. Do not shave, strip or clip your husky close.</li>
                                    <li>Never clip your huskies whiskers – they are sensory devices that your dog needs. Whiskers vibrate as a warning to the dog when they come into contact with something solid.</li>
                                    <li>The tools we recommend for the job: undercoat, rake and a Furminator</li>
                                    <li>For cleaning use a shampoo and grooming glove</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Supplies" ? 
                                <div>
                                    These are the must-have new puppy items you should have on hand before you bring your new puppy home.
                                    <li>Crate for a Husky</li>
                                    <li>Bed for a Husky</li>
                                    <li>Harness for a Husky</li>
                                    <li>Vacuum for Husky Hair</li>
                                    <li>Treats for a Husky</li>
                                    <li>Vitamin Chews for a Husky</li>
                                    <li>Comfort Item for a Husky Puppy</li>
                                    <li>Leash for a Husky</li>
                                    <li>Interactive Toys for a Husky</li>
                                    <li>Toys for a Husky</li>
                                    <li>Agility Set for a Husky</li>
                                    <li>Food for a Husky</li>
                                    <li>Brushes for a Husky</li>
                                    <li>Shampoo for a Husky</li>
                                    <li>Cooling Mat for a Husky</li>
                                    <li>ID Tags for a Husky</li>
                                    <li>Puppy Pen for a Husky</li>
                                    <li>Puppy Gate for a Husky</li>
                                    <li>Pet-Friendly Cleaning Products</li>
                                    <li>Food Container for a Husky</li>
                                </div>
                                : null}
                            </div>
                        </div>
                    :
                    null }
                    {/* ---------- For German Shepard ---------- */}
                    {this.state.breed.value === "German Shepard" ?
                        <div>
                            <div>
                                {this.state.whichModal === "Training" ? 
                                <div>
                                    <li>Puppies of all breeds have a critical socialization window that closes at 12 to 16 weeks of life, however, a german Shepherd a protective guardian by nature</li>
                                    <li>Their most powerful tool is their ability to sniff and recognize</li>
                                    <li>They tend to use their mouths as a hand thanks to that herding heritage. It’s even right there in their name, ShepHERD. This mouthing behavior is natural, so expect your GSD to mouth you and chew anything that will fit inside your pet’s mouth. However, that doesn’t mean you should let it go. What might be cute in your small puppy will get harder and stronger as your dog grows up. Training your dog not to chew your hand or the furniture is essential with this breed.</li>
                                    <li>German Shepherd do shed a lot of hair, whether it be on furniture, floor and even on your own clothes. German Shepherds are very active, and that is what they expect from their owners. They always want to move and play.</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Diet" ? 
                                <div>
                                    <li>German Shepherds eat a variety of foods, however due to their large size and working dog history, they require certain dietary standards. You should feed your German Shepherd a high-quality, protein-rich diet such as Instinct Duck Dog Food, Turducken Dog Food or Merrick Lil Plates Chicken and Sweet Potato that includes essential vitamins, fats, carbohydrates, minerals, and fattyacid.</li>
                                    <li>The German shepherd dog is a muscular working dog with a high energy level and a hearty appetite. To prevent obesity and to help avoid some hereditary health problems that occur in the breed, provide your dog plenty of exercise and feed them a high-quality diet.</li>
                                    <li>German shepherd dogs are large dogs, usually weighing between 60 and 90 pounds. The National Research Council of the National Academies says inactive or older dogs of this weight range require between 1,272 and 1,540 calories per day, while active dogs need between 1,740 and 2,100 calories per day.</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Grooming" ? 
                                <div>
                                    <li>German Shepherds do shed, so one of the first things nearly every breeder will tell you is to invest in a good vacuum cleaner!</li>
                                    <li>The owner must use the right tools in right ways, otherwise the tools can damage your dog’s coat.</li>
                                    <li>A Furminator is a good tool to shed and groom a german Shepherds hair</li>
                                    <li>The owners may also need to check on how often their dog needs their nails to be trimmed, it is based on where your dog walks or runs the most</li>
                                </div>
                                : null }
                            </div>
                            <div>
                                {this.state.whichModal === "Supplies" ? 
                                <div>
                                    These are the must-have new puppy items you should have on hand before you bring your new puppy home.
                                    <li>Crate</li>
                                    <li>Bedding: blankets, crate pads, blankets</li>
                                    <li>Food and water bowls</li>
                                    <li>Playpen or play yard</li>
                                    <li>Food</li>
                                    <li>Grooming supplies: brushes and combs, shampoo, nail clippers, dental care,</li>
                                    <li>Treats</li>
                                    <li>Toys: plush toys, chew toys, interactive puzzles</li>
                                    <li>Leashes, collars, and ID tags</li>
                                    <li>Training aids: puppy pads, training treats, clickers, and whistles, no-chew spray</li>
                                    <li>Cleaning supplies: pooper scooper, stain and odor remover, poop bags</li>
                                </div>
                                : null}
                            </div>
                        </div>
                    :
                    null }
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
                        className="mb-2"
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
                        className="mb-2"
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
                        className="mb-2"
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
                        className="mb-2"
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
        const breedOptions = ['German Shepard', 'Husky'];

        return(
           <div className="selectedPetInfo">
               {/* uses the header.js file to get the burger menu */}
               <Header />

               <h2 style={{textAlign: 'center'}}>{this.state.petType} Info</h2>
               
               {/* chosen pet and enter breed */}
               <div className="container center">
                    <div className="row justify-content-center">
                        <div className="col-md-auto">
                            {this.state.breed === "" ? <img className="petImg" src={this.state.petImg} alt="chosen pet"/> : null}
                            {this.state.breed.value === "German Shepard" ? <img className="petImg" src={GermanShepard} alt="german shepard"/> : null}
                            {this.state.breed.value === "Husky" ? <img className="petImg" src={Husky} alt="husky"/> : null}
                            {/* <div class="row justify-content-center">
                                <label class="petName">{this.state.petType}</label>
                            </div> */}
                        </div>
                        <div className="col-md-auto my-auto">
                            <label>
                                {/* Breed: */}
                                <Dropdown 
                                    options={breedOptions} 
                                    onChange={val => this.setState({breed: val})} 
                                    value={this.state.breed.value} 
                                    placeholder="Please Select a breed" 
                                />
                                {console.log(this.state.breed.value)}
                            </label>
                        </div>
                    </div>
               </div>
               
               {/* pet info */}
               <div style={{marginTop: '15px'}}>
                   {this.makeCategoryCard()}
               </div>

           </div> 
        )
    };
}

export default SelectedDogInfo;