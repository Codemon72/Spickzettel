// simple example for a middleware function:
const logger = (req, res, next) => {
  console.log('Testing');
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next(); 
};

module.exports = logger;