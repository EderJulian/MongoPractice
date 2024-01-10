const express = require("express");

const app = express();

const PORT = 3000;

const { dbConnection } = require("C:\Users\Usuario\Documents\Desarrollo Web Eder\MongoTrain\MongoPractice\config\config.js")

app.use(express.json())

dbConnection()

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));