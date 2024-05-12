const express=require('express')
const errorHandler = require('./middleware/errorhandler')
const app=express()
require('./db/conn')
const PORT=1000

app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log("Server Running on Port 1000");
})