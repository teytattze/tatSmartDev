import { RegisterOptions } from 'react-hook-form';

export enum ResponseStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
}

export interface IContactFormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const formValidation: Record<
  IContactFormValue['name' | 'email' | 'subject' | 'message'],
  RegisterOptions
> = {
  name: {
    required: 'This field is required',
    minLength: {
      value: 2,
      message: 'The minimum characters is 2',
    },
    maxLength: {
      value: 50,
      message: 'The maximum characters is 50',
    },
  },
  email: {
    required: 'This field is required',
    minLength: {
      value: 2,
      message: 'The minimum characters is 2',
    },
    maxLength: {
      value: 50,
      message: 'The maximum characters is 50',
    },
    pattern: {
      value: emailReg,
      message: 'Invalid email address',
    },
  },
  subject: {
    required: 'This field is required',
    minLength: {
      value: 2,
      message: 'The minimum characters is 2',
    },
    maxLength: {
      value: 50,
      message: 'The maximum characters is 50',
    },
  },
  message: {
    required: 'This field is required',
    minLength: {
      value: 10,
      message: 'The minimum characters is 10',
    },
    maxLength: {
      value: 1000,
      message: 'The maximum characters is 1000',
    },
  },
};
