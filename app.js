const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Routes = require("./routes")
const ejs = require("ejs")
const cron = require("node-cron")

const dataControl = require("./DB/dataControl")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static(__dirname + "/public"))

app.use(Routes)

cron.schedule("0 0 1 * * *", () => {
    dataControl()
})

mongoose.connect("mongodb://localhost:27017/pontosDeAdocao")
.then(() => {
    console.log("Connected to Database")
    app.listen(3000, () => console.log("Server Running"))
}).catch(err => console.log("Erro:", err))