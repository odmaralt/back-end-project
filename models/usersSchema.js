const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [6, "First name length must be at least 6 characters"],
    maxLength: [50, "First name length must be 6 to 50 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    maxlength: [50, "Last name length must be 6 to 50 characters"],
  },
  gender: {
    type: String,
    enum: { values: ["Male", "Female"], message: "{VALUE} is not supported" },
  },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: true },
  phone: String,
  picture: String,
  dateOfBirth: Date,
  registerDate: { type: Date, default: Date.now },
});

UserSchema.path("lastName").validate((lastName) => {
  return lastName.length >= 5;
}, "Lastname length must be at least 6 characters");


const UserModel = model("User", UserSchema);

module.exports = UserModel;
