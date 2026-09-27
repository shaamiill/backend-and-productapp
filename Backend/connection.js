const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shamilmuhmad_db_user:shamil@cluster0.dbcv8i5.mongodb.net/?appName=Cluster0")
.then(()=> {
    console.log("db connected")
})
.catch((err) =>{
    console.log(err)
})