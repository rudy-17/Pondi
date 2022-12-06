const mongoose = require("mongoose");
const db = mongoose.connection
//configure mongoose
mongoose.connect(
  "mongodb+srv://rudy17:rudy17@cluster0.9jinf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

