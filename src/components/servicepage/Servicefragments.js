import React, { Component,} from 'react'
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BannerSlider from './Bannerslider';

import './style.css'
import { Products } from './Products';


 
 export class servicefragments extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        value:0
     }
   }
  handleChange = (event, newValue) => {
    this.setState({
      value:newValue
    })
  };
   render() {
    return (
      <>
        <div className="container" maxWidth="md" fixed>
          <AppBar position="static" color="black" justify="center">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Convention-center"  />
                <Tab label="Food"  />
                <Tab label="Photographer"  />
                <Tab label="EventPlanner"  />
              </Tabs>
          </AppBar>
          <BannerSlider/>
          <Products/>
        </div>
      </>
    );
   }
 }
 
 export default servicefragments

