import React, { Component } from "react";
import { getbrand } from "../ActionCreaters/ChoclatesCreaters";
// import BrandListItem from "./BrandListItem";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import Header from "../Header";
import Navbar from "../navbar";
class BrandList extends Component {
  componentDidMount() {
    this.props.dispatch(getbrand());
  }
  render() {
    return (
      <>
      
        <Navbar/>
        <Header/>    
        <h3> Brands</h3>   
        <div class="row">
        {this.props.brands.map(data => (
           
              <div class="col-4">
              {/* <p>{data.id}</p> */}
              <p>{data.name}</p>
              <Link to ={`brands/${data.id}`}>
              <img src={data.logo} alt="images"height="100px" /></Link>
              </div>
          
         



          // <BrandListItem
          //   key={b.id}
          //   id={b.id}
          //   name={b.name}
          //   images={b.logo}
          // />
        ))}
          </div>
      </>
    );
  }
}
function mapStateToProps(appState) {
  console.log("mapStateToProps", appState.brandState);
  return {
    brands: appState.brandState.brands,
    isLoading: appState.brandState.isLoading
  };
}
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BrandList);