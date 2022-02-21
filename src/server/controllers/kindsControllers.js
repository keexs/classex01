const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  try {
    const kinds = await Kind.find();
    res.json({ kinds });
  } catch (error) {
    next(error);
  }
};

module.exports = { listKinds };
