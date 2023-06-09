const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = mongoose.Schema({

    name: {
    type: String,
    required: [true, "Please Include your name"]
      },

    email: {
    type: String,
    required: [true, "Please Include your email"]
      },

    password: {
    type: String,
    required: [true, "Please Include your password"]
      },

    phonenumber: {
    type: String,
    required: [true, "Please Include your phonenumber"]
      },

    birthdate: {
    type: String,
    required: [true, "Please Include your birthdate"]
      },

    country: {
    type: String,
    required: [true, "Please Include your country"]
      },

    Role:{
      type:String,
      default:"Client"
    },
     Price:{
      type:String,
    },
    tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
      ],
       files: {
        type: Array
      },
  });


//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});


//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, phonenumber: user.phonenumber, birthdate: user.birthdate, country: user.country, Role: user.Role, files: user.files},
  "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};



//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
