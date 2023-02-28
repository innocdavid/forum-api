import express from "express";
import cors from "cors";
import colors from "colors";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();


// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// HOME ROUTE
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

// SERVER
app.listen(process.env.PORT, () => { console.log(`Server listening on ${process.env.HOSTNAME}:${process.env.PORT}`.yellow) })