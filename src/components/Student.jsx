import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LibraryListHeader from "./LibraryListHeader";
import SearchBar from "./SearchBar";
import IndividualBook from "./IndividualBook";

const Student = () => {
  const [booksList, setBooksList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/book/list");
      const data = await res.json();
      setBooksList([...data]);
      setSearchList([...data]);
    }
    fetchData();
  }, []);

  const booksListUpdate = async (val) => {
    let list = [];
    list = booksList.filter((book) =>
      book.name.toLowerCase().includes(val.toLowerCase())
    );
    setSearchList([...list]);
  };

  return (
    <>
      <NavBar />
      <div className="column library">
        <SearchBar onChange={(e) => booksListUpdate(e.target.value)} />
        <br />
        <div className="my-5 center">
          <LibraryListHeader />
          <div className="center books-list">
            {searchList.map((book, index) => (
              <div className="column book-row stud-book-row">
                <IndividualBook
                  key={index}
                  name={book.name}
                  author={book.author}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
