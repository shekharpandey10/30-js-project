import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { dbConnect } from './database/dbconnection.js'
import appRouter from './routes/route.js'

const PORT = process.env.PORT || 8081
const DATABASE_NAME = process.env.DATABASE_NAME
const DATABASE_USERNAME = process.env.DATABASE_USERNAME
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
console.log(DATABASE_PASSWORD)
const app = express()
app.use(express.json())
app.use('/api', appRouter)




app.listen(PORT, () => {
    dbConnect(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD)
    console.log('server is running at ' + PORT)
})