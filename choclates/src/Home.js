import React from "react";
import "./App.js";
import Navbar from"./navbar";
import Header from"./Header";
 import choc from"./choc.jpg";
import SignUp from"./Register";
const Home = ()=>{
    return(

        <div>
    <Navbar/>
    <Header/>
    <div className = "text">

<h1><i>Chocolate collection is a crowd sourced portel which gives details about world renowned
    brand annd chacolates</i></h1>
 <div>
           <img src ={choc} alt="images"></img>
   </div>
   {/* <SignUp/> */}
   {/* <Header/> */}
</div>

 </div>   );

}
export default Home;

