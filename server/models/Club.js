const { Schema, model } = require("mongoose");

const clubSchema = new Schema({
  clubName: {
    type: String,
    required: true,
  },
  clubAddress: {
    type: String,
  },
  clubAddress2: {
    type: String,
  },
  clubCity: {
    type: String,
    required: true,
  },
  clubState: {
    type: String,
    required: true,
  },
  clubCountry: {
    type: String,
    required: true,
  },
  clubZip: {
    type: String,
  },
  instructors: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Club = model("Club", clubSchema);

module.exports = Club;
