import React, { useEffect } from "react";
import { getsearch } from "../ActionCreaters/LoginCreaters";
import Navbar from "../navbar";
import {connect} from"react-redux";

function SearchChoclate(props){
useEffect(() => {
    props.dispatch(getsearch(props.searchName));
},[])
return(
    <>
    <Navbar/>
    {props.SearchChoclate.map(prop =>(
        <div
            key = {prop.id}>
         <img src = {prop.image}></img>
         <h3>{prop.name}</h3>
         <h4>{prop.desc}</h4>
        </div>
    ))}
    </>
);
    }
    function mapStateToProps(appState)
    {
        return({
            searchName:appState.choclateState.searchName,
            SearchChoclate:appState.choclateState.SearchChoclate,
            error:appState.choclateState.error
        })
    }
export default connect(mapStateToProps)(SearchChoclate);