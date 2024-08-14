const mongoose = require("mongoose");
const schema = mongoose.Schema;
const projectSchema = new schema({
  name: { type: String, required: true },
  type: { type: String },
  website: { type: String, required: true },
  role: { type: String, required: true },
  remarks: { type: String, require: false },
  thumbnail: { type: String, required: false },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
