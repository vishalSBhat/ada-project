import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckDisplay from "./CheckDisplay";
import NavBar from "./NavBar";

const Home = (props) => {
  const [check, onCheck] = useState({
    value: "",
    checked: false,
  });

  const checkUpdate = (value) => {
    if (value === check.value && check.checked === true)
      onCheck({ value: "", checked: false });
    else if (value !== check.value) onCheck({ value, checked: true });
    else onCheck({ value, checked: !check.checked });
  };

  return (
    <div>
      <NavBar />
      <div className="sign-in-box">
        <h4 className="sign-in-title">Sign in as</h4>
        <div className="column sign-in-checkbox">
          <CheckDisplay value="Librarian" func={checkUpdate} check={check} />
          <CheckDisplay value="Student" func={checkUpdate} check={check} />
          <br />
          <Link to={`/ada-project/${check.value}`}>
            <button
              className="btn btn-md btn-outline-dark"
              type="button"
              disabled={!check.checked}
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
