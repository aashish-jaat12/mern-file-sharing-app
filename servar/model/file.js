const mongoose = require('mongoose')

const subschema= new  mongoose.Schema({

path:{
    type: String,
    require: true
},
name:{
    type: String,
    require: true
},
downlode:{
    type: Number,
    require: true
}

})

module.exports = mongoose.model("file" , subschema)