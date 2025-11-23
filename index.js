const express = require("express");      
const morgan = require("morgan");
const bodyParser = require("body-parser"); 

require("dotenv").config();
const connectDB = require("./config/db");

const app = express();


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


app.use("/api/category", require("./src/routes/categoryRouter"));
app.use("/api/transaction", require("./src/routes/transactionRouter"));
app.use("/api/auth", require("./src/routes/authRouter"));


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});