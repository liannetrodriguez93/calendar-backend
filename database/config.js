const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_CN);
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error on DB");
  }
};

module.exports = {
  dbConection,
};
