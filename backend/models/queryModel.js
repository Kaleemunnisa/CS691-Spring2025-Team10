const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
  query: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Query", QuerySchema);
