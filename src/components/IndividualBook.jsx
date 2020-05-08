import React from "react";

const IndividualBook = (props) => {
  return (
    <div
      style={props.style}
      className="row book-title-row"
      onClick={props.updateToggle}
    >
      <h4 className="col-1">{props.name}</h4>
      <h4 className="col-2">{props.author}</h4>
    </div>
  );
};

export default IndividualBook;
