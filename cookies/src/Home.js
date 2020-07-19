import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
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
        <Grid container>            
            <Grid xs={12}>
              <Button onClick={toggleDrawer}><img src={logo}/></Button>
                <Drawer 
                className={classes.drawer}
                width="75%"
                anchor="right"
                open={state}
                onClose={toggleDrawer}>
                {list}
              </Drawer>       
            </Grid>
        </Grid>
    );
}

export default Home;
