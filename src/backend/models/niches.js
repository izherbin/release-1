import mongoose from 'mongoose';
import ObjectId from 'mongodb';

const { Schema } = mongoose;

const Niches = new Schema({
  name: String,
  lexeme_1: ObjectId,
});

export const niches = mongoose.model('niches', Niches);
