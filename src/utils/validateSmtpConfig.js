// src/utils/validateSmtpConfig.js

import { SMTP } from '../constants/index.js';
import { getEnvVar } from './getEnvVar.js';

export const validateSmtpConfig = () => {
  const errors = [];

  const host = getEnvVar(SMTP.SMTP_HOST);
  if (!host) errors.push(`${SMTP.SMTP_HOST} is missing`);

  const portStr = getEnvVar(SMTP.SMTP_PORT);
  const port = Number(portStr);
  if (!portStr) {
    errors.push(`${SMTP.SMTP_PORT} is missing`);
  } else if (isNaN(port) || port <= 0) {
    errors.push(`${SMTP.SMTP_PORT} is not a valid number`);
  }

  const user = getEnvVar(SMTP.SMTP_USER);
  if (!user) errors.push(`${SMTP.SMTP_USER} is missing`);

  const pass = getEnvVar(SMTP.SMTP_PASSWORD);
  if (!pass) errors.push(`${SMTP.SMTP_PASSWORD} is missing`);

  if (errors.length > 0) {
    throw new Error(`SMTP config validation failed:\n- ${errors.join('\n- ')}`);
  }

  return { host, port, user, pass };
};
