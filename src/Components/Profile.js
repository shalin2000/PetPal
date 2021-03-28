import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { slide as Menu } from 'react-burger-menu'
// import {Link} from 'react-router-dom';

import '../CSS/Profile.css';
import Header from './Header';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render (){
        return(
            <div class="profile">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center'}}>Profile</h2>

                {/* user profile card */}
                <div class="container center">
                    <div class="row justify-content-center" style={{marginTop: '50px'}}>
                        <div class="col-md-auto">
                            <img src="data:image/png;base64,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" alt="BigCo Inc. logo"/>
                        </div>
                        <div class="col-md-auto" style={{paddingTop: '75px'}}>
                            <div class="row justify-content-center">
                                <label class="userProfileTxt"><b>Name:</b> Bill W</label>
                            </div>
                            <div class="row justify-content-center">
                                <label class="userProfileTxt"><b># of Pets:</b> 2</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pet profile card */}
                <div class="container center">
                    <div class="row justify-content-center" style={{marginTop: '50px'}}>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src="https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg" />
                            <Card.Body>
                                <Card.Title>Trev</Card.Title>
                                <Card.Text>Age: 2</Card.Text>
                                <Card.Text>Breed: Savannah</Card.Text>
                                <Card.Text>Info: Likes to eat tuna</Card.Text>
                                <Button variant="primary">New Reminder</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg" />
                            <Card.Body>
                                <Card.Title>Jason</Card.Title>
                                <Card.Text>Age: 9</Card.Text>
                                <Card.Text>Breed: Husky</Card.Text>
                                <Card.Text>Info: Loves the snow and long walks</Card.Text>
                                <Button variant="primary">New Reminder</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br></br>
                <div class="center">
                    <button type="button" class="btn btn-primary">Add pets</button>
                </div>

            </div>
        )
    };
}

export default Profile;