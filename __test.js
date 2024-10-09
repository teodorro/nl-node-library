const axios = require('axios');

module.exports = {
  test: () => {
    axios
      .post('http://localhost:3000/api/books', {
        title: 'book1',
        description: 'asdqq',
        authors: 'dd ff',
        favorite: 'ee',
        fileCover: 'ff',
        fileName: 'gg',
      })
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .post('http://localhost:3000/api/books', {
        title: 'book2',
        description: 'asdqq',
        authors: 'dd ff',
        favorite: 'ee',
        fileCover: 'ff',
        fileName: 'gg',
      })
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .get('http://localhost:3000/api/books/')
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .get('http://localhost:3000/api/books/1')
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .put('http://localhost:3000/api/books/1', { title: 'book-changed' })
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .delete('http://localhost:3000/api/books/2')
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    axios
      .get('http://localhost:3000/api/books/')
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  },
};
