/* eslint-disable react/prop-types */
import magnifyingGlass from '../assets/magnifying-glass.svg';
import library from '../assets/library.svg';
const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button type="submit">
        <img src={magnifyingGlass} className='magnifying-glass'/>
      </button>
    </div>
  );
};

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <div className="nav-title">
        <img src={library} />
        <h1>Library Model</h1>
      </div>
      <nav>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </nav>
    </header>
  );
};

export default Header;
