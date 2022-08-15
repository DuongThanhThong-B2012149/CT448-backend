const { contactControllers } = require("../controllers/contact.controller");

const router = require("express").Router();

router
  .route("/")
  .get(contactControllers.findAll)
  .post(contactControllers.create)
  .delete(contactControllers.deleteAll);
router.route("/favorite").get();
router.route("/:id").get().put().delete();

module.exports = router;
