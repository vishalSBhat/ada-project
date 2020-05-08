import React, { useState } from "react";
import StudentsList from "./StudentsList";
import InputWithAlert from "./InputWithAlert";
import BookIssueBox from "./BookIssueBox";
import IndividualBook from "./IndividualBook";

const Book = (props) => {
  const [show, toggleShow] = useState(false);
  const [show1, toggleShow1] = useState(false);
  const [value, setValue] = useState({
    id: { value: "", isError: false },
    usn: { value: "", isError: false },
  });
  const [student, setStudent] = useState({
    bookId: { value: "", isError: false },
    name: { value: "", isError: false },
    usn: { value: "", isError: false },
    branch: { value: "", isError: false },
    year: { value: "", isError: false },
  });

  const updateToggle = () => toggleShow(!show);

  const valueUpdate = (val, key, from) => {
    if (from === "value")
      setValue((prev) => ({ ...prev, [key]: { value: val, isError: false } }));
    else
      setStudent((prev) => ({
        ...prev,
        [key]: { value: val, isError: false },
      }));
  };

  const checkEmpty = (obj) =>
    Object.keys(obj).find((each) => obj[each].value === "");

  const checkError = (obj, from) => {
    const res = checkEmpty(obj);
    if (res !== true && res !== undefined)
      if (from === "value")
        setValue((prev) => ({ ...prev, [res]: { value: "", isError: true } }));
      else
        setStudent((prev) => ({
          ...prev,
          [res]: { value: "", isError: true },
        }));
    else if (from === "value") {
      setValue({
        id: { value: "", isError: false },
        usn: { value: "", isError: false },
      });
      props.onBookAccept(parseInt(value.id.value), value.usn.value, props.name);
    } else {
      toggleShow1(!show1);
      setStudent({
        bookId: { value: "", isError: false },
        name: { value: "", isError: false },
        usn: { value: "", isError: false },
        branch: { value: "", isError: false },
        year: { value: "", isError: false },
      });
      props.onBookIssue(student, props.name);
    }
  };

  return (
    <div className="column book-row">
      <IndividualBook
        style={{ cursor: "pointer" }}
        updateToggle={updateToggle}
        name={props.name}
        author={props.author}
      />
      <div
        className="issued-data"
        style={
          show
            ? { height: "250px", opacity: 1, overflowY: "scroll" }
            : { height: 0, overflow: "hidden", opacity: 0 }
        }
      >
        <div className="row del-stock">
          <h4>Stock : {props.quantity}</h4>
          <div>
            <button
              className="mx-3 px-3 py-1 btn btn-sm btn-light"
              onClick={() => toggleShow1(!show1)}
            >
              Issue Book
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => props.onDelete(props.name)}
            >
              Delete
            </button>
          </div>
          <BookIssueBox
            show={show1}
            close={() => toggleShow1(!show1)}
            student={student}
            name={props.name}
            author={props.author}
            valueUpdate={valueUpdate}
            checkError={checkError}
          />
        </div>
        <div className="center mb-4 mt-3 stud-details">
          <div className="my-3 row stud-details-row">
            <h3 className="col-3 stud-details-title">Name</h3>
            <h3 className="col-3 stud-details-title">USN</h3>
            <h3 className="col-4 stud-details-title">Branch</h3>
            <h3 className="col-4 stud-details-title">Year</h3>
          </div>
          <div className="column">
            <StudentsList issued={props.issued} />
          </div>
        </div>
        <div>
          <InputWithAlert
            id="id"
            from="value"
            {...value.id}
            placeholder="Enter book id"
            onChange={valueUpdate}
          />
          <InputWithAlert
            id="usn"
            from="value"
            {...value.usn}
            placeholder="Enter student USN"
            onChange={valueUpdate}
          />
          <button
            className="btn btn-md btn-light"
            onClick={() => checkError(value, "value")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
