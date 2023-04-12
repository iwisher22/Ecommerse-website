import { Button, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import{useDispatch} from "react-redux";
import Header from '../components/Header';
import { StyledBox, StyledCard, StyledDiv,StyledFormDiv } from './Styled';
import { register } from '../actions/userActions';



const SignupPage = () => {
  const dispatch= useDispatch();
  const [formData,setformData]=useState({});
  console.log("formData",formData);

  const handleChange=(e) =>{
    const {name,value} = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]:value
    }));
  };

  const handleSubmit= (e) =>{
    e.preventDefault();
    const{name,email,role,password} = formData;
    dispatch(register(name,email,role,password));
  }


 
  return (
    <div>
        <Header buttonName="Login" />
        <div>
        
         <StyledDiv>
         <StyledCard>

         <CardContent>
            <Typography variant="h4" sx={{marginBottom:'10px'}}>Signup</Typography>
            <StyledFormDiv>
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Enter your Name"
          name="name"
          onChange={handleChange}
          
        />
        </FormControl>

        <FormControl sx ={{marginTop:"20px"}}>
        <TextField
          required
          id="outlined-required"
          label="Enter your email"
          name="email"
          onChange={handleChange}
          
        />
        </FormControl>
        <FormControl sx ={{marginTop:"20px"}}>
        <TextField
          required
          id="outlined-required"
          label="Enter your Password"
          name="password"
          onChange={handleChange}
          
        />
        </FormControl>
        <StyledBox sx={{ minWidth: 120 }}>
        <FormControl sx={{ width:"100% "}} error>
        <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          label="Age"
          onChange={handleChange}
        
          
          
        >
          
          <MenuItem value={0}>User</MenuItem>
          <MenuItem value={1}>Admin</MenuItem>
          
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      </StyledBox>    
        </StyledFormDiv>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' sx={{marginLeft:'10px'}} onClick={handleSubmit}>Login
        
        </Button>
          </CardActions>
            </StyledCard>  
            </StyledDiv>
        </div>
    </div>
  )
}

export default SignupPage;