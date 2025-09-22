class Book {
  constructor() {
      this.title = '';
      this.author = '';
      this.year = '';
      this.genre = '';
      this.cover_url = '';
  }

  setTitle = (title) => {
      if(title) {
          this.title = title;
          return this;
      } else {
          throw new Error("Digite um valor válido");
      }
  }

  setYear = (year) => {
      if(year >= 0) {
          this.year = year;
          return this;
      } else {
          throw new Error("Digite um valor válido");
      }
  }

  setAuthor = (author) => {
      if(author) {
          this.author = author;
          return this;
      } else {
          throw new Error("Digite um valor válido");
      }
  }

  setGenre = (genre) => {
      if(genre) {
          this.genre = genre;
          return this;
      } else {
          throw new Error("Digite um valor válido");
      }
  }

  setCover = (cover_url) => {
      if(cover_url) {
          this.cover_url = cover_url;
          return this;
      } else {
          this.cover_url = '../../midia/nocover.jpg';
      }
  }

  toString() {
      return `${this.title} (${this.year}) - ${this.genre}`;
  }
}

export default Book;