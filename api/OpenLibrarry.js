// Dependencies
const axios = require('axios')

const getSubjects = axios.create({
  baseURL: 'https://openlibrary.org/subjects/'
  // baseURL: 'https://openlibrary.org/subjects/programming.json?limit=10'
})

module.exports  = {
  getSubjects
}