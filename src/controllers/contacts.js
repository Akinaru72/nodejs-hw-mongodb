// src/controllers/contacts.js
import createHttpError from 'http-errors';
import mongoose from 'mongoose';

import {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsController = async (req, res, next) => {
  console.log(req.user);
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user.id,
  });
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: {
      data: contacts.data,
      page: contacts.page,
      perPage: contacts.perPage,
      totalItems: contacts.totalItems,
      totalPages: contacts.totalPages,
      hasPreviousPage: contacts.hasPreviousPage,
      hasNextPage: contacts.hasNextPage,
    },
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    throw createHttpError(400, 'Invalid contact ID');
  }
  const contact = await getContactById(contactId, req.user.id);

  if (contact === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContact({ ...req.body, userId: req.user.id });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    throw createHttpError(400, 'Invalid contact ID');
  }

  const result = await updateContact(contactId, req.user.id, req.body);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};

export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId, req.user.id);

  if (contact === null) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.sendStatus(204);
};
