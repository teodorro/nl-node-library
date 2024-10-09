const express = require('express');
const test = require('./__test');
const app = express();
app.use(express.json());
const userRouter = require('./routes/user');
const booksRouter = require('./routes/books');

// определяем обработчики для маршрутов
app.use('/api/user', userRouter);
app.use('/api/books', booksRouter);

// начинаем прослушивать подключения на порту 3000
app.listen(3000);

test.test();
