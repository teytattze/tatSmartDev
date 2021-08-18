import { SendMailOptions } from 'nodemailer';

export const createContactFormTemplate = (html: string) => {
  const template: SendMailOptions = {
    from: `\"${process.env.NODEMAILER_USER}\" <${process.env.NODEMAILER_MAIL}>`,
    to: process.env.NODEMAILER_MAIL,
    subject: 'Portfolio Contact Me',
    html,
  };
  return template;
};
