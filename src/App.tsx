import { useState, useEffect } from "react";
import "./App.css";
import "./components/ModalBookDetails/ModalBookDetails.css"
import Main from "./components/Main/Main.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Book from "./models/Book.js";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/books")
      .then(r => r.json())
      .then(data => {
        setBooks(data.data);
        setFilteredBooks(data.data)
        setLoading(false);
      })
      .catch(e => {
        setErrors(e);
        setLoading(false);
        
      })
  }, [])
  console.log(books)
  // Filter books based on search term
  useEffect(() => {
    const results = books.filter((book) => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  if (loading) {
    return <div>Carregando dados...</div>
  }

  if (errors.length) {
    return <ul>
      {errors.map((e, i) => {
        return <li key={i}>{e}</li>
      })}
    </ul>
  }

  const addBook = (book: Book) => {
    books.push(book);
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