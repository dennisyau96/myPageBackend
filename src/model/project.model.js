const mongoose = require("mongoose");
const schema = mongoose.Schema;
const projectSchema = new schema({
  Name: { type: String, required: true },
  Type: { type: String },
  Website: { type: String, required: true },
  Role: { type: String, required: true },
  Remarks: { type: String, require: false },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
