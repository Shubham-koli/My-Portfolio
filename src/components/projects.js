import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0};         
    }

    toggleCategories()  {
        if(this.state.activeTab === 0)
        {
            return (
                <div className= "projects-grid">
                    {/* Agriculture Supply Chain With Business Intelligence Project */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto' }}>
                        
                        <CardTitle className="projects-text" style={{color: '#fff', height:'176px', background:'url(https://image.ibb.co/iWSqgU/download.jpg) center / cover'}}>
                            Agriculture Supply Chain With Business Intelligence                     
                        </CardTitle>
                        
                        <CardText className="projects-text">
                            This system is based on Blockchain technology which is capable of providing trace-ability, transparency and business intelligence. 
                            System is capable of providing Business Intelligence to every individual in the supply chain.
                            This system has end user android client to access Blockchain data.
                        </CardText>
                        
                        <CardActions className= "projects-button-text">
                            <Button rel= "noopener noreferrer" target="_blank" href="https://github.com/Shubham-koli/WCEHackathon_SupplyChain" colored > Github </Button>
                        </CardActions>
                        
                        <CardMenu style={{color: '#fff'}} >
                            <IconButton name='share'/>
                        </CardMenu>

                    </Card>
                    {/* WCE-Coin CryptoCurrency Project */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto' }}>
                        
                        <CardTitle className="projects-text" style={{color: '#fff', height:'176px', background:'url(https://image.ibb.co/iWSqgU/download.jpg) center / cover'}}>
                            'WCE-Coin' CryptoCurrency                    
                        </CardTitle>
                        
                        <CardText className="projects-text">
                            CryptoCurrency is currently biggest application of blockchain technology. 
                            WCE-Coin is a Crypto-Currency created for internal use of Walchand college.
                        </CardText>
                        
                        <CardActions className= "projects-button-text">
                            <Button rel= "noopener noreferrer" target="_blank" href="https://github.com/Shubham-koli/Wce_Coin" colored > Github </Button>
                        </CardActions>
                        
                        <CardMenu style={{color: '#fff'}} >
                            <IconButton name='share'/>
                        </CardMenu>

                    </Card>
                </div>


            )
            // Hyperledger
        }else if(this.state.activeTab === 1) 
        {
            return (
                <div  className= "projects-grid">
                    {/* Blockchain in Human Organ-transplant System Project */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto' }}>
                    
                        <CardTitle className="projects-title" style={{color: '#fff', height:'176px', background:'url(https://image.ibb.co/fhVMo9/00577e7f6486bf1.jpg) center / cover'}}>
                           Blockchain in Human Organ-transplant System                   
                        </CardTitle>
                        
                        <CardText className="projects-text">
                            We are building a decentralized platform that aims to give correct matches for Organ-Transplant.
                            System is integrated with IOT technology, it is capable of giving accurate data about Location, Temperature, Pressure.
                            Using this system we can minimize human error in transporting, handling of Organs and provide accurate and trustworthy information.
                        </CardText>
                        
                        <CardActions className= "projects-button-text">
                            <Button rel= "noopener noreferrer" target="_blank" href="https://github.com/Shubham-koli/BlockChain_OrganTransplant" colored > Github </Button>
                        </CardActions>
                        
                        <CardMenu style={{color: '#fff'}} >
                            <IconButton name='share'/>
                        </CardMenu>

                    </Card>

                     {/* EHR on Blockchain Project*/}
                     <Card shadow={5} style={{minWidth:'450', margin: 'auto' }}>
                    
                        <CardTitle className="projects-title" style={{color: '#fff', height:'176px', background:'url(https://www.statnews.com/wp-content/uploads/2017/12/Blockchain-healthcare-graphic-645x645.png) center / cover'}}>
                            Blockchain in Healthcare.                   
                        </CardTitle>
                        
                        <CardText className="projects-text">
                            We are using blockchain to securely store health records and maintain a single version of the truth.
                            The different organisations such as hospitals, Government, Medical Reaserch Institutes can request permission to access a patient’s record to serve their purpose and record transactions on the distributed ledger.
                            We are building android client which can interact with blockchain.
                            Trying to Implement experimental feature which can let android client interact with blockchain in no netowrk conditions.
                        </CardText>
                        
                        <CardActions className= "projects-button-text">
                            <Button rel= "noopener noreferrer" target="_blank" href="https://bitbucket.org/FaultyCarry/emr-on-blockchain/" colored > Github </Button>
                        </CardActions>
                        
                        <CardMenu style={{color: '#fff'}} >
                            <IconButton name='share'/>
                        </CardMenu>

                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2)
        {
            return (
                <div> <h1> This is NodeJS </h1> </div>
            )
        }else if(this.state.activeTab === 3)
        {
            return (
                <div> <h1> This is Others </h1> </div>
            )
        }
    }
    render() {
        return (
            <div className= "category-tabs"> 
                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) =>  this.setState ({ activeTab: tabId })} ripple>
                    <Tab> Blockchain </Tab>
                    <Tab> Hyperledger Fabric </Tab>
                    <Tab> NodeJS </Tab>
                    <Tab> Others </Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}> 
                        <div>{ this.toggleCategories() } </div>        
                    </Cell>               
                </Grid>
                
            </div>
        )
    }    
}

export default Projects;