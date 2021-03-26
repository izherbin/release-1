const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Lexemes = new Schema({
  name: String,
  wordforms: mongoose.ObjectId,
});
module.exports = mongoose.model('lexemes', Lexemes);
