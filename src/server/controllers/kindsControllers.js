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
  } catch (error) {
    next(error);
  }
};

module.exports = { listKinds };
