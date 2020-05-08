import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Librarian from "./Librarian";
import Student from "./Student";
import Home from "./Home";
import styles from "../css/styles.css";

const App = () => (
  <Router>
    <Route path="/ada-project/" exact component={Home} />
    <Route path="/ada-project/Librarian" component={Librarian} />
    <Route path="/ada-project/Student" component={Student} />
  </Router>
);

export default App;
