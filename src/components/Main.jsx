/* eslint-disable react/prop-types */
import books from "../data/books";
import { useState } from 'react';

// Utility function to truncate text if it exceeds 25 characters
function checkTextLength(text) {
  return text.length > 25 ? `${text.slice(0, 25)}...` : text;
}

// Function to handle removing a book
function removeBook(e, setFilteredBooks) {
  const bookTitle = e.target.nextSibling.title;
  const index = books.findIndex((b) => b.title === bookTitle);
  if (index !== -1) {
    console.log(`${books[index].title} removed`);
    books.splice(index, 1);
    setFilteredBooks([...books]);
  } else {
    alert("Book not found");
  }
}

const BookForm = ({addBook}) => {
    const date = new Date();
    const year = date.getFullYear();
    const [book, setBook] = useState({
      title: "",
      author: "",
      year: year,
      genre: "",
      cover: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBook({
        ...book,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.info(book["genre"])
      addBook(book);
      
      setBook({
        title: "",
        author: "",
        year: year,
        genre: "",
        cover: "",
      });
  
      const dialog = document.querySelector("dialog");
      dialog.close();
    }
  
    const handleShowForm = () => {
      const dialog = document.querySelector("dialog");
  
      dialog.showModal();
    };
  
    const handleCloseForm = () => {
      const dialog = document.querySelector("dialog");
  
      dialog.close();
    }
  
    const handleFocus = (e) => {
      e.target.placeholder = '';
    }
  
    const handleBlur = (e) => {
      e.target.placeholder = e.target.dataset.placeholder;
    }
  
    return (
      <>
      <div onClick={handleShowForm} className="card card-add" title="Adicionar livro">
        <div className="clip-plus"></div>
        <h3>Adicionar Novo<br />Livro</h3>
      </div>
      <dialog className="form-dialog">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Adicionar Livro</h2>
            <button onClick={handleCloseForm} className="close-form-btn">X</button>
          </div>
          <hr></hr>
          <div className="form-field">
            <input
              type="text"
              id="title-in"
              name="title"
              value={book.title}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder='Título'
              data-placeholder='Título'
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              id="autor-in"
              name="author"
              value={book.author}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder='Autor'
              data-placeholder='Autor'
            />
          </div>
          <div className="form-field">
            <select
              id="genero-in"
              name="genre"
              value={book.genre}
              onChange={handleChange}
            >
              <option value="" disabled defaultValue>
                Gênero
              </option>
              <option value="drama">Drama</option>
              <option value="acao">Ação</option>
              <option value="suspense">Suspense</option>
              <option value="terror">Terror</option>
            </select>
          </div>
          <div className="form-field">
            <input
              type="number"
              value={book.year}
              max={year}
              min={1}
              id="ano-in"
              name="year"
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              id="cover-image-in"
              name="cover"
              value={book.cover}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="http://exemplo.com/capa.jpg"
              data-placeholder="http://exemplo.com/capa.jpg"
           />
          </div>
          <input type="submit" className="form-add-btn" value="Adicionar livro" />
        </form>
  
      </dialog>
      </>
    );
  };

// Component to render a bookshelf
function Bookshelf({ filteredBooks, setFilteredBooks, children }) {
  function getImageUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href;
  }

  return (
    <div className="books-container">
      {children}
    
      {filteredBooks.map((book, index) => (
        <div className="card" key={index}>
          <img 
            className="book-cover" 
            src={book.cover ? getImageUrl(book.cover) : getImageUrl('nocover.jpg')} alt={book.title} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = getImageUrl('nocover.jpg');
            }}
          />
          <button
            className="remove-btn"
            onClick={(e) => removeBook(e, setFilteredBooks)}
          >
            X
          </button>
          <h3 title={book.title}>{checkTextLength(book.title)}</h3>
          <p>{checkTextLength(book.author)}</p>
        </div>
      ))}
    </div>
  );
}

const Main = ({ filteredBooks, setFilteredBooks, addBook }) => {
  return (
    <>
      <main>
        <Bookshelf
          filteredBooks={filteredBooks}
          setFilteredBooks={setFilteredBooks}
        >
            <BookForm addBook={addBook}/>
        </Bookshelf>
      </main>
    </>
  );
};

export default Main;
