import express from  'express' 
import cors from 'cors'
import dotenv from 'dotenv';
import dbConfig from './DB/dbConfig.js';
import coursesRoute from './Routes/courses.route.js'
dotenv.config()
const app=express()

app.use(express.json())
app.use(cors())

dbConfig()

app.use("/courses", coursesRoute)

app.get('/',(req,res)=>{
    res.send('Checking Home Route')
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('Server is running on port '+process.env.PORT||5000);
})