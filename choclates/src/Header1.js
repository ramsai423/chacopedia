import React from"react";
import {Link}from"react-router-dom";
function Header(){
    alert('dsd')
    return(
    <>

    <div className="header">
    <h1><i>Chocolate... </i></h1>
      <h3><i> is the answer, who cares what the question is</i></h3>
      {/* <li className="nav-item mr-3"> 
                            <Link  to="/choclates" className="nav-link" href="#">ChoclateList</Link>
                        </li> 
                        <li className="nav-item mr-3">
                            <Link  to="/brands" className="nav-link" href="#">BrandList</Link>
                        </li> */}
      </div> 
      



    </>
    );
}
export default Header;