import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import * as ActionCreaters from './ActionCreaters/ChoclatesCreaters'
import {connect} from 'react-redux';
import ChoclateList from"./Components/choclateList";
import BrandList from "./Components/Brandlist";
import BrandDetails from "./Components/BrandDetails";
import Home from "./Home";
import ChocolateDetails from './Components/choclatedetails';
import Footer from "./Footer"; 
import Header from "./Header";
import Login from "./login";
import SignUP from "./Register";
import SearchChoclate from"./Components/SearchChoclate";
function App() {
  return (
    
   <div>
     {/* <Login/> */}
      {/* <Header/> */}
        <Switch>
         <Route  exact path ="/choclates"component = {ChoclateList}></Route>
         <Route exact path ="/choclates/:id" component = {ChocolateDetails }></Route>
         <Route exact path = "/brands"component = {BrandList}></Route>
         <Route exact path = "/ChoclateList/:id"></Route>
         <Route exact path ="/brands/:id"component = {BrandDetails}></Route>
         <Route exact path = "/home" component = {Home} ></Route>
         <Route exact path = "/login"component = {Login}></Route>
         <Route exact path = "/signUp"component ={SignUP}></Route>
         <Route exact path = "/search"component = {SearchChoclate}></Route>
         <Route exact path  = "/"component = {Login}></Route>
   </Switch> 
 {/* <Login/> */}
<Footer/>
   {/* <Footer/>  */}
{/* <Main/> */}
{/* <Login/>  */}
    </div>
     
  );
}
const mapStateToProps = (state)=>{
  return state;
}
export default connect(mapStateToProps,ActionCreaters)(App);
