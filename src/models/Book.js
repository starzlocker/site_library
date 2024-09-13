class Book {
  constructor() {
      this.title = '';
      this.author = '';
      this.year = '';
      this.genre = '';
      this.cover = '';
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

  setCover = (cover) => {
      if(cover) {
          this.cover = cover;
          return this;
      } else {
          this.cover = '../../midia/nocover.jpg';
      }
  }

  toString() {
      return `${this.title} (${this.year}) - ${this.genre}`;
  }
}

export default Book;