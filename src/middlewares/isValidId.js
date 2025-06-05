import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  console.log(req.params.contactId);
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(createHttpError.BadRequest('ID should be an Object'));
  }
  next();
};
