const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username must be unique!'],
      unique: true,
    },
    password: {
      type: String,
    }
  }
);

module.exports = model('User', userSchema);
