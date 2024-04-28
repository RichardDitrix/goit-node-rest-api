const createError = require("http-errors");
const contactsOperations = require("../../models/contacts");

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const isBodyEmpty = Object.keys(req.body).length === 0;

  if (isBodyEmpty) {
    throw createError(400, "Body must have at least one field");
  }

  const updatedContact = await contactsOperations.updateContact(
    contactId,
    req.body
  );

  if (!updatedContact) throw createError(404, "Not found");

  res.json(updatedContact);
};

module.exports = updateById;
