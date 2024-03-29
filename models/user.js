const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
  required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  school: { type: String, required: false },
  district: { type: String, required: false },
  course: { type: String, required: false },
  //I want to see a user's orders when a query a user _id
  order:[
    {
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Order model
      ref: "Order"
    }
  ],
  isAdmin: { type: Boolean, required: true, default: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
