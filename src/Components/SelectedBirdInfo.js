import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedBirdInfo.css';
import Header from './Header';
import Card from "react-bootstrap/Card";
import {Button, Modal} from 'react-bootstrap'

class SelectedBirdInfo extends Component {

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
                            <li>Birds need continual stimulation in their habitats and some birds can become frustrated or bored if they are not allowed time out of their habitat every day for interaction. You should set aside a specific time for you and your bird to interact and play with toys for instance.</li>
                            <li>The habitat structure, perches, dishes, toys and grates should be cleaned out at least weekly. Food and water dishes should be cleaned and refreshed daily as well.</li>
                            <li>Birds are very long-lived and will be lifelong companions. For example, a cockatiel can live up to 25 years, an Amazon or an African grey up 60 years. It's not unusual for birds to be passed to the next generation, so preparing for that possibility is important.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Personality" ? 
                        <div>
                            <li>Decide if you want a tame bird that will cuddle with you while you relax at night or if you prefer a bird that remains in his habitat most of the time. Some species prefer minimal to no handling, while others crave attention to the point that they will become upset if they don't receive it.</li>
                            <li>All birds make a mess. Careful planning of the habitat and surrounding area can make things neater and easier to clean. Even a potty-trained bird has accidents. And, birds also produce dander.</li>
                            <li>Different bird species have different "chatters" and noise levels. Some, like budgies, are known to chatter, while macaw, can get quite loud. If you're looking for a quite bird, finches or female canaries may be a good option.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Price" ? 
                        <div>
                            <li>A pair of finches can cost between $20 and $100</li>
                            <li>A budgie is usually about $25</li>
                            <li>Cockatiels range from $80 to $150</li>
                            <li>Amazon greys can be between $700 to $1,500</li>
                            <li>A hyacinth macaw can command more than $8,000</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Toys" ? 
                        <div>
                            <li>Because birds are social animals, the addition of a bird toy with a mirror can cause a significant improvement in the mood and health of pets without roommates.</li>
                            <li>Since birds respond well to sound stimulation, there are also many ring and bell toys available.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Cage" ? 
                        <div>
                            <li>Most pet birds acclimate well to normal household temperatures ranging from 65 to 80 degrees Fahrenheit. Habitats should be placed in well-lit areas, off the floor and away from drafts.</li>
                            <li>Liners, dishes, accessories and cage aprons should be removed, cleaned or replaced daily. On a weekly or monthly basis, remove your bird(s) and place them in a safe area, preferably in a secondary cage. Remove all items and use a bird-safe disinfectant to scrub soiled areas like perches, blocks, toys, cage aprons and flooring. Allow everything to dry and replenish food and water before returning your pet bird to their cage.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Food" ? 
                        <div>
                            <li>You can narrow down the large selection of food available by looking for just the ones formulated for your specific bird. They come in all shapes, sizes, flavors and textures to delight your bird.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Grooming" ? 
                        <div>
                            <li>Some birds prefer shower perches, misting or a roll in dust, others seek shallow bird baths as they preen and clean. Since this grooming behavior can often require quite a bit of jumping and flapping, hanging bird baths should always be securely fastened when installed. As owners set up hanging bird baths, they can also reduce mess my making sure they are level. Since some splashing cannot be avoided, some powners place a towel under their bird baths before filling them up. When filling up bird bath bowls, it is important to use tepid water without any trace of soap.</li>
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
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Commitment</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What kind of commitment is needed in order to provide for birds.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Personality"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Personality</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What type of bird personality is best suited for you?
                            View here the different types of personality.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Price"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Price</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What is your budget like? Are you able to provide and care for the bird?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Toys"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Toys</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What sort of toys will be needed when you get a pet bird to make sure it stays happy?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Cage"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Cage</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Where will the pet bird live? Do you have the correct size cage and necessary stuff for the cage?
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
                        className="mb-2 categoryInfoCard"
                        >
                        <Card.Header>Food</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Most important part of caring for a pet. What sort of food does this pet require?
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Grooming"})}}>
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

           </div> 
        )
    };
}

export default SelectedBirdInfo;