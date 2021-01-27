const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name:  String, // String is shorthand for {type: String}
    password: String
 
})

module.exports = schema