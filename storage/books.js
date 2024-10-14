class Books {
  constructor() {
    this._books = [];
    this._nextId = 1;
  }

  add(info) {
    const { title, description, authors, favorite, fileCover, fileName, fileBook } = info;
    const book = { title, description, authors, favorite, fileCover, fileName, fileBook };
    book.id = this._nextId++;
    this._books.push(book);
    return book;
  }

  getBooks() {
    return [...this._books];
  }

  getBook(id) {
    return this._books.find((book) => book.id === id);
  }

  delete(id) {
    if (this._books.some((book) => book.id === id)) {
      this._books = this._books.filter((book) => book.id !== id);
      return true;
    } else {
      return false;
    }
  }

  edit(id, info) {
    const book = this._books.find((book) => book.id === id);
    if (book == null) {
      return null;
    }
    const { title, description, authors, favorite, fileCover, filename, fileBook } = info;
    if (title != null) {
      book.title = title;
    }
    if (description != null) {
      book.description = description;
    }
    if (authors != null) {
      book.authors = authors;
    }
    if (favorite != null) {
      book.favorite = favorite;
    }
    if (fileCover != null) {
      book.fileCover = fileCover;
    }
    if (filename != null) {
      book.filename = filename;
    }
    if (fileBook != null) {
      book.fileBook = fileBook;
    }
    return book;
  }
};

const books = new Books();

module.exports = books;