const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Regions = new Schema({
  name: String,
  country: String,
});
module.exports = mongoose.model('regions', Regions);
