const contactControllers = {
  create: (req, res) => {
    res.send({ message: "Create handler" });
  },
  findAll: (req, res) => {
    res.send({ message: "FindAll handler" });
  },
  findOne: (req, res) => {
    res.send({ message: "FindOne handler" });
  },
  update: (req, res) => {
    res.send({ message: "Update handler" });
  },
  delete: (req, res) => {
    res.send({ message: "Delete handler" });
  },
  deleteAll: (req, res) => {
    res.send({ message: "DeleteAll handler" });
  },
  findAllFavorite: (req, res) => {
    res.send({ message: "FindAllFavorite handler" });
  },
};

module.exports = { contactControllers };
