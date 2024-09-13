import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import books from "./data/books";
import Book from "./models/Book";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Filter books based on search term
  useEffect(() => {
    const results = books.filter((book) => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  const addBook = ({ title, author, year, genre, cover }) => {
    let newBook = new Book();
    newBook
      .setTitle(title)
      .setAuthor(author)
      .setYear(year)
      .setGenre(genre)
      .setCover(cover);

    console.info(newBook)
    books.push(newBook);
    setFilteredBooks([...books]); // Update the filtered books as well
  };
  
  return (
    <>
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <hr />
        <Main 
          filteredBooks={filteredBooks} 
          setFilteredBooks={setFilteredBooks}
          addBook={addBook} 
        />
        <Footer />
    </>
  );
}

export default App;