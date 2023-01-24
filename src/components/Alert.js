import React from "react";
// import React, { useState } from 'react'
// import PropTypes from 'prop-types';

function Alert(props) {
  //the message type (success) should be written in lower case
  const capitalize = (word) => {
    //and this function is used to capitalized the first alphabet of Success
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <h1>Hello</h1>
        <strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}
export default Alert;
