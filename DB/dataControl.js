const Point = require("../models")

async function deleteEvent(event) {
    await Point.deleteMany({ day: event.day })
}

async function dataControl() {
    const currDate = new Date()
    const points = await Point.find()
    points.forEach(event => {
        let regDate = event.day.split("/").reverse().join("-")
        regDate = new Date(regDate)
        
        if(regDate < currDate) {
            deleteEvent(event)
        }
    })
}

module.exports = dataControl