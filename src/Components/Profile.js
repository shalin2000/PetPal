import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PetCard from './PetCard'
// import { slide as Menu } from 'react-burger-menu'
// import {Link} from 'react-router-dom';

import '../CSS/Profile.css';
import Header from './Header';
import NewReminder from './NewReminder';
import NewPet from './NewPet'


class Profile extends Component {

    constructor(props) {
        super(props)

        // initial state with 2 pet cards
        this.state = {
             reminderOpen: false,
             newPetOpen:false,
             cards:[
                {
                    img:"https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg",
                    title: "Trev",
                    age: 2,
                    animal:"Cat",
                    info:"Likes to eat tuna",
                },
                {
                    img:"http://spectrum-sitecore-spectrumbrands.netdna-ssl.com/~/media/Pet/Furminator/Images/Solution%20Center%20Images/Feature%20Images/husky.jpg",
                    title: "Jason",
                    age: 9,
                    animal:"Dog",
                    info:"Loves the snow and long walks",
                }
             ],
        };        
    }

    // used to set the state with the localstorage saved data
    componentWillMount(){
        localStorage.getItem('newCards') && this.setState({
            cards: JSON.parse(localStorage.getItem('newCards')),
        })
    }
    // save the current state of the pet cards
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('newCards', JSON.stringify(nextState.cards))
    }

    // handle opening the new reminders pop up form
    handleReminder(){
        
        this.setState(() => {
            return {
             reminderOpen: true,
            }
        })
     }

    // handle opening the new pet card form
    handlePetOpen(){
        this.setState(() => {
            return {
             newPetOpen: true,
            }
        })
     }

    // close the reminders or new pet Modal pop up
    handleClose (){
        this.setState(() => {
            return {
                reminderOpen: false,
                newPetOpen:false,
            }
        })
    } 
    
    saveReminder (){

    }

    // adds the new pet card to profile page, saving all new pet cards on localstorage
    handleNewPet(name,age,info,img,animal){
        const newCards = this.state.cards.map(card => card)
        newCards.push({
            img:img,
            title: name,
            age: age,
            animal:animal,
            info:info,
        })

         this.setState(()=>{
            return {
                handleReminder:false,
                newPetOpen:false,
                cards: newCards
            }
        })
    }

    render (){
        return(
            <div class="profile">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                {/* user profile card */}
                <div class="container center" >
                    <div class="row justify-content-center" style={{marginTop: '25px'}}>
                        <div  class="col-md-auto" >
                            <img id="icon" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="BigCo Inc. logo"/>
                        </div>
                        <div class="col-md-auto" style={{paddingTop: '20px'}}>
                            <div class="row justify-content-center">
                                <label class="userProfileTxt"><b>Name:</b> Bill W</label>
                            </div>
                            <div class="row justify-content-center">
                                <label class="userProfileTxt"><b># of Pets:</b> 2</label>
                            </div>
                            <div class="center">
                                <button 
                                    id="add-btn"
                                    type="button" 
                                    class="btn btn-primary" 
                                    onClick={this.handlePetOpen.bind(this)}
                                    >Add pets
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* pet profile card */}
                <div class="container center">
                    <div class="row justify-content-center" style={{marginTop: '50px'}}>

                        {/* displays all the pet cards  */}
                        {this.state.cards.map((card,i )=>{
                            console.log("returning",this.state)
                            return (
                                <PetCard handleAdd={this.handleReminder.bind(this)} key={i} info={card}/>
                            )
                        })}
                    </div >
                    <Modal  show={this.state.reminderOpen} onHide={this.handleClose.bind(this)}>
                        <NewReminder handleClose={this.handleClose.bind(this)}/>
                    </Modal>

                    <Modal  show={this.state.newPetOpen} onHide={this.handleClose.bind(this)}>
                        <NewPet handleClose={this.handleClose.bind(this)} addPetCard={this.handleNewPet.bind(this) } />
                    </Modal>
                </div>
                <br></br>
                

            </div>
        )
    };
}

export default Profile;