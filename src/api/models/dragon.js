const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dragonSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    location: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    tail: { type: String, required: true, trim: true },
    bonded_rider: { type: String, required: true, trim: true },
    name_meaning: { type: String, required: true, trim: true },
    status: { type: String, trim: true, required: true },
    bio: [{ type: String, required: true, trim: true }],
    image_url: { type: String, trim: true, required: true },
    quotes: [{ type: Object, required: true, trim: true }],
    appearances: [{ type: String, required: true, trim: true }],
    realtionships: [{ type: Object, required: true, trim: true }],
  },
  {
    timestamps: true,
  }
);

const Dragon = mongoose.model('dragons', dragonSchema, 'dragons');
module.exports = Dragon;