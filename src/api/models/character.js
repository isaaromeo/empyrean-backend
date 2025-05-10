const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    location: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    dragon: [{ type: String, required: false, trim: true }],
    gryphon: [{ type: String, required: false, trim: true }],
    occupation: [{ type: String, required: true, trim: true }],
    status: { type: String, trim: true, required: true },
    bio: [{ type: String, required: true, trim: true }],
    signet: [{ type: Object, required: true, trim: true }],
    quotes: [{ type: Object, required: true, trim: true }],
    image_url: { type: String, trim: true, required: true },
    appearances: [{ type: String, required: true, trim: true }],
    realtionships: [{ type: Object, required: true, trim: true }],
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("characters", characterSchema, "characters");
module.exports = Character;