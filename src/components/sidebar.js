import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import React, { Component } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2} >
          <ListItem sx={{border:'2px solid green',height:'650px',marginTop:'10px'}}>
            ===menu==<br/>page1<br/>page2<br/>page3<br/>page4</ListItem>
        </Grid>
        <Grid item xs={10}>
          <ListItem sx={{border:'2px solid black',height:'650px',marginTop:'10px',backgroundColor:'white'}}>
            Description<br/>
            <Tabs  aria-label="nav tabs example" centered>
                        <Tab sx={{color:'#eeeeee' }} label="PAGE1" href="/page1"  /><br/>
                        <Tab sx={{color:'#eeeeee' }} label="PAGE2" href="/page2" /><br/>
                        <Tab sx={{color:'#eeeeee' }} label="PAGE3" href="/page3" /><br/>
                        <Tab sx={{color:'#eeeeee' }} label="PAGE4" href="/page4" />
                    </Tabs>
            </ListItem>
        </Grid>

      </Grid>
    </Box>
            </div>
        )
    }
}

export default Sidebar
