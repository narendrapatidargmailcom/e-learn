const Razorpay = require("razorpay");
require("dotenv").config();


exports.instance = new Razorpay({
    // key_id: process.env.RAZORPAY_KEY,
    // key_secret: process.env.RAZORPAY_SECREAT,
      key_id:"rzp_test_DA8ZbP5OQnNy7j",
     key_secret: "EGoxmcTe1SahBTaZP3cknCnk",
});