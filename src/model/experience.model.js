const mongoose = require("mongoose");
const schema = mongoose.Schema;
const experienceSchema = new schema({
  position: { type: String },
  organization: { type: String },
  period: { type: String },
  description: { type: Array },
  location: { type: String },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
