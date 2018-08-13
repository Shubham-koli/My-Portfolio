import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://image.ibb.co/hS4i1U/74276.png"
                                alt='avatar'
                                style={{height: '300px'}}
                            />            
                        </div>
                        <h2 style={{paddingTop :'0.5em' }}> Shubham Koli </h2>
                        <h4 style={{color:'gray'}}> Blockchain Developer </h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%' }} />
                        <p> 
                            An accomplished Computer Science student specializing in Blockchain Technology, Computer Networking and Programming. 
                        </p>
                        <p>
                            Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove 
                            my skills and utilize my knowledge & intelligence in the growth of the organization.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%' }} />
                        <h5>Location </h5>
                        <p>Maharashtra, India </p>
                        <h5>Phone</h5>
                        <p>+918421999884</p>
                        <h5> Email </h5>
                        <p> Shubham.koli@outlook.in </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%' }} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        Right Side
                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}

export default Resume;
