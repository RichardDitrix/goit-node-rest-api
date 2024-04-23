const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === String(contactId));
  return contact ?? null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === String(contactId));
  if (idx === -1) return null;

  const [removedContact] = contacts.splice(idx, 1);
  updateContacts(contacts);
  return removedContact;
}

async function addContact(body) {
  const { name, email, phone } = body;

  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };

  contacts.push(newContact);
  updateContacts(contacts);
  return newContact;
}

async function updateContact(contactId, body) {
  const { name, email, phone } = body;

  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === String(contactId));
  if (idx === -1) return null;

  const updatedContact = { id: contactId, name, email, phone };
  contacts[idx] = updatedContact;
  updateContacts(contacts);

  return updatedContact;
}

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
