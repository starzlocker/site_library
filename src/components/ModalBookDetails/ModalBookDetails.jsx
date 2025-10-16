import { useState } from 'react';
import PropTypes from 'prop-types';

const BookDetails = ({book}) => {
    book = {
      "title": "1984",
      "author": "George Orwell",
      "year": "1949",
      "genre": "Dystopian",
      "cover_url": "1984.jpg"
    }

    
    const [rating, setRating] = useState(0)

    const ratings = [1, 2, 3, 4, 5]

    return (
        <>
            <div className="modal-block"></div>
            <dialog className="form-book-details">
                <div className="book-info">
                    <div id="book-cover">
                        <img src={`/site_library/assets/images/${book.cover}`} alt="" />
                    </div>
                    <div>
                        <div id="book-title">
                            <h2>{book.title}</h2>
                        </div>
                        <div id="author">
                            <h3>{book.author}</h3>
                        </div>
                        <div id="genre">
                            <p>{book.genre}</p>
                        </div>
                        <div id="year">
                            <p>{book.year}</p>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="form-field" id="date-wrapper">
                        <div>
                            <label htmlFor="start">Inicio: </label>
                            <input type="date" name="start" className="textbox-padrao"></input>
                        </div>
                        <div>
                            <label htmlFor="finish">Fim: </label>
                            <input type="date" name="finish" className="textbox-padrao"></input>
                        </div>
                    </div>
                    <div className="form-field" id="anotations">
                        <label htmlFor="anotations">Anotações: </label>
                        <textarea name="anotations" className="textbox-padrao"></textarea>
                    </div>
                    <div className="form-field">
                        <label htmlFor="rating">Classificação: </label>
                        <div id="rating-wrapper">
                            {ratings.map(i => {
                                return (
                                    <input 
                                    type='radio' 
                                    name="rating" 
                                    value={i}
                                    key={i}
                                    className={i <= rating ? 'group-check' : ''}
                                    onChange={() => setRating(i)}/>
                                )
                            })}
                        </div>
                    <button type='submit'>
                        Enviar
                    </button>
                        
                    </div>
                    <div className="form-field"></div>
                </form>
            </dialog>
        </>
    );
};


BookDetails.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        cover: PropTypes.string
        // adicione outros campos se necessário
    }).isRequired,
};

export default BookDetails;