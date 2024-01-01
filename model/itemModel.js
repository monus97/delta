const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  title: { type: String },
  description : {
    type: String,
  },
  
});
itemSchema.set("timestamps", true);
module.exports = mongoose.model("item", itemSchema);
