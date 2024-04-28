const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema, updateContactSchema } = require("../../schemas/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

const validateMiddleware = validation(contactSchema);
const validateUpdateMiddleware = validation(updateContactSchema);

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  validateUpdateMiddleware,
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
