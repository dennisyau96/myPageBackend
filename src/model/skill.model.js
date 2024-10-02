const mongoose = require("mongoose");
const schema = mongoose.Schema;
const skillSchema = new schema({
  title: { type: String },
  since: { type: String },
  remark: { type: Array },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
