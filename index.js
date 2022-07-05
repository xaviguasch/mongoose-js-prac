const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/movieApp')
  .then((result) => {
    console.log('connection open!')
  })
  .catch((error) => {
    console.log('Oh no error!!!')
    console.log(error)
  })
