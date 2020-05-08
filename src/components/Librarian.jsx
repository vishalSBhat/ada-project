import React, { useState, useEffect } from "react";
import Book from "./Book";
import NavBar from "./NavBar";
import LibraryListHeader from "./LibraryListHeader";
import SearchBar from "./SearchBar";

const Librarian = () => {
  const [pass, setPass] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/book/list");
      const data = await res.json();
      setBooksList([...data]);
      setSearchList([...data]);
    }
    fetchData();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/book/list");
    const data = await res.json();
    setBooksList([...data]);
    setSearchList([...data]);
  };

  const passUpdate = (e) => setPass(e.target.value);

  const passCheck = () => {
    if (pass === "dsce") setPass("done");
    else {
      alert("wrong password");
      setPass("");
    }
  };

  const listUpdate = async (val) => {
    let list = [];
    list = booksList.filter((book) =>
      book.name.toLowerCase().includes(val.toLowerCase())
    );
    setSearchList([...list]);
  };

  const booksListUpdate = (e) => {
    listUpdate(e.target.value);
  };

  const bookDelete = (name) => {
    fetch("http://localhost:8080/book/delete", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ name }),
    }).then(() => fetchBooks());
  };

  const bookAccept = (id, usn, name) => {
    if (isNaN(id)) return;

    fetch("http://localhost:8080/student/accept", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ id, usn, name }),
    })
      .then((res) => console.log(res))
      .then(() => fetchBooks());
  };

  const bookIssue = (student, name) => {
    if (
      isNaN(parseInt(student.bookId.value)) ||
      isNaN(parseInt(student.year.value))
    )
      return;
    const id = student.bookId;
    delete student.bookId;
    const data = { student, name, id };
    fetch("http://localhost:8080/student/issue", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .then(() => fetchBooks());
  };

  return (
    <>
      <NavBar />
      {pass !== "done" ? (
        <div className="mt-5 center">
          <h3 className="mb-4">You are signing in as Librarian</h3>
          <div className="my-3 mx-auto column librarian-box">
            <input
              className="librarian-pass-box"
              type="password"
              value={pass}
              required
              onChange={passUpdate}
            />
            <span className="placeholder">Password</span>
            <button className="btn btn-lg btn-outline-dark" onClick={passCheck}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="column library">
          <SearchBar onChange={booksListUpdate} />
          <br />
          <div className="my-5 center">
            <LibraryListHeader />
            <div className="center books-list">
              {searchList.map((book, index) => (
                <Book
                  index={index}
                  {...book}
                  onBookAccept={bookAccept}
                  onDelete={bookDelete}
                  onBookIssue={bookIssue}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Librarian;
