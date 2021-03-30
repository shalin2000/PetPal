import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedSnakeInfo.css';
import Header from './Header';

class SelectedSnakeInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petType: '',
            petImg: ''
        };
    }

    componentDidMount(){
        this.setState({
            petType: this.props.location.state.petType,
            petImg: this.props.location.state.petImg
        })
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
                                Breed: Ball Python
                                {/* <input type="text" name="name" /> */}

                            </label>
                        </div>
                    </div>
               </div>
               
               {/* pet info */}
               <div class="container center">
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <h2>Housing</h2>
                            <div className="bulletList">
                                <li>These snakes need a plastic vivarium to live in. For hatchlings a 10 gallon container will do as larger ones will stress
                                    them out. Juveniles will need a bigger 20 gallon container, and adults a 30-40 gallon one. Add fake fauna and places for
                                    the snake to hide in such as a box. The box doesn't need special heating, but the cage should have heating tape/mat on
                                    one third of the enclosure. The ambient temperature should be around 82F, cooler side of the enclousere 76-80F, and the
                                    warmer side 88-92F. Add cypress mulch as substrate to retain moisture and imitate the snake's natural warma and humid
                                    environment. The tank should be spot cleaned daily, with you removing soild/wet substrate to prevent bad smells, mold,
                                    and bacteria. Every one to two months the enclosure should be completely deep cleaned. Do not keep more than one snake
                                    in the enclosure. This is a solitary animal and putting multiple in an enclosure is dangerous.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Diet</h2>
                            <div className="bulletList">
                                <li>The snake should only be fed rodents, with hatchlings getting the smaller mice and adults the larger rats. The hatchlings 
                                    should feed on mouse every 5 days, juveniles should feed on small sized rats every 7 days, and adults a medium sized rat
                                    every 7 to 10 days. Purchase frozen mice/rats and thaw them before feeding. Under no circumstance feed live animals to
                                    the snake. They will fight back and endanger the pet, potentially injuring them.</li>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Warning signs</h2>
                            <div className="bulletList">
                                <li>The ball python is a gentle and tough snake, with a long life span and little health issues provided you follow the
                                    above care guidelines. However you must still look out for signs of problems. This includes incomplete shedding which
                                    means that the humidity is off in the enclosure. Respiratory issues also result from poor housing where the temperature
                                    is not at the proper levels. Signs of this are less than normal activity and/or saliva bubbles.</li>
                            </div>
                        </div>
                    </div>
                </div>
               
           </div> 
        )
    };
}

export default SelectedSnakeInfo;