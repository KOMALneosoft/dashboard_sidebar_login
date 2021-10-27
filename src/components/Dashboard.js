import {Box} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Sidebar from './sidebar';
import Nav from './Nav';
import React, { Component } from 'react';


export class Dashboard extends Component {
constructor(){
    super();
    this.state={
        userinfo:[],
        id:'',
        name:'',
        email:'',
        contact:''
    };
}
componentDidMount(){
    const URL="http://localhost:3001/UserData";
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        this.setState({userinfo:data})
    })
    fetch(URL,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
        //body:JSON.stringify(fetchForm)
    }
    )
    .then(res=>res.json())
    .then(data=>{
        for(var i=0;i<data.length;i++){
            if(data[i].email===localStorage.getItem("email")){
                console.log(data[i])
                this.setState({userinfo:data[i]})
            }
        }
        console.log(data)
    })

}


    render() {
        console.log(this.state)
        return (
            <Box sx={{flexGrow:1,p:12}}>
                <Nav/>
                <Sidebar/>
                <Card sx={{maxWidth:600,marginLeft:"300px"}} key={this.state.userinfo.id}>
                <CardActionArea>
                <CardMedia components="img" height="400" image={this.state.userinfo.image} alt="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.state.userinfo.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>


            </Box>
        )
    }
}

export default Dashboard
