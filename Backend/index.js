const express= require('express')
var cors = require('cors')
require("./connection")
const ProductModel=require("./models/product")

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello world')

})
app.get('/view',async(req,res)=>{
    var data=await ProductModel.find()
    res.send(data)
})

app.post('/add',(req,res) =>{
    ProductModel(req.body).save()
    res.send('data added')
})
app.delete('/remove/:id',async(req,res) =>{
    await ProductModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})
app.put('/edit/:id',async(req,res)=>{
    await ProductModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("data updated")
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})