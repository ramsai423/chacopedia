import React,{Component} from "react";
import { getchoclate }from"../ActionCreaters/ChoclatesCreaters";
import ChoclateListItem from"./ChoclateListItems";
import {connect}from "react-redux";
import Header from "../Header";
import Navbar from "../navbar";

class ChoclateList extends Component {
  componentDidMount() {
    this.props.dispatch(getchoclate());
  }
  render() {
    console.log(this.props)
    return (
      <> 
      <Navbar/>
        <Header/>
       <h3> Choclate</h3>
   
          {this.props.choclate.map(c => (
          <ChoclateListItem
             key={c.id}
            id={c.id}
            name={c.name}
          images={c.image}
            desc={c.desc}
             />
          ))}
      </>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStateToProps", appState.choclateState);
  return {
    choclate: appState.choclateState.choclate,
       isLoading: appState.choclateState.isLoading
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ChoclateList);