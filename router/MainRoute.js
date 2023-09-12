const { category, completeData, idvalues } = require("../Controller/Controller");

const route = require("express").Router();

route.get("/api", completeData)
route.get("/api/:category" , category )
route.get("/api/value/:id", idvalues)

module.exports = route