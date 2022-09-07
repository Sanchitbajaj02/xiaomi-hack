const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURL = process.env.MONGO_URL;
// const mongoURL = 'mongodb+srv://agrwalnikhil100:T0xeanUc5eWuRDKF@cluster0.2xduk.mongodb.net/TC_prod?retryWrites=true&w=majority';

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoURL, connectionParams)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose;
