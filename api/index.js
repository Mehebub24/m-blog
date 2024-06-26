import express from 'express'
import mongoose from 'mongoose' 
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() =>{
            console.log('Mongodb is conneted');
        })
    .catch(
    (err)=>{
        console.log(err);
    }
)

const app = express();

// middleware functions.that have access to the request object (req), the response object (res)
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/api/user',userRoutes);
app.use('/api/auth', authRoute);

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode||500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});