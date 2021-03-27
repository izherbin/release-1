import mongoose from 'mongoose';

const { Schema } = mongoose;

const Regions = new Schema({
  name: String,
  country: String,
});

export const regions = mongoose.model('regions', Regions);
