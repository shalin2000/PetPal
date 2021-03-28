import React, { Component } from 'react';

import '../CSS/FAQ.css';
import Header from './Header';

class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render (){
        return(
            <div className="faq">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center'}}>FAQ</h2>

                <div class="allQA">
                    <h3 class="categoryText">Vaccinations</h3>
                    <h4>Q1</h4>
                    <p>Answer to Q1</p>
                    <h4>Q2</h4>
                    <p>Answer to Q2</p>
                    <br></br>
                    
                    <h3 class="categoryText">Adopting VS Buying</h3>
                    <h4>Q1</h4>
                    <p>Answer to Q1</p>
                    <h4>Q2</h4>
                    <p>Answer to Q2</p>
                    <br></br>

                    <h3 class="categoryText">Diet and Nutrition</h3>
                    <h4>Q1</h4>
                    <p>Answer to Q1</p>
                    <h4>Q2</h4>
                    <p>Answer to Q2</p>
                </div>
                
            </div> 
         )
    };
}

export default FAQ;