// Dependencies
const { getSubjects } = require('../api/OpenLibrarry')

class BookController {
  static async getList(req, res, next) {
    try {
      // Send subject request to REST API Open Library and limit 100 data
      const resSubject = await getSubjects.get(`programming.json?limit=100`)

      // Create result object data to store data from REST API
      const result = {
        subject: resSubject.data.name,
        bookCount: resSubject.data.work_count,
        available_books: []
      }

      // put works book into variable
      const works = resSubject.data.works
      // Loop the books
      works.forEach(el => {
        // Filtring Books base on availability
        if (
          el.availability?.available_to_borrow &&
          el.availability?.available_to_borrow !== false &&
          el.availability?.available_to_borrow !== undefined
        ) {
          result.available_books.push({
            title: el?.title,
            authors: el?.authors,
            edition: el?.edition_count,
            last_loan: el.availability?.last_loan_date,
            availability: el.availability?.available_to_borrow
          })
        }
      })

      // Returning Data
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = BookController