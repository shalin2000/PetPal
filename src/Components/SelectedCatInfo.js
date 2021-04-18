import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedCatInfo.css';
import Header from './Header';

import Card from "react-bootstrap/Card";
import {Button, Modal} from 'react-bootstrap'

class SelectedCatInfo extends Component {

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
                        {this.state.whichModal === "Unqiueness" ? 
                        <div>
                            <li>Largest of all cat breeds – most weigh 9 to 18 pounds!</li>
                            <li>Doesn’t reach maturity until 3-5 years old, unlike most cats who are full-grown by their first year</li>
                            <li>Prone to hip dysplasia because of its size</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Training" ? 
                        <div>
                            <li>Maine Coons are easier to train compared to other breeds of cat. Training kittens is also much easier as they are at an age where they are naturally learning things quickly.</li>
                            <li>If using the clicker method, always start every training with a click and a treat. This enables you to get your cat’s full attention, making him easier to train.</li>
                            <li>Keep your training sessions short. Cats have a very limited attention span, so try to do your training for around five minutes at a time. Having three five-minute sessions a day is better than having a straight fifteen-minute training without any breaks.</li>
                            <li>Don’t do the call on command trick just so you can give your cat medicine or a bath. This just makes your cat associate the action to something negative.</li>
                            <li>Always end a training session on a positive note. Once you’re done with your training, give your cat a treat or a cuddle. This instills a positive memory to your cat, making it more responsive to your future training.</li>
                            <li>Never punish your cat for not following you. Doing so can cause your cat to become less receptive to your future training.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Diet" ? 
                        <div>
                            <div>
                                All cats need certain elements in their diet, including:
                                <li>Protein</li>
                                <li>Carbohydrates</li>
                                <li>Fats and fatty acids such as arachidonic acid</li>
                                <li>Amino Acids such as taurine and arginine</li>
                                <li>Vitamins and Minerals such as Vitamin A and Niacin</li>
                            </div>
                            <div>
                                Whether you feed your cat wet or dry food is also a matter of preference.
                                <li>Dry foods are easier to prepare than wet foods and allow a cat to use his teeth.</li>
                                <li>Wet foods have a higher moisture content. This is important for cats that don’t drink as much on their own and to maintain proper kidney function as your cat ages.</li>
                                <li>A mix of wet and dry food will ensure a right balance for your cat.</li>
                            </div>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Grooming" ? 
                        <div>
                            Start Young
                            <li>Getting your cat used to being groomed when they are young will help them to deal with grooming.</li>
                            Use A Soft Bristle Brush
                            <li>A daily brushing with a soft bristle brush is the best way to brush your cat. Hard bristles can scratch the cat’s skin which will be a bad memory for the cat and make future grooming sessions more difficult.</li>
                            Be Consistent
                            <li>One of the best tips when it comes to grooming your Maine Coon is to be consistent.</li>
                            Clipping The Hair
                            <li>The fur on the paws can become long and bothersome to the cat.  To help them keep the length down so they don’t chew at themselves and wind up with hairballs you can clip the hair with scissors.</li>
                            Bathing
                            <li>It may seem a little strange to bathe your cat, but Maine Coons have so much fur that bathing can really help them out. They are very laid back and can be trained to tolerate the water.</li>
                            Claw Clipping
                            <li>You can clip your cat’s claws with a special cat claw clipper that is sold at most pet supply stores. If you are uncomfortable doing this then your vet can either do it for you or recommend someone that can.</li>
                        </div>
                        :
                        null
                        }
                        {this.state.whichModal === "Supplies" ? 
                        <div>
                            <li>Cat Shampoo</li>
                            <li>Cat Food</li>
                            <li>Litter Trays</li>
                            <li>Cat Trees</li>
                            <li>Cat Toys</li>
                            <li>Cat Brushes</li>
                            Few extra for Maine Coon (long hair)
                            <li>Grooming wipes</li>
                            <li>Slicker Brush</li>
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
                    <div class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Unqiueness"})}}>
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        >
                        <Card.Header>Unqiueness</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            What makes this cat breed unique? Learn some unique facts about it!
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
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
                            What are some training that can be taught to this cat breed? Any special training?
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
                    <div style={{marginTop: '15px'}} class="col-md-auto" onClick={() => {this.setState({openModal: !this.state.openModal, whichModal: "Grooming"})}}>
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
                            What are some supplies that are required for this cat breed? What will make them happy?
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
                                Breed: Maine Coons
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

export default SelectedCatInfo;