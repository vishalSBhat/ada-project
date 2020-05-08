import React from "react";
import InputWithAlert from "./InputWithAlert";
import close from "../images/close.png";

const BookIssueBox = (props) => {
  return (
    props.show && (
      <div className="row body-temp">
        <div className="issue-box-container">
          <span className="m-2 issue-box-book-detail">
            Book Name: {props.name}
          </span>
          <span className="m-2 issue-box-book-detail">
            Book Author: {props.author}
          </span>
          <InputWithAlert
            class="id-box"
            id="bookId"
            from="student"
            {...props.student.bookId}
            placeholder="Book id"
            onChange={props.valueUpdate}
          />
          <img className="close" src={close} alt="" onClick={props.close} />
          <h2 className="m-3">Student Details</h2>
          <div className="issue-box-student">
            <InputWithAlert
              id="name"
              from="student"
              {...props.student.name}
              placeholder="Student Name"
              onChange={props.valueUpdate}
            />
            <InputWithAlert
              id="usn"
              from="student"
              {...props.student.usn}
              placeholder="Student USN"
              onChange={props.valueUpdate}
            />
            <InputWithAlert
              id="branch"
              from="student"
              {...props.student.branch}
              placeholder="Student Branch"
              onChange={props.valueUpdate}
            />
            <InputWithAlert
              id="year"
              from="student"
              {...props.student.year}
              placeholder="Student Year"
              onChange={props.valueUpdate}
            />
          </div>
          <button
            className="btn btn-lg btn-dark"
            onClick={() => props.checkError(props.student, "student")}
          >
            Issue
          </button>
        </div>
      </div>
    )
  );
};

export default BookIssueBox;
