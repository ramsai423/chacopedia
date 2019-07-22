import React from "react";
import { connect } from "react-redux";
import { GET_CHOCLATE } from "./actionCreater/customerAC";

function ManageCustomer(props) {
  const handleChange = name => e => {
    props.dispatch(changeInput(name, e.target.value));
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={props.name} onChange={handleChange("name")} />
      <label>Email:</label>
      <input type="text" value={props.email} onChange={handleChange("email")} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name:state.customersState.name,
    email: state.customersState.email
  };
}

export default connect(mapStateToProps)(ManageCustomer);