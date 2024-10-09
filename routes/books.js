const express = require('express');
const Books = require('./../books');
const router = express.Router();
let books = new Books();

// получить все книги
// получаем массив всех книг
router.get('/', (req, res) => {
  res.json(books.getBooks());
});

// получить книгу по ID
// получаем объект книги, если запись не найдена, вернём Code: 404
router.get('/:id', (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const book = books?.getBook(idNumber);
  if (book == null) {
    res.status(404);
  }
  res.json(book);
});

// создать книгу
// создаём книгу и возвращаем её же вместе с присвоенным ID
router.post('/', (req, res) => {
  const book = books?.add(req.body);
  res.json(book);
});

// редактировать книгу по ID
// редактируем объект книги, если запись не найдена, вернём Code: 404
router.put('/:id', (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const book = books?.edit(idNumber, req.body);
  if (book != null) {
    res.json(book);
  } else {
    res.status(404);
    res.json('404 | страница не найдена');
  }
});

// удалить книгу по ID
// удаляем книгу и возвращаем ответ: 'ok'
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const deleted = books?.delete(idNumber);
  if (deleted) {
    res.json('ok');
  } else {
    res.status(404);
    res.json('404 | страница не найдена');
  }
})

module.exports = router;



