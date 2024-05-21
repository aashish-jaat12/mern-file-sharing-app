
const mongoose =  require ("mongoose")


 module.exports  =mongoose.connect('mongodb://127.0.0.1:27017/fileShair')
 .then(
    console.log("data base connected")
)
 .catch((e)=>console.log("data not connected"))