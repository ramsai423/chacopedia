import React,{Component} from "react";
import { getchoclatedetails }from"../ActionCreaters/ChoclatesCreaters";
import {connect}from "react-redux";
import Header from "../Header";
import Navbar from "../navbar";

class ChocolateDetails extends Component {
  componentDidMount() {
    this.props.dispatch(getchoclatedetails(this.props.match.params.id));
  }
  render() {
    console.log(this.props)
    return (
      <>

      <div>
        <Navbar/>
        <Header/>
      </div>
       <h3> Choclate Details</h3>
       <h3>{this.props.choclatedetails.name}</h3>
       <img src={this.props.choclatedetails.images} alt ="images"></img>
       <h4>{this.props.choclatedetails.desc}</h4>
      </>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStateToProps", appState.choclateState);
  return {
    choclatedetails: appState.choclateState.choclatedetails,
       isLoading: appState.choclateState.isLoading
  };
}
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ChocolateDetails);
