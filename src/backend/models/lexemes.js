import mongoose from 'mongoose';

const { Schema } = mongoose;

const Lexemes = new Schema({
  name: String,
  wordforms: mongoose.ObjectId,
});

export const lexemes = mongoose.model('lexemes', Lexemes);
