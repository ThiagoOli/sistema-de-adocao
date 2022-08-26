const express = require("express")
const router = express.Router()
const Point = require("../models")

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/pontosdeadocao", async (req, res) => {
    if (req.query.query) {
        const queryData = await Point.find({ "address.city": req.query.query })
        res.render("points", { points: queryData })
    } else {
        const data = await Point.find()
        res.render("points", { points: data })
    }
})

router.route("/cadastro")
    .get((req, res) => {
        res.render("registration")
    })
    .post(async (req, res) => {
        let { title, organizer, description, street, localNumber, complement,
            district, city, state, day, hour } = req.body
        day = day.split("-").reverse().join("/")
        const reg = {
            title,
            organizer,
            description,
            address: {
                street, localNumber, complement,
                district, city, state
            },
            day,
            hour
        }

        try {
            await Point.create(reg)
            setTimeout(() => { res.redirect("/cadastro") }, 2000)
        } catch (err) {
            console.log("Erro:", err)
        }
    })


module.exports = router