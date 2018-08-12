import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style= {{width: '100%', margin: 'auto'}}> 
                <Grid className= "landing-grid">
                    <Cell col={12}> 
                    <img
                        src= "https://image.ibb.co/hS4i1U/74276.png"
                        alt= "avatar"
                        className= "avatar-img"
                    />
                    <div className = "banner-text">
                        <h1> Blockchain Developer </h1>

                        <hr/>
                        <p>Blockchain | Hyperledger Fabric | Nodejs | Express | React | React Native | MongoDB | Javascript/ES6</p>
                        <div className = "social-links">
                        
                            {/* linkedin */}
                            <a href= "https://www.linkedin.com/in/shubham-koli-52343914a/" rel="noopener noreferrer" target="_blank" >
                                <i className= "fab fa-linkedin" aria-hidden = "true" />
                            </a>

                            {/* Github */}
                            <a href= "https://github.com/Shubham-koli" rel="noopener noreferrer" target="_blank" >
                                <i className= "fab fa-github-alt" aria-hidden = "true" />
                            </a>

                            {/* Medium */}
                            <a href= "https://medium.com/@bkblust" rel="noopener noreferrer" target="_blank" >
                                <i className= "fab fa-medium-m" aria-hidden = "true" />
                            </a>

                            {/* AngelList */}
                            <a href= "https://angel.co/shubham-koli" rel="noopener noreferrer" target="_blank" >
                                <i className= "fab fa-angellist" aria-hidden = "true" />
                            </a>


                        </div>
                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;