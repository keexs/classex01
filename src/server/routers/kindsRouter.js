const express = require("express");
const { listKinds, getKind } = require("../controllers/kindsControllers");

const router = express.Router();

router.get("/list", listKinds);
router.get("/kind/:id", getKind);

module.exports = router;
