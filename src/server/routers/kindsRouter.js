const express = require("express");
const { listKinds } = require("../controllers/kindsControllers");

const router = express.Router();

router.get("/list", listKinds);

module.exports = router;
