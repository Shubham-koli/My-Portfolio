import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className = 'contact-body'>
                <Grid className = 'contact-grid'>
                    <Cell col = {6}>
                        <h2> Shubham Koli </h2>
                        <img 
                            src= 'https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                            alt= 'avatar'
                            style= {{height: '250px' }}
                        />
                        <p style= {{ width:'85%', margin:'auto', paddingTop:'1.5em' }} >
                            An accomplished Computer Science student specializing in Blockchain
                            Technology, Computer Networking and Programming. Self-motivated and
                            hardworking fresher seeking for an opportunity to work in a challenging
                            environment to prove my skills and utilize my knowledge & intelligence in
                            the growth of the organization.
                        </p>
                        
                    </Cell>
                    <Cell col = {6}>
                        <h2> Contact Me </h2>
                        <hr/>
                        <div className = 'contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style= {{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i class="fas fa-phone-square" aria-hidden='true'/>
                                        +91 8421999884
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style= {{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i class="fas fa-envelope" aria-hidden='true'/>
                                        Shubham.koli@outlook.in
                                    </ListItemContent>
                                </ListItem> 

                                <ListItem>
                                    <ListItemContent style= {{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i class="fab fa-skype" aria-hidden='true'/>
                                        live- shubham.koli
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;