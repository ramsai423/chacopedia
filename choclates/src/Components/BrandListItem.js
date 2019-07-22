import React from"react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './imageChange.css';
import Header from "./Header";
import Navbar from "../navbar";
// import props from "./choclatedetails";
//import ChoclateReducer from "../Reducers/ChoclateReducer";

function BrandListItem(props){
    console.log(props)
    return(
           <div>
               <Navbar/>
               <Header/>
            
             
        <div className = "item">
        
            <h3>
                {/* <Link to = {`choclates/${props.id}${props}`}> */}
            
             <div class ="row">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <Link to ={`brands/${props.id}`}>
            <img src={props.images} alt="images"height="100px" /></Link>
            {/* <img class="imageChange" src="http://localhost:4000/images/Lindt.png" alt="image" ></img> */}
            
        
           
            {/* <p>{props.desc}</p> */}
            {/* </Link> */}
            </div>
            </h3>
        </div>
        </div>
    );
}
BrandListItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    //phone: PropTypes.string.isRequired,
    //onDelete: PropTypes.func.isRequired
  };export default BrandListItem;