import { NextApiRequest, NextApiResponse } from 'next';
import { allowCors } from '../../lib/allow-cors.middleware';
import { createContactFormTemplate, sendMail } from '../../modules/mail';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    const contactFormTemplate = `
      <div>
        <h3>Client Details: </h3>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Email: ${data.email}</li>
          <li>Subject: ${data.subject}</li>
        </ul>
        <h3>Message: </h3>
        <p>${data.message}</p>
      </div>
    `;

    try {
      const template = createContactFormTemplate(contactFormTemplate);
      await sendMail(template);
      res.status(200).json({
        message:
          'The form has been submitted successfully. Usually, you will get a replied within 24 hours.',
      });
    } catch (err) {
      res.status(400).json({
        message:
          'Failed to submit the form. Please use another method to contact me.',
      });
    }
  }
}

export default allowCors(handler);
