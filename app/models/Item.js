const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  regiao: {
    type: String,
    required: true
  },
  idade: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
