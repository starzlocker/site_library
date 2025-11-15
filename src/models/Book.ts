class Book {
  private _title: string = "";
  private _author: string = "";
  private _year: number = 0;
  private _genre: string = "";
  private _cover_url: string = "/midia/nocover.jpg";

  public set title(title: string) {
      this._title = title;
  }

  public get title(): string {
      return this._title;
  }

  public set author(author: string) {
      this._author = author;
  }

  public get author(): string {
      return this._author;
  }

  public set year(year: number) {
      this._year = year;
  }

  public get year(): number {
      return this._year;
  }

  public set genre(genre: string) {
      this._genre = genre;
  }

  public get genre(): string {
      return this._genre;
  }

  public set cover_url(cover_url: string) {
      if(cover_url) {
          this._cover_url = cover_url;
      } else {
          this._cover_url = '../../midia/nocover.jpg';
      }  }

  public get cover_url(): string {
      return this._cover_url;
  }

  public toString(): string {
      return `${this.title} (${this.year}) - ${this.genre}`;
  }
}

export default Book;