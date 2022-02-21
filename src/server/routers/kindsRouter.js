const express = require("express");
const {
  listKinds,
  getKind,
  createKind,
  updatekind,
} = require("../controllers/kindsControllers");

const router = express.Router();

router.get("/list", listKinds);
router.get("/kind/:id", getKind);
router.post("/new-kind", createKind);
router.put("/kind/:id", updatekind);

module.exports = router;
