const mongoose = require('mongoose')

const connect_db=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to DB");
}
module.exports = connect_db