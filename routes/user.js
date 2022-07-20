const { User } = require("../models/user.js");
const express = require("express");

const {
  getuser,
  createnewuser,
  updateuser,
  deleteuser,
} = require("../controllers/usercontroller");
const router = express.Router();

router.get("/select", getuser);
router.post("/insert", createnewuser);
router.put("/update/:id", updateuser);
router.delete("/delete/:id", deleteuser);

module.exports=router;