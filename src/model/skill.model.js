const mongoose = require("mongoose");
const schema = mongoose.Schema;
const skillSchema = new schema({
  title: { type: String },
  since: { type: String },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
