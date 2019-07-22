import React from"react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../Header";

function ChoclateListItem(props){
    console.log(props)
    return(
        <div>
            
        <div className = "item">
            <h3>          
            <p>{props.id}</p>
            <p>{props.name}</p>
            <Link to ={`choclates/${props.id}`}>
            <img src={props.images} alt="images" /></Link>
            <p>{props.desc}</p>
            </h3>
        </div>
 
 </div>   );
}
ChoclateListItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    
  };export default ChoclateListItem;