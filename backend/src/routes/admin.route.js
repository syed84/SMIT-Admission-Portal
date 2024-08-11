const express = require("express");
const { Getuser, deletUser } = require("../controllers/admin.controller");
const router = express.Router();
router.post("/getallusers", Getuser);
router.post("/delete", deletUser);

module.exports = router;