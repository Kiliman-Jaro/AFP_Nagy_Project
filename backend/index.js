import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import db from "./db.js"


const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(5000, () => console.log(`Server started on port: 5000`))