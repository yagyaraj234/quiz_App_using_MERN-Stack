import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router/route.js";
import { config } from "dotenv";

// import Connection Files
import connect from "./database/conn.js";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();
// application port

const port = process.env.PORT || 8000;

connect();
// Routes

app.use("/api", router); // For APis

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

// Start server when we have valid server

connect()
  .then(() => {
    try {
        app.listen(port,()=>{
            console.log(`Server connnected to ${port}`); 
        })
    } catch (error) {
        console.log("Cannot connect to valid server")
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
