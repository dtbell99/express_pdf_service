var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var pdf = require('html-pdf');

//app.use(logger('dev'));
app.use(bodyParser.text());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.post("/pdf", (request, response) => {
  var html = request.body
  console.log("request.body:" + request.body)

  var config = {
    "border": {
      "top": ".5in",
      "right": ".5in",
      "bottom": ".5in",
      "left": ".5in"
    },
    "footer": {
      "height": "15mm",
      "contents": {
        default: '<span style="color: #444;">Page {{page}}</span>/<span>{{pages}}</span>'
      }
    },
  }

  pdf.create(html, config).toStream(function (err, stream) {
    stream.pipe(response);
  });
})

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
