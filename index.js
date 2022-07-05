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

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
})

const Movie = mongoose.model('Movie', movieSchema)

const amadeus = new Movie({
  title: 'Amadeus',
  years: 1986,
  score: 9.2,
  rating: 'R',
})
