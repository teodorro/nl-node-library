const express = require('express');
const fileMulter = require('../middleware/file');
const books = require('../storage/books');
const router = express.Router();

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
router.post('/', fileMulter.single('fileBook'), (req, res, next) => {
  let path = '';
  if (req.file) {
    path = req.file.path;
  }
  const book = books?.add(req.body);
  book.fileBook = path;
  res.json(book);
  next();
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
});

router.get('/:id/download', (req, res) => {
  const { id } = req.params;
  idNumber = Number.parseInt(id);
  const book = books?.getBook(idNumber);

  const filePath = book.fileBook;
  res.download(filePath, `${book.fileName}.txt`, (err) => {
    if (err) {
      console.error('Error downloading the file:', err.message);
      res.status(500).send('Error downloading the file');
    }
  });

});

module.exports = router;
