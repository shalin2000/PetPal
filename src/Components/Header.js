import React, { Component} from 'react';
import '../CSS/Header.css';
import {Link} from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faQuestion, faSearch, faPaw } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render(){
        return(
            <div className="header"> 
                <Menu>
                    <Link to={{pathname: "/"}} className="menu-item"> <FontAwesomeIcon icon={ faHome } size={40}/>&nbsp; Profile</Link>

                    <Link to={{pathname: "/petInfo"}} className="menu-item"><FontAwesomeIcon icon={ faPaw } size={40}/>&nbsp; Pet Info </Link>

                    <Link to={{pathname: "/searchMap"}} className="menu-item"> <FontAwesomeIcon icon={ faSearch } size={40}/>&nbsp; Search Map </Link>

                    <Link to={{pathname: "/reminders"}} className="menu-item"> <FontAwesomeIcon icon={ faBell } size={40}/>&nbsp; View Reminders </Link>

                    <Link to={{pathname: "/faq"}} className="menu-item"> <FontAwesomeIcon icon={ faQuestion } size={40}/>&nbsp; FAQ </Link>

                </Menu>

                <div className="appName">
                    <label>PetPal</label>
                </div>
            </div>
        )
    }
}

export default Header