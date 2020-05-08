import React from "react";
import error from "../images/error.jpg";

const InputWithAlert = (props) => (
  <span className="input-box">
    <input
      id={props.id}
      className={"mb-3 " + props.class}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value, props.id, props.from)}
    />
    <img
      className="mx-3 alert"
      src={error}
      style={{ display: props.isError ? "inline" : "none" }}
      alt=""
    />
  </span>
);

export default InputWithAlert;
