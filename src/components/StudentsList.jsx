import React from "react";

const StudentsList = (props) => {
  return props.issued.map((stud, index) => (
    <div key={index} className="row my-1 stud-details-row">
      <h4 className="col-3 stud-details-content">{stud.name}</h4>
      <h4 className="col-3 stud-details-content">{stud.usn}</h4>
      <h4 className="col-4 stud-details-content">{stud.branch}</h4>
      <h4 className="col-4 stud-details-content">{stud.year}</h4>
    </div>
  ));
};

export default StudentsList;
