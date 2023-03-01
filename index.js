const express = require("express");
const { dbConection } = require("./database/config");
require("dotenv").config();

//Create express server
const app = express();

//Database
dbConection()

//Public Directory
app.use(express.static("public"));

//Parse and read body
app.use(express.json());

//Auth routes
app.use("/api/auth", require("./routes/auth"));

//Listen request
app.listen(process.env.PORT, () => {
  console.log("servidor corriendo en puesto: ", process.env.PORT);
});
