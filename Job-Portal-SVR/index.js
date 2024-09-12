import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './utils/Db.js';
import  userRoutes from './routes/user.route.js';
import companyRoutes from "./routes/company.route.js";
import JobRoutes from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({})

const app = express();


// app.get('/home',(req, res)=>{
//     return res.status(200).json({
//         massage : 'im comming from backend',
//         success : true
//     })
// })
// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:5173',  // Corrected URL
    credentials: true  // Lowercase 'credentials'
};

// Apply CORS middleware with the correct options
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

// API'S

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/company",companyRoutes);
app.use("/api/v1/Job",JobRoutes);
app.use("api/v1/Application", applicationRoute);


app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`);
});
