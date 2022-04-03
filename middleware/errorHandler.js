
const ErrorHandler = (err, req, res, next) => {
  let status, message

  switch (err.name) {
    case 'NOT_FOUND':
      status = 404
      message = 'Not Found'
      break

    default:
      status = 500
      message = 'Internal Server Error'
  }
  res.status(status).json({
    message
  })   
  
  next()
}

module.exports = ErrorHandler