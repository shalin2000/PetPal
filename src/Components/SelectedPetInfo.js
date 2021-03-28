import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import '../CSS/SelectedPetInfo.css';
import Header from './Header';

class SelectedPetInfo extends Component {

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
                                Breed:
                                <input type="text" name="name" />
                            </label>
                        </div>
                    </div>
               </div>
               
               {/* pet info */}
               <div class="container center">
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <h2>Training</h2>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Diet</h2>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Grooming</h2>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <h2>Supplies</h2>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                            <div>
                                ............................................................
                            </div>
                        </div>
                    </div>
                </div>
               
           </div> 
        )
    };
}

export default SelectedPetInfo;