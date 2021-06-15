const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

//routes
app.use(require('./routes'));

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  
  res.locals.error = err;

  console.error(err);

  return res.status(err.status || 500).send({
    message: err.message,
    stack : err.stack
  });
});


server = require('http').createServer(app);

const port = process.env.PORT || '3000';

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
})

module.exports = app;

