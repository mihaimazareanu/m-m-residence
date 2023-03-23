import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  partner: {
    type: String,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
  },

  isGuest: {
    type: Boolean,
  },
});

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema, "users");
