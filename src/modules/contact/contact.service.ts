import { BASE_URL } from '../../lib/routes.lib';
import { IContactFormValue } from './contact.lib';

const baseUrl = `${BASE_URL}/api/personal`;

export const submitContactForm = async (value: IContactFormValue) => {
  try {
    return await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  } catch (error) {
    return (error as any).response;
  }
};
