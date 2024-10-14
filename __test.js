const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

module.exports = {
  test: async () => {
    const formData = new FormData();
    formData.append('fileBook', fs.createReadStream('./text1.txt')); // Adjust the file path
    formData.append('title', 'book1');
    formData.append('description', 'my-descr');
    formData.append('authors', 'a1 a2');
    formData.append('favorite', 'favor');
    formData.append('fileCover', 'carpet');
    formData.append('fileName', 'my-name');
    // formData.append('textInfo', {
    //   title: 'book1',
    //   description: 'asdqq',
    //   authors: 'dd ff',
    //   favorite: 'ee',
    //   fileCover: 'ff',
    //   fileName: 'gg',
    // }); // Add additional text info
    await axios
      .post(
        'http://localhost:3000/api/books',
        formData
        ,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    // axios
    //   .post('http://localhost:3000/api/books', {
    //     title: 'book2',
    //     description: 'asdqq',
    //     authors: 'dd ff',
    //     favorite: 'ee',
    //     fileCover: 'ff',
    //     fileName: 'gg',
    //   })
    //   .then((response) => {
    //     console.log(response.data); // Log the response data
    //     console.log('--------------------------');
    //   })
    //   .catch((error) => {
    //     console.error(`Error: ${error.message}`);
    //   });
    await axios
      .get('http://localhost:3000/api/books/')
      .then((response) => {
        console.log(response.data); // Log the response data
        console.log('--------------------------');
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    // axios
    //   .get('http://localhost:3000/api/books/1')
    //   .then((response) => {
    //     console.log(response.data); // Log the response data
    //     console.log('--------------------------');
    //   })
    //   .catch((error) => {
    //     console.error(`Error: ${error.message}`);
    //   });
    // axios
    //   .put('http://localhost:3000/api/books/1', { title: 'book-changed' })
    //   .then((response) => {
    //     console.log(response.data); // Log the response data
    //     console.log('--------------------------');
    //   })
    //   .catch((error) => {
    //     console.error(`Error: ${error.message}`);
    //   });
    // axios
    //   .delete('http://localhost:3000/api/books/2')
    //   .then((response) => {
    //     console.log(response.data); // Log the response data
    //     console.log('--------------------------');
    //   })
    //   .catch((error) => {
    //     console.error(`Error: ${error.message}`);
    //   });
    // axios
    //   .get('http://localhost:3000/api/books/')
    //   .then((response) => {
    //     console.log(response.data); // Log the response data
    //     console.log('--------------------------');
    //   })
    //   .catch((error) => {
    //     console.error(`Error: ${error.message}`);
    //   });

    // await axios
    // .post('http://localhost:3000/api/books/1/download')
    // .then((response) => {
    //   console.log(response.data); // Log the response data
    //   console.log('--------------------------');
    // })
    // .catch((error) => {
    //   console.error(`Error: ${error.message}`);
    // });
  },
};
