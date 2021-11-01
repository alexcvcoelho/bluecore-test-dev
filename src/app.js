const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(expressLayouts);

app.set("layout", "./layouts/default");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(require('./routes'));

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

