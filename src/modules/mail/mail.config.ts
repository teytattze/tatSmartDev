import nodemailer, { SendMailOptions } from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

export const createTransport = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_REDIRECT_URL,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token :(');
      }
      resolve(token);
    });
  });

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.NODEMAILER_MAIL,
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken as string,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

export const sendMail = async (options: SendMailOptions) => {
  let transporter = await createTransport();
  await transporter.sendMail({ ...options });
};
