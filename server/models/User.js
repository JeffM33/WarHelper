const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  discord: {
    type: String
  },
  level: {
    type: Number,
    min: 1,
    max: 60,
    default: 1
  },
  main: {
    type: String
  },
  mainLvl: {
    type: Number,
    min: 1,
    max: 20
  },
  secondary: {
    type: String
  },
  secondaryLvl: {
    type: Number,
    min: 1,
    max: 20
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
