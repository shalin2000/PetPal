import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';

import '../CSS/SearchMap.css';
import Header from './Header';

class SearchMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shelterChecked: false,
            petStoreChecked: false
        };
    }

    render (){
        return(
            <div className="searchMap">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center'}}>Search Map</h2>
                
                <div class="container center">
                    {/* row 1 for filter */}
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <label>
                                Address:
                                <input type="text" name="name" />
                            </label>
                        </div>
                        <label>Or</label>
                        <div class="col-md-auto">
                            <label>
                                Zip:
                                <input type="text" name="name" />
                            </label>
                        </div>
                    </div>
                    {/* row 2 for filter */}
                    <div class="row justify-content-center">
                        <div class="col-md-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Distance
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">5 miles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">10 miles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">15 miles</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="col-md-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Breed
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Golden Retriever</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">German Shepherd</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Poodle</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bulldog</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="col-md-auto">
                            Pet Store
                            <Checkbox
                                checked={this.state.petStoreChecked}
                                onChange={() => this.setState({petStoreChecked: !this.state.petStoreChecked})}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                        <div class="col-md-auto">
                            Shelter
                            <Checkbox
                                checked={this.state.shelterChecked}
                                onChange={() => this.setState({shelterChecked: !this.state.shelterChecked})}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                        <div class="col-md-auto">
                            <button type="button" class="btn btn-primary">Search</button>
                        </div>
                    </div>

                    {/* map component showing shelters/pet shops */}
                    <div class="row justify-content-center" style={{marginTop: "15px"}}>
                        <img src="https://adoptpetshelter.org/wp-content/uploads/2018/09/adopt-map.png" alt="googleMapImg" />
                    </div>
                </div>
                

            </div> 
         )
    };
}

export default SearchMap;