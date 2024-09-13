/* eslint-disable react/prop-types */
const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <div className="nav-title">
        <img src="../../public/library.svg" />
        <h1>Library Model</h1>
      </div>
      <nav>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </nav>
    </header>
  );
};

export default Header;
