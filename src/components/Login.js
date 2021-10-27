import React, { Component } from 'react';
import json from './UserDetails.json';
import { FormGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPass=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);


export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
           dataVal:{ 
               email:null,
               password:null,
               
            },
           errors:{
                email:'',
                password:'',
            },
            formData:[]
        }
    }
    componentDidMount(){
        // this.setState({proData:data.products})
        if(localStorage.getItem('mycart') != undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            this.setState({count:arr.length})
        }
    }
    addLogin=(email)=>{
        if(localStorage.getItem('mycart')!=undefined){
           let arr=JSON.parse(localStorage.getItem('mycart'));
           if(arr.includes(email)){
               alert("product already added");
           } 
           else{
               arr.push(email)

;
               localStorage.setItem('mycart',JSON.stringify(arr));
               console.log(this.state.count);
               this.setState({count:arr.length})
               alert("product added to cart");
           }
        }
        else{
            let arr=[];
            arr.push(email)

;
            localStorage.setItem('mycart',JSON.stringify(arr));
            this.setState({count:arr.length})
            alert("product is added");
        }
    }
    

    handler=(event)=>{
            const{name,value}=event.target;
            let errors=this.state.errors;
            let fetchVal = this.state.dataVal;
            console.log(fetchVal)
            switch(name){
               
                case 'email':
                       errors.email=regForEmail.test(value)? '':'Email is not valid';
                       fetchVal.email = value;
                       break;
             
                case 'password':
                       errors.password=regForPass.test(value)? '':'password should be in aplhanumeric & special chars';
                       fetchVal.password = value;
                        this.state.password=value;
                       break;
               
               
                }
                this.setState({errors,[name]:value},()=>{
                    console.log(errors)
                })
        }

        formSubmit=(event)=>{
            event.preventDefault();
            let items = this.state.dataVal;
            console.log(items)
           
           if(this.validate(this.state.errors))
            {
                alert("Registration Succesfull");
                this.setState({
                    formData : [...this.state.formData,
                        {
                        "email":items.email,
                        "password":items.password,
                
                      }]
                    });   
                  
                    document.getElementById('email').value='';
                     document.getElementById('password').value='';
                  
                }            
                else {
                   alert("Invalid Form");
                    document.getElementById('email').value='';
                     document.getElementById('password').value='';
                  
                }
            }
          validate=(errors)=>{
             let valid=true;
             Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
             return valid;
         }
        
         
    render() {
        const {errors}=this.state;
       
        return (
            <>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}>
                <h2 className="pt-2 pb-3">Login Form</h2>
                
                <FormControl className="mb-3" >
                    <InputLabel>Email:</InputLabel>
                    <Input type="email" placeholder="Enter Email" name="email" id="email" onChange={this.handler} required/><br/>
                    {errors.email.length>0 && 
                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.email}</FormHelperText>}
                </FormControl><br/>
                  
                        <FormControl className="mb-3" >
                            <InputLabel>Pasword:</InputLabel>
                            <Input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.handler} required /><br/>
                            {errors.password.length>0 && 
                            <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>}
                        </FormControl><br/>
                        
                       
                        <FormControlLabel control={<Checkbox />} label="remember me" />
                        <br/>
                        <Button variant="outlined"  href="#"  type="submit"> Login</Button>
                  
                </Box>
            </>
        )   
    }   
}
export default Login;
