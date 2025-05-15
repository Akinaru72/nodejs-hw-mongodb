// src/routers/contacts.js
import express, { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';

import { validateNewContact } from '../middlewares/validateContact.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

const jsonParser = express.json();

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.post(
  '/',
  jsonParser,
  validateNewContact,
  ctrlWrapper(createContactController),
);

contactsRouter.patch(
  '/:contactId',
  jsonParser,
  ctrlWrapper(patchContactController),
);

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
