var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var flash = require("express-flash");
var session = require("express-session");
var db = require("./database");

/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/
var app = express();
const port = 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
*/
// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  next(createError(404));
});
*/

app.use(
  session({
    secret: "123456catr",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(flash());

/* GET home page. */
app.get("", (req, res) => {
  res.render(
    "C:/Users/Selma/Desktop/Selma/semestar 5/web application development/FORUM - PROJECT 6/views/index.ejs",
    { title: "contact-Us" }
  ); //ovdje mijenjam sa /views/index.ejs u index.html
});

app.post("/contact-us", (req, res) => {
  var user_name = req.body.user_name;
  var user_pass = req.body.user_pass;
  var user_email = req.body.user_email;

  var sql = `INSERT INTO users (user_name, user_pass, user_email) VALUES ("${user_name}", "${user_pass}","${user_email}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
    req.flash("success", "Data added successfully!");
    res.redirect("/");
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");

  /* app.listen(3000, ()=>{
   console.log('node app is running at 8080')
 }) */
});

app.listen(port, () => console.info(`App listening on port ${port}`));

/*module.exports = app;*/
