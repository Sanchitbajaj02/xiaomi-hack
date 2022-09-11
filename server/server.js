const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

require("./app/config/db.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
// });

const operatorRouter = require("./app/routes/operator.routes");
const productRouter = require("./app/routes/product.routes");

app.use("/api/operator", operatorRouter);
app.use("/api/product", productRouter);

app.use("*", (req, res) => {
  res.status(401).json({
    message: "Welcome to Xiaomi Hackathon",
  });
});

module.exports = app;
