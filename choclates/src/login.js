import React from "react";
import{getlogin,changeInput}from"./ActionCreaters/LoginCreaters"
import Header from"./Header";
import {Redirect,Link} from "react-router-dom";
import "./App.css"
import { connect } from "react-redux";
import Navbar from "./navbar";

function Login(props){
  const {isLoginSuccess}=props;
  const loginUser =e=>{
    e.preventDefault();
    props.dispatch(getlogin(props.email,props.pwd))
  }
  const handleChange = name => e =>{
    props.dispatch(changeInput(name,e.target.value))
  }
   return(
        <div>
          {console.log(props)}
          {/* <Navbar/> */}
        <Header/>
          {
            isLoginSuccess?(
              <div><Redirect to = "/home" /></div>
            ):(   
     <div className = "Login form">
       <h4>PleaseLogin</h4>
       <form>
           <div>UserName
          <input type = "email"required  value = {props.email}placeholder="enter ur email" onChange= {handleChange("email")}></input><br/><br/>
           </div>
           <div>Password
          <input type = "password"required value = {props.pwd}onChange = {handleChange("pwd")}></input><br/>
          </div>
         <button type ="submit"onClick = {loginUser}>Login</button><br/>
        {/* <Link  to="/brands" className="nav-link" href="#">Login</Link> */}
               Not A User Please Signup!
         <button type = "button"><Link to ={'/signUP'}>SignUp</Link></button>
    
    </form>
</div>   
   )
 }
 </div>)
          }
                function mapStateToProps(appState){
                  return{
                    email:appState.choclateState.email,
                    pwd:appState.choclateState.pwd,
                    successData:appState.choclateState.successData,
                    isLoginSuccess:appState.choclateState.isLoginSuccess
                  }
                }
     export default connect(mapStateToProps)(Login)