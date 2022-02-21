const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  try {
    const kinds = await Kind.find();
    res.json({ kinds });
  } catch (error) {
    next(error);
  }
};

const getKind = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kind = await Kind.findById(id);
    if (kind) {
      res.json(kind);
      return;
    }
    const error = new Error("kind not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad id format or invalid id";
    error.code = 400;
    next(error);
  }
};

const createKind = async (req, res, next) => {
  const kind = req.body;
  try {
    const newKind = await Kind.create(kind);
    res.status(201);
    res.json(newKind);
  } catch (error) {
    error.message = "Bad request leand how to create a kind noob";
    error.code = 400;
    next(error);
  }
};

module.exports = { listKinds, getKind, createKind };
