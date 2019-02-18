const nodemailer = require('nodemailer');
require("dotenv").config();
const db = require("../models");

// Defining methods for the OrdersController
module.exports = {
  createOrder: function (req, res) {
    let id = req.body._id;
    const productData = [];
    for (let i = 0; i< req.body.data.length;i++) {
      productData.push({
        productQuantity: req.body.data[i].productQuantity,
        product: req.body.data[i]._id
      })
    }

    db.Order.create({ "ordered": true })
      .then(function (newOrder) {
        orderId = newOrder._id;
        db.Order.updateOne(
          {
            "_id": newOrder._id
          },
          {
            $push: {
              user: id,
              products: productData
            },//define user
          },
        )//return
          .then(function (dataUpdate) {
            res.json(newOrder._id);
          })
      });//orderCreate thenable
  },//createOrder function

  populateOrder: function (req, res) {
    let orderId = req.params.id;
    db.Order.find({ "_id": orderId })
      // Specify that we want to populate the retrieved orders with any associated users and products
      .populate("user")
      .populate("products.product")
      .then(function (data) {
        if (data.length > 0) {
    // ***********
    // Send Email
    // ***********
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'parts02purpose@gmail.com',
        pass: process.env.gmailPassword
      }
    });
    const mailOptions = {
      from: 'parts02purpose@gmail.com',
      to: `${data[0].user.email}, tony.lockhart@ymail.com, nathan.kloer@gmail.com`,
      subject: `Your Recent Order ID#: ${data[0]._id}`,
      // text:`Thank you, ${data[0].user.firstName}, for your order request!\n\nYour Order ID is: ${data[0]._id} and has been submitted.\n\nSomeone from the organization will be in touch with you to schedule an appointment.\n\nThank you for using Parts-to-Purpose, and we hope that you will be able to put these parts to good purpose!`,
      text:'',
      html:`<p>Hello ${data[0].user.firstName},<br/><br/>Thank you for demoing the Parts-2-Purpose app at the Georgia Tech Bootcamp Demo Day.<br/><br/>If you are interested in viewing more of our work, please see our individual project portfolios.</p><ol><li><a href="https://tlockhart.github.io/portfolio/">Tony Lockhart Portfolio</a></li><li><a href="https://nathankloer.github.io/MyPortfolio/">Nathan Kloer Portfolio</a></li></ul>`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
          res.json(data);
        }
        else {
          console.log("No Orders Found");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
