const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
});

// categorySchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject.__v;
//     delete returnedObject.__id;
//   },
// });

module.exports = mongoose.model("category", categorySchema);
