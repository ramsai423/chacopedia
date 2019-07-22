import React, { Component } from 'react';
import {changeInput,postSignUp}from"./ActionCreaters/LoginCreaters";
import {connect}from"react-redux";
import{Redirect}from"react-router-dom";
import Header from './Header';
import { placeholder } from '@babel/types';

function SignUP(props){

  const { SignedSucess}=props;
  console.log("SignedSucess***********", props.signUpSucess);
  const signUpUser = e =>{
    e.preventDefault();
    props.dispatch(postSignUp(props.firstName,props.lastName,props.emailAddress,props.password));
  }
  const handleChange = name => e => {
    console.log(props);
    props.dispatch(changeInput(name, e.target.value));
  };
     return(
       <div>
         <Header/>
         {SignedSucess ?(
           <div><Redirect to = '/login'/></div>
         ):(
       <div className = "Sign">
         <form validate>
         <h3>Sign Up Hear</h3><br/>
       <div>FirstName <input type = "text" value={props.firstName} onChange={handleChange("firstName")}placeholder="firstname"required/><br/><br/>
            LastName<input type = "text"value = {props.lastName} onChange={handleChange("lastName")}placeholder="lastname"required/><br/><br/>
            Email<input type = "text" value = {props.emailAddress} onChange={handleChange("emailAddress")}required/><br/><br/>
            password<input type = "password"value = {props.password} onChange={handleChange("password")}required/><br/><br/>
           
        <button type = "submit" onClick = {signUpUser}>Register</button>
        
        
        </div>
        </form>
        </div>
         )
         
         } 
    </div>
   )
   }
function mapStateToProps(appState){
  console.log("appState**************",appState)
  return{
    firstName:appState.choclateState.firstName,
    lastName:appState.choclateState.lastName,
    emailAddress:appState.choclateState.emailAddress,
    password:appState.choclateState.password,
    SignedSucess:appState.choclateState.signUpSucess
  }
}

export default connect(mapStateToProps)(SignUP)