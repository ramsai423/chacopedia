import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import "./App.css"
import {changeInput} from "./ActionCreaters/LoginCreaters";
import {connect}from"react-redux";
function Navbar (props) {

const search =e=>{
    e.preventDefault();
    props.history.push("/search");

  }
  const handleChange = name => e =>{
    e.preventDefault();
    props.dispatch(changeInput(name,e.target.value))
  }
    return (
        <div>
            <div>
                

                <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h4><em>chocolate collection</em></h4>
                    <ul className="navbar-nav mr-auto">
        
                        <li className="nav-item mr-3 active">
                         <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                          <li className="nav-item mr-3"> 
                            <Link  to="/choclates" className="nav-link" href="#">ChoclateList</Link>
                        </li> 
                        <li className="nav-item mr-3">
                            <Link  to="/brands" className="nav-link" href="#">BrandList</Link>
                        </li> 
                         <li className="nav-item mr -7">
                            <Link  to="/" className="nav-link" href="#">Logout</Link>
                        </li>  
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <Link to="/choclates"><input  type="search" onChange = {handleChange("searchName")} ></input></Link>
                        <button type="submit" onClick  = {search}>Search</button>
                        </form>
                </div></div>

            {/* <ul className="main-nav">
                <li className="button"><a href="" className="btn">HOME</a></li>
                <li>
                    <Link to="/choclates"
                    >ChoclateList</Link>
                </li>
                <li>
                    <Link to="/choclatedetails" exact>ChoclateListItem</Link>  </li>
                <li>
                    <Link to="/brands">BrandList</Link>
                </li>
                <li>
                    <Link to="/branddetails" exact>BrandListItem</Link>
                </li>
                <input type="text" />
                <button>serach</button>
            </ul> */}
         {/* <li><a onClick = {()=>this.handleLogin()}>LOGIN HERE</a></li> 
        //   <li><a href = ""className = "btn">SIGNUP</a></li> 
    */} 
    </div>
    );
}
function mapStateToProps(appState){
    return(
{         searchName:appState.choclateState.searchName
   }
      )
}


export default withRouter(connect(mapStateToProps)(Navbar));
