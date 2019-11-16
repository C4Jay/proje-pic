const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Tik = new Schema({
    mail: {
      type: String
    },
    img: {
      type: String
    }
  },{
      collection: 'tiks1'
  });

module.exports = mongoose.model('Tik',Tik);