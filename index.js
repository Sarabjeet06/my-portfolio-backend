import express from "express";
import bodyParser from "body-parser";
import formRoutes from "./src/routes/formRoutes.js";
import cors from "cors";

const port=3001;
const app = express();

app.use(bodyParser.json());

var corsOptions= {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use("/submit-form", formRoutes);

app.listen(port, ()=>{
    console.log(`server running on port ${port}.`)
});