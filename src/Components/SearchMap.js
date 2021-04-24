import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';

import '../CSS/SearchMap.css';
import Header from './Header';
import MapImg from '../Images/MapImg.png'
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faQuestion, faSearch, faPaw, faMapMarked, faMap, faMapPin, faMapMarkerAlt, faClock, faMask, faFirstAid, faInfo } from '@fortawesome/free-solid-svg-icons'
import { blue } from '@material-ui/core/colors';

class SearchMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shelterChecked: false,
            petStoreChecked: false,
            chosenMile: "15 miles",
            chosenBreed: "Breed"
        };
    }

    makeCardForNearby(){
        return ['Dark'].map((variant, idx) => (
            <div>
                <div class="row justify-content-center">
                    <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Petco</Card.Header>
                    <Card.Body>
                        <Card.Text style={{textAlign: "left"}}>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faInfo } size={40} color="rgb(35,115,229)"/> Chain with pet food and supplies, such as toys, beds, and apparel (many offer pet services and adoptions).</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faMapMarkerAlt } size={40} color="rgb(35,115,229)"/> 9645 Skokie Blvd, Skokie, IL 60077</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faClock } size={40} color="rgb(35,115,229)"/> Opens at 9:00 AM</div>
                            <div><FontAwesomeIcon icon={ faFirstAid } size={40} color="rgb(35,115,229)"/> Health and safety: Mask required</div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div class="row justify-content-center">
                    <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Pet Supplies Plus Lincolnwood</Card.Header>
                    <Card.Body>
                        <Card.Text style={{textAlign: "left"}}>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faInfo } size={40} color="rgb(35,115,229)"/> Chain carrying natural and U.S.-made pet supplies (most offer services such as grooming and adoption).</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faMapMarkerAlt } size={40} color="rgb(35,115,229)"/> 7031 Lincoln Ave, Lincolnwood, IL 60712</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faClock } size={40} color="rgb(35,115,229)"/> Opens at 9:00 AM</div>
                            <div><FontAwesomeIcon icon={ faFirstAid } size={40} color="rgb(35,115,229)"/> Health and safety: Mask required</div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div class="row justify-content-center">
                    <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Evanston Animal Shelter</Card.Header>
                    <Card.Body>
                        <Card.Text style={{textAlign: "left"}}>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faMapMarkerAlt } size={40} color="rgb(35,115,229)"/> 2310 Oakton St, Evanston, IL 60202</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faClock } size={40} color="rgb(35,115,229)"/> Opens at 9:00 AM</div>
                            <div><FontAwesomeIcon icon={ faFirstAid } size={40} color="rgb(35,115,229)"/> Health and safety: Mask required</div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div class="row justify-content-center">
                    <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>PetSmart</Card.Header>
                    <Card.Body>
                        <Card.Text style={{textAlign: "left"}}>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faInfo } size={40} color="rgb(35,115,229)"/> Chain featuring a range of pets, supplies and food (most offer grooming, boarding and other services).</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faMapMarkerAlt } size={40} color="rgb(35,115,229)"/> 4640 W Irving Park Rd, Chicago, IL 60641</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={ faClock } size={40} color="rgb(35,115,229)"/> Opens at 9:00 AM</div>
                            <div><FontAwesomeIcon icon={ faFirstAid } size={40} color="rgb(35,115,229)"/> Health and safety: Mask required</div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            
        ));
    }

    render (){
        return(
            <div className="searchMap">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center',paddingTop: '3%', paddingBottom:'1%'}}>Search Map</h2>
                
                <div class="container center">
                    {/* row 1 for filter */}
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <label>
                            Address: {<span><input type="text" name="name" value="60645"/></span>}
                            </label>
                        </div>
                        <div class="col-md-auto" style={{marginTop: '-5px'}}>
                            Pet Store
                            <Checkbox
                                defaultChecked={true}
                                // checked={this.state.petStoreChecked}
                                onChange={() => this.setState({petStoreChecked: !this.state.petStoreChecked})}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                        <div class="col-md-auto" style={{marginTop: '-5px'}}>
                            Shelter
                            <Checkbox
                                defaultChecked={true}
                                // checked={this.state.shelterChecked}
                                onChange={() => this.setState({shelterChecked: !this.state.shelterChecked})}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    </div>
                    {/* row 2 for filter */}
                    <div class="row justify-content-center" style={{paddingTop: '1%', paddingBottom:'1%'}}>
                        <div class="col-md-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {this.state.chosenMile}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenMile: "5 miles"})}>5 miles</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenMile: "10 miles"})}>10 miles</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenMile: "15 miles"})}>15 miles</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="col-md-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {this.state.chosenBreed}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenBreed: "Golden Retriever"})}>Golden Retriever</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenBreed: "German Shepherd"})}>German Shepherd</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenBreed: "Poodle"})}>Poodle</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=> this.setState({chosenBreed: "Bulldog"})}>Bulldog</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="col-md-auto">
                            <button type="button" class="btn btn-primary">Search</button>
                        </div>
                    </div>

                    {/* map component showing shelters/pet shops */}
                    {/* old img --- https://adoptpetshelter.org/wp-content/uploads/2018/09/adopt-map.png */}
                    <div class="row justify-content-center" style={{marginTop: "15px"}}>
                        <div class="col-md-auto" style={{height: '750px', overflow: "auto"}}>
                            {this.makeCardForNearby()}
                        </div>
                        <div class="col-md-auto">
                            <img src={MapImg} alt="googleMapImg" className="imgStyle"/>
                        </div>
                        
                    </div>
                </div>
                

            </div> 
         )
    };
}

export default SearchMap;