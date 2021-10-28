import { IContactFormValue } from './contact.lib';
import { BASE_URL } from '../../shared/consts/config.const';

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
