require('dotenv').config();
const express = require("express");
const { endsWith } = require('lodash');
const app = express();
const db = require('./config/db')
const categoryRoutes = require('./routes/categoryRoutes')




const PORT =  process.env.PORT || 3000;




app.listen(PORT , ()=>{
  console.log(`Server is running on port ${PORT}`);
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/categories', categoryRoutes)

app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello")
    
})