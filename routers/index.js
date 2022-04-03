const router = require('express').Router()
const BookController = require('../controller/BookController')
const PickUpController = require('../controller/PickUpController')

// Test URL
router.get('/', (req, res) => {
  res.status(200).json(`Server is Running on ${process.env.PORT}`)
})

// URL
router.get('/list-book', BookController.getList)
router.post('/book-pickup', PickUpController.bookPickUp)

module.exports = router