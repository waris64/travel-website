import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import aiRoutes from './routes/aiRoutes.js'

dotenv.config();
const app = express()
const PORT = 5000;

app.use(
  cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    allowedHeaders:["Content-Type"],
  })
);
app.use(bodyParser.json());

app.use('/api/ai',aiRoutes)
app.get('/',(req,res)=>{
  res.send("Backend is working . ")
})
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
