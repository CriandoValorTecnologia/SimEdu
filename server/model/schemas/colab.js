const mongoose = require("mongoose");
const { Schema } = mongoose;

const ColabSchema = new Schema({
  nome: {
    type: String,
    required: [true, "informe Nome"],
    minlength: 3,
    unique: false,
  },
  cargo: {
    type: String,
    minlength: 1,
    unique: false,
  },
  certificacao: {
    type: String,
    unique: false,
  },
  formacao: {
    type: String,
    minlength: 1,
    unique: false,
  },
  rpps: {
    type: String,
    minlength: 1,
    unique: false,
  }
});

const Colab = mongoose.model("colab", ColabSchema);
module.exports = Colab;
