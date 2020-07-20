import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import logo from './assets/logo.png'


const useStyles = makeStyles({
  list: {
    width: '75vw',
  },
  fullList: {
    width: 'auto',
  },
  drawer:{
    width:'75vw',
  }
});

const Home = () => {
    const [state, setState] = useState(false);
    const classes = useStyles()

    const toggleDrawer = () => {
       setState(!state);
      };

      const list = (
          <>
          <List>
          <ListItem> email</ListItem>
          <ListItem> book</ListItem>
          <ListItem> call</ListItem>

              
          </List>
          </>
      )

     

    return (
      <div>
        <Grid container
        // direction="column"
        // alignItems="center"
        // justify="center">
        >
          <Grid xs={6}>
            <h3 className="navHeaderText"> FADED BY COOKIE</h3>
          </Grid>  
          <Grid xs={6}>
            <IconButton>
              <MenuIcon onClick={toggleDrawer}/>
            </IconButton>
          </Grid>          
            <Grid xs={12}>
              <IconButton onClick={toggleDrawer}><img id="logoImgHead" src={logo}/></IconButton>
                <Drawer 
                className={classes.drawer}
                width="75%"
                anchor="right"
                open={state}
                onClose={toggleDrawer}>
                {list}
              </Drawer>       
            </Grid>
            <Grid xs={12}>
              <a target="_blank" href="https://www.schedulicity.com/scheduling/FBCSBC">
                <Button id="scheduleButton">Schedule Now</Button>
              </a>               
            </Grid>
          </Grid>

          <Container id="bodyCon">
            <Grid xs={12}>
              <div className="bodyDivOne">
                this is the body bro about section
              </div>
            </Grid>
            <Grid xs={12}>
              <div id="media_section" className="bodyDivOne">
              <h1>media</h1>
              </div>
            </Grid>
            <Grid xs={12}>
              <div id="upcomingEvents_section" className="bodyDivOne">
                <h1>events</h1>
              </div>
            </Grid>
            <Grid xs={12}>
              <div id="contact_section" className="bodyDivOne">
              <h1>contact</h1>
              </div>
            </Grid>
        </Container>
      </div>
    );
}

export default Home;
