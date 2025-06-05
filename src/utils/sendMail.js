// src/utils/sendMail.js

import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';
import { getEnvVar } from '../utils/getEnvVar.js';

// import { validateSmtpConfig } from './validateSmtpConfig.js';

// const { host, port, user, pass } = validateSmtpConfig();

// const transporter = nodemailer.createTransport({
//   host,
//   port,
//   secure: port === 465,
//   auth: {
//     user,
//     pass,
//   },
// });

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: Number(getEnvVar(SMTP.SMTP_PORT)),
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
