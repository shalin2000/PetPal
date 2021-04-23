import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PetCard from './PetCard'
// import { slide as Menu } from 'react-burger-menu'
// import {Link} from 'react-router-dom';

import '../CSS/Profile.css';
import Header from './Header';
import NewReminder from './NewReminder';
import NewPet from './NewPet'
import Login from './Login'
import {Link} from 'react-router-dom';


class Profile extends Component {



    constructor(props) {
        super(props)

        // initial state with 2 pet cards
        this.state = {
             reminderOpen: false,
             loginOpen: false,
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

             reminders:[],
             selectedPet:null
        };   
        // this.handleEdit = this.handleEdit.bind(this); 
        this.handleReminderOpen = this.handleReminderOpen.bind(this);    
    }

    // used to set the state with the localstorage saved data
    componentWillMount(){
        localStorage.getItem('newCards') && this.setState({
            cards: JSON.parse(localStorage.getItem('newCards')),
        })

        localStorage.getItem('accountReminder') && this.setState({
            reminders: JSON.parse(localStorage.getItem('accountReminder')),
        })
    }
    // save the current state of the pet cards
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('newCards', JSON.stringify(nextState.cards))
        localStorage.setItem('accountReminder', JSON.stringify(nextState.reminders))
    }

    // handle opening the new reminders pop up form
    handleReminderOpen(){

        this.setState(() => {
            return {
             reminderOpen: true,
            }
        })
     }


     // remove the petCard
    handleRemove(target){
        
        const newCards = this.state.cards.filter(function(c) { return c !== target; }); 

        this.setState(() => {
            return {
             cards: newCards,
            }
        })
    }


    // handle opening the new reminders pop up form
    handleLogin(){
        
        this.setState(() => {
            return {
             loginOpen: true,
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
                loginOpen: false,
                reminderOpen: false,
                newPetOpen:false,
                selectedPet:null
            }
        })
    } 
    
    saveReminder (){

    }

    // adds the new pet card to profile page, saving all new pet cards on localstorage
    handleNewPet(name,age,info,img,animal){
        let newCards = null
        // if pet card is being edited, remove it and add a new one with new info
        if (this.state.selectedPet){
            newCards = this.state.cards.filter(c => c !== this.state.selectedPet)
        }
        else{
          newCards = this.state.cards.map(card => card)  
        }
        
        newCards.push({
            img:img,
            title: name,
            age: age,
            animal:animal,
            info:info,
        })

         this.setState(()=>{
            return {
                reminderOpen:false,
                newPetOpen:false,
                cards: newCards,
                selectedPet:null,
            }
        })
    }

    // add the new reminders info
    handleNewReminder(title_, description_, date_, time_){
        const newReminders = this.state.reminders.map(card => card)
        newReminders.push({
            title: title_,
            description: description_,
            date : String(date_),
            time : String(time_),
        })

        this.setState(()=>{
            return {
                reminderOpen: false,
                reminders: newReminders
            }
        })
    }

    // mark the selected pet card for editing
    handleEdit(card){
        this.handlePetOpen()
        this.setState(()=>{
            return {
                selectedPet:card
            }
        })
    }

    render (){
        return(
            <div class="profile">
                {/* uses the header.js file to get the burger menu */}
                <Header />
                <div class="row justify-content-center">
                    <button 
                        id="log-btn"
                        type="button" 
                        class="btn btn-primary"
                        onClick={this.handleLogin.bind(this)}
                        >
                            Sign-In
                    </button>
                    <Modal  show={this.state.loginOpen} onHide={this.handleClose.bind(this)}>
                        <Login handleClose={this.handleClose.bind(this)}/>
                    </Modal>
                </div>
                

                {/* user profile card */}
                <div class="container center" >
                    <div class="row justify-content-center" style={{marginTop: '25px', marginLeft: "-50px"}}>
                        <div  class="col-md-auto" >
                            <img id="icon" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="BigCo Inc. logo"/>
                        </div>
                        <div class="col-md-auto" style={{paddingTop: '15px'}}>
                            <div class="row justify-content-left">
                                <label class="userProfileTxt"><b>Name:</b> John Doe</label>
                            </div>
                            <div class="row justify-content-left">
                                <label class="userProfileTxt"><b># of Pets:</b> 2</label>
                            </div>
                            <div class="row justify-content-left">
                                <button 
                                    id="add-btn"
                                    type="button" 
                                    class="btn btn-primary" 
                                    onClick={this.handlePetOpen.bind(this)}
                                    >Add pets
                                </button>
                                &nbsp;
                                &nbsp;
                                <Link to={{pathname: "/reminders"}}
                                    id="view-btn"
                                    class="btn btn-primary" 
                                    >View reminders
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* pet profile card */}
                <div class="container center">
                    <div class="row justify-content-center" style={{marginTop: '50px'}}>

                        {/* displays all the pet cards  */}
                        {this.state.cards.map((card,i )=>{
                            return (
                                <PetCard 
                                    handleRemove={this.handleRemove.bind(this)} 
                                    handleAdd={this.handleReminderOpen.bind(this)} 
                                    handleEdit={this.handleEdit.bind(this)}
                                    key={i} 
                                    info={card}/>
                            )
                        })}
                    </div >
                    <Modal  show={this.state.reminderOpen} onHide={this.handleClose.bind(this)}>
                        <NewReminder handleClose={this.handleClose.bind(this)} addReminder={this.handleNewReminder.bind(this)}/>
                    </Modal>

                    <Modal  show={this.state.newPetOpen} onHide={this.handleClose.bind(this)}>
                        <NewPet handleClose={this.handleClose.bind(this)} addPetCard={this.handleNewPet.bind(this)} pet={this.state.selectedPet} />
                    </Modal>
                </div>
                <br></br>
                

            </div>
        )
    };
}

export default Profile;