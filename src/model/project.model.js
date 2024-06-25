const mongoose = require("mongoose");
const schema = mongoose.Schema;
const projectSchema = new schema({
  title: { type: String, required: true },
  period: { type: Date, required: true },
  member: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
