const express = require("express");

let api = express.Router(),
  roleController = require("../controllers/roles.controller");

//users ENDPOINT
api.get("/roles", roleController.get);
api.get("/role/:_id", roleController.getByID);

api.post("/role", roleController.post);

api.patch("/role/:_id", roleController.patch);

api.delete("/role/:_id", roleController.deleteOne);

module.exports = api;
