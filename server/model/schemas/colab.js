const mongoose = require("mongoose");
const { Schema } = mongoose;

const ColabSchema = new Schema({
  nome: {
    type: String,
    required: [true, "informe Nome"],
    minlength: 3,
    unique: false,
  },
  idade: {
    type: Number,
    minlength: 1,
    unique: false,
  },
  Cargo: {
    type: String,
    minlength: 1,
    unique: false,
  },
  email: {
    type: String,
    minlength: 3,
    unique: true,
  },
  formacao: {
    type: String,
    minlength: 1,
    unique: false,
  },
  certificacao: {
    type: String,
    minlength: 1,
    unique: false,
  },
  rpps: {
    type: String,
    minlength: 1,
    unique: false,
  },
});

const Colab = mongoose.model("colab", ColabSchema);
module.exports = Colab;
