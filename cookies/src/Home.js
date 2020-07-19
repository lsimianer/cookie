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
              <Button>Schedule Now</Button>
              <Button>Media</Button>
              <Button>Contact</Button>
              <Button>Upcoming events</Button>              
            </Grid>
            <Grid xs={12}>
              <div id="bodyDivOne">
                this is the body bro
              </div>
            </Grid>
        </Grid>
    );
}

export default Home;
