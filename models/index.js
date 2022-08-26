const mongoose = require("mongoose")

const PointSchema = mongoose.Schema({
    title: String,
    organizer: String,
    description: String,
    address: {
        street: String,
        localNumber: Number,
        complement: String,
        district: String,
        city: String,
        state: String
    },
    day: String,
    hour: String
})

const Point = mongoose.model("Points", PointSchema)

module.exports = Point