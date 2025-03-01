import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectdb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRoutes from "../src/routes/users.routes.js"


//configurations
dotenv.config()
const app = express()

//Middlewares
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
}));

//Routes
app.use("/users",userRoutes)

//Running Backend
const port = process.env.PORT
connectDB()
app.listen(port,()=>{
    console.log("Backend is running:-"+port)
    
})