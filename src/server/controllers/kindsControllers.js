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

const updatekind = async (req, res, next) => {
  const newKind = req.body;
  const { id } = req.params;
  try {
    const updatedKind = await Kind.replaceOne({ _id: id }, newKind, {
      runValidators: true,
    });

    if (updatedKind.modifiedCount === 0) {
      const error = new Error("Update kind error");
      error.code = 400;
      next(error);
      return;
    }
    res.json(newKind);
  } catch (error) {
    error.code = 400;
    error.message = "Bad request at updating kind";
    next(error);
  }
};

const deleteKind = async (res, req, next) => {
  const { id } = req.params;
  try {
    const deletedKind = await Kind.findByIdAndDelete(id);
    if (deletedKind) {
      res.json(deletedKind.id);
      return;
    }
    const error = new Error("ID or kind not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad request triying to delete kind";
    error.code = 400;
    next(error);
  }
};

module.exports = { listKinds, getKind, createKind, updatekind, deleteKind };
