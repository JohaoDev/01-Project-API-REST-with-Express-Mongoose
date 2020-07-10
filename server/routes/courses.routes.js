const express = require("express");

let api = express.Router(),
  courseController = require("../controllers/courses.controller");

//users ENDPOINT
api.get("/courses", courseController.get);
api.get("/course/:_id", courseController.getByID);

api.post("/course", courseController.post);

api.patch("/course/:_id", courseController.patch);

api.delete("/course/:_id", courseController.deleteOne);

module.exports = api;
