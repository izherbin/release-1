const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Niches = new Schema({
    name            : String,
    lexeme_1        : ObjectId,
});
module.exports = mongoose.model('niches', Niches);
