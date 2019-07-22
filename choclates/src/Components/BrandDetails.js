import React,{Component} from "react";
import {  getbranddetails }from"../ActionCreaters/ChoclatesCreaters";
import {connect}from "react-redux";
import Header from "../Header";
import Navbar from "../navbar";

class BrandDetails extends Component {
  
  componentDidMount() {
    this.props.dispatch(getbranddetails(this.props.match.params.id));
  }
  render() {
    console.log(this.props)
    return (
      <>        <Navbar/>
                <Header/>  
                    
       <h3> Brand Details</h3>
       {this.props.branddetails.map(brandDetail => (
           <div>
                <h3>{brandDetail.name}</h3>
                <img src={brandDetail.image} alt = "images"></img>
                <h4>{brandDetail.desc}</h4>
           </div>
           ))}
      </>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStateToProps", appState.choclateState);
  return {
    branddetails: appState.choclateState.branddetails,
       isLoading: appState.choclateState.isLoading
  };
}
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BrandDetails);
