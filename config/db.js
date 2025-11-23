// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1/wallet", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected To MongoDB"))
//   .catch((error) => console.log("error", error));
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://root:aqeiW4BhVe0REzf4CYcpdytG@wallet-api:27017/my-app?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected To MongoDB"))
  .catch((error) => console.log("error", error));
