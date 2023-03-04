const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConection } = require("./database/config");

//Create express server
const app = express();

//Database
dbConection();

//CORS
app.use(cors());

//Public Directory
app.use(express.static("public"));

//Parse and read body
app.use(express.json());

//Auth routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Listen request
app.listen(process.env.PORT, () => {
  console.log("servidor corriendo en puesto: ", process.env.PORT);
});
