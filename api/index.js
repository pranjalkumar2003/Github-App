import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";

dotenv.config();

const app = express();
app.use(cors());

app.get("/",(req, res) => {
    res.send({"message":"server is fetching the data"});
});

app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

app.listen(5000,()=>{
    console.log(new Date(Date.now()).toLocaleString().split(',')[1] + " || Server is running on port 5000 !!");
});