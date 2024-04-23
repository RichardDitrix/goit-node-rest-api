const express = require("express");

const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validation(schemas.addContactSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.addContactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
