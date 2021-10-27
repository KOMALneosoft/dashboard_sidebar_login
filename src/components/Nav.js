import { Container } from '@mui/material'
import React, { Component } from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar,Toolbar,IconButton,Button,Typography } from '@mui/material';

import Chanpass from './Chanpass';


export class Nav extends Component {
    render() {
      
      //  const email = localStorage.getItem("email");
        return (

           <>
            
            <Box sx={{ flexGrow:1 }}>
             <AppBar position="static">
             <Toolbar>
             <IconButton size="large" edge="start"  color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           
              </IconButton>
   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Dashaboard
            <Button sx={{mr:5}}  color="inherit" style={{marginLeft:"50px"}}></Button>
            Welcome : {localStorage.getItem("email")}
          </Typography>
         
          <Link to="/chanpass" style={{color:"#f9fbe7",marginRight:"15px"}}>ChangePassword</Link>
        
           <Link to="/" style={{color:"#f9fbe7"}}>Logout</Link>
     
        </Toolbar>
      </AppBar>
    </Box>
   
              
           </>
        )
    }
}

export default Nav