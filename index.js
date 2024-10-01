const Books = require('./books');
const books = new Books();

const express = require('express');
const app = express();
app.use(express.json());

// авторизация пользователя
// метод всегда возвращает Code: 201 и статичный объект: { id: 1, mail: "test@mail.ru" }
const authorize = (req, res) => {
  const user = { id: 1, mail: 'test@mail.ru' };
  res.status(201); // indicates that the HTTP request has led to the creation of a resource
  res.json(user);
};

// получить все книги
// получаем массив всех книг
const getBooks = (req, res) => {
  res.json(books.getBooks());
};

// получить книгу по ID
// получаем объект книги, если запись не найдена, вернём Code: 404
const getBook = (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const book = books.getBook(idNumber);
  console.log(book)
  if (book == null) {
    res.status(404);
  }
  res.json(book);
};

// создать книгу
// создаём книгу и возвращаем её же вместе с присвоенным ID
const createBook = (req, res) => {
  const book = books.add(req.body);
  res.json(book);
};

// редактировать книгу по ID
// редактируем объект книги, если запись не найдена, вернём Code: 404
const editBook = (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const book = books.edit(idNumber, req.body);
  if (book != null) {
    res.json(book);
  } else {
    res.status(404);
    res.json('404 | страница не найдена');
  }
};

// удалить книгу по ID
// удаляем книгу и возвращаем ответ: 'ok'
const deleteBook = (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const deleted = books.delete(idNumber);
  if (deleted) {
    res.json('ok');
  } else {
    res.status(404);
    res.json('404 | страница не найдена');
  }
};



// определяем обработчики для маршрутов
app.post('/api/user/login', authorize);
app.get('/api/books/', getBooks);
app.get('/api/books/:id', getBook);
app.post('/api/books/', createBook);
app.put('/api/books/:id', editBook);
app.delete('/api/books/:id', deleteBook);

// начинаем прослушивать подключения на порту 3000
app.listen(3000);
