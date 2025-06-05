// src/utils/parseFilterParams.js
const validContactTypes = ['home', 'work', 'personal'];

const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  if (validContactTypes.includes(contactType)) return contactType;
  return undefined;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  const normalized = isFavourite.toLowerCase();

  if (normalized === 'true') return true;
  if (normalized === 'false') return false;

  return undefined;
};

export const parseFilterParams = (query) => {
  const filter = {};

  const parsedContactType = parseContactType(query.contactType);
  if (parsedContactType) {
    filter.contactType = parsedContactType;
  }

  const parsedIsFavourite = parseIsFavourite(query.isFavourite);
  if ('isFavourite' in query && parsedIsFavourite !== undefined) {
    filter.isFavourite = parsedIsFavourite;
  }

  return filter;
};
