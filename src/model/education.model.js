const mongoose = require("mongoose");
const schema = mongoose.Schema;
const educationSchema = new schema({
  title: { type: String },
  institution: { type: String },
  education_level: { type: String },
  major: { type: String },
  honor: { type: String },
  majorGPA: { type: String },
  cummulativeGPA: { type: String },
  location: { type: String },
  year: { type: String },
  acheivement: { type: String },
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
