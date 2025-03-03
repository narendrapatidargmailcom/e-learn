const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/eLearn")
        .then(() => console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("DB Connection Failed");
            console.error(error);
            process.exit(1);
        })
};
