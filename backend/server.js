import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config();


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDb();
app.get("/", (req, res) => {
    res.send("API Working")
})

//api-endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port} `)
})

//mongodb://fooduser:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-643ct3-shard-

//mongodb://fooduser:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-643ct3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

