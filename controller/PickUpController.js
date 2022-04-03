// Dependencies
const { getSubjects } = require('../api/OpenLibrarry')

class PickUpController{
  static async bookPickUp (req, res, next) {
    try {
      const {
        title,
        pickup_date,
        name
      } = req.body

      // Get data from REST
      const resSubject = await getSubjects.get(`programming.json?limit=100`)
      const works = resSubject.data.works

      // Object Data
      const result = {
        pickup_time: new Date(pickup_date),
        name
      }
      let found = false
      works.forEach(el => {
        if (
          el.availability?.available_to_borrow &&
          el.availability?.available_to_borrow !== false &&
          el.availability?.available_to_borrow !== undefined
        ) {
          if ( el.title === title ) {
            found = true  
            result.title = el?.title
            result.authors = el?.authors
            result.edition = el?.edition_count
          } 
        }
      })

      if (found) res.status(200).json(result)
      else throw {name: 'NOT_FOUND'}
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PickUpController