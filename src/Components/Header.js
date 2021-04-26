import React, { Component} from 'react';
import '../CSS/Header.css';
import {Link} from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faQuestion, faSearch, faPaw, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render(){
        return(
            <div className="header"> 
            
                <Menu>
                    <Link to={{pathname: "/"}} className="menu-item"> <FontAwesomeIcon icon={ faUser  } size={40}/>&nbsp; Profile</Link>

                    <Link to={{pathname: "/petInfo"}} className="menu-item"><FontAwesomeIcon icon={ faPaw } size={40}/>&nbsp; Pet Info </Link>

                    <Link to={{pathname: "/searchMap"}} className="menu-item"> <FontAwesomeIcon icon={ faSearch } size={40}/>&nbsp; Search Map </Link>

                    <Link to={{pathname: "/reminders"}} className="menu-item"> <FontAwesomeIcon icon={ faBell } size={40}/>&nbsp; View Reminders </Link>

                    <Link to={{pathname: "/faq"}} className="menu-item"> <FontAwesomeIcon icon={ faQuestion } size={40}/>&nbsp; FAQ </Link>

                    <div className="jDoe" style={{position: 'absolute', bottom: '80px'}}>Signed in as: John Doe</div>

                    <Link to={"#"} className="menu-item" style={{position: 'absolute', bottom: '40px'}}> <FontAwesomeIcon icon={ faSignOutAlt } size={40}/>&nbsp; Log out </Link>

                </Menu>

                <div className="appName">
                <Link to={{pathname: "/"}} className='text-link'> PetPal </Link>
                </div>

                
            </div>
        )
    }
}

export default Header