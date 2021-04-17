import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../CSS/PetInfo.css';
import Header from './Header';

class PetInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render (){
        var dogImg = 'https://image.flaticon.com/icons/png/512/91/91544.png'
        var catImg = 'https://webstockreview.net/images/cat-clipart-silhouette-2.png'
        var fishImg = 'https://uxwing.com/wp-content/themes/uxwing/download/23-animals-and-nature/fish.png'
        var birdImg = 'https://static.vecteezy.com/system/resources/previews/001/203/707/non_2x/bird-png.png'
        var smallAnimalImg = 'https://i.pinimg.com/originals/3c/e7/88/3ce7889bebed63f5fcde166c95c3e2e8.png' 
        var reptilesImg = 'https://cdn1.iconfinder.com/data/icons/pets-and-animals-5/96/snake-512.png'

        return(
           <div className="petInfo">
               {/* uses the header.js file to get the burger menu */}
               <Header />

               <h2 style={{textAlign: 'center', paddingTop: '3%', paddingBottom: '3%'}}>Learn more about pets</h2>

                {/* different pets icons */}
               <div class="container">
                   {/* row 1 */}
                   <div class="row justify-content-center">
                       {/* dog */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedDogInfo", state: { petType: 'Dog', petImg: dogImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={dogImg} alt="dog"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Dog</label>
                                    </div>
                            </div>
                       </Link>
                       {/* cat */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedCatInfo", state: { petType: 'Cat', petImg: catImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={catImg} alt="cat"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Cat</label>
                                    </div>
                            </div>
                       </Link>
                       {/* fish */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedFishInfo", state: { petType: 'Fish', petImg: fishImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={fishImg} alt="fish"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Fish</label>
                                    </div>
                            </div>
                       </Link>
                   </div>
                   {/* row 2 */}
                   <div class="row justify-content-center">
                       {/* birds */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedBirdInfo", state: { petType: 'Birds', petImg: birdImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={birdImg} alt="birds"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Birds</label>
                                    </div>
                            </div>
                       </Link>
                       {/* small animals */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedRabbitInfo", state: { petType: 'Small Animals', petImg: smallAnimalImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={smallAnimalImg} alt="small animals"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Small Animals</label>
                                    </div>
                            </div>
                       </Link>
                       {/* reptiles */}
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/selectedSnakeInfo", state: { petType: 'Reptiles', petImg: reptilesImg }}}>
                            <div class="col-md-auto petInfoCard">
                                <img class="petImg" src={reptilesImg} alt="reptiles"/>
                                <div class="row justify-content-center">
                                    <label class="petName">Reptiles</label>
                                    </div>
                            </div>
                       </Link>
                   </div>
               </div>

           </div> 
        )
    };
}

export default PetInfo;