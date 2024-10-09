const express = require('express');
const router = express.Router();

// авторизация пользователя
// метод всегда возвращает Code: 201 и статичный объект: { id: 1, mail: "test@mail.ru" }
router.post('/', (req, res) => {
  const user = { id: 1, mail: 'test@mail.ru' };
  res.status(201); // indicates that the HTTP request has led to the creation of a resource
  res.json(user);
  console.log(user)
});

module.exports = router;