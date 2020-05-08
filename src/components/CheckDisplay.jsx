import React from "react";

const CheckDisplay = (props) => (
  <div>
    <input
      type="checkbox"
      name={props.value}
      checked={props.check.value === props.value ? props.check.checked : false}
      onChange={() => props.func(props.value)}
    />
    <label
      className="checkbox-item"
      htmlFor={props.value}
      onClick={() => props.func(props.value)}
    >
      {props.value}
    </label>
  </div>
);

export default CheckDisplay;
