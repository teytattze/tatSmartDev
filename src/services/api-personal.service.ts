import axios from 'axios';
import { IContactFormValue } from 'src/modules/personal/personal-contact.form';
import { BASE_URL } from 'src/shared/consts/config.const';

const baseUrl = `${BASE_URL}/api/personal`;

export const submitContactForm = async (value: IContactFormValue) => {
  try {
    return await axios.post(baseUrl, value);
  } catch (error) {
    return (error as any).response;
  }
};
