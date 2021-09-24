import * as React from 'react';
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/solid';
import {
  PERSONAL_EMAIL,
  PERSONAL_FULLNAME,
  PERSONAL_LOCATION,
  PERSONAL_MOBILE_NO,
} from './personal.const';

export interface IContactInfo {
  title: string;
  content: string;
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export const contactInfo: IContactInfo[] = [
  {
    title: 'Name',
    content: PERSONAL_FULLNAME,
    Icon: UserIcon,
  },
  {
    title: 'Location',
    content: PERSONAL_LOCATION,
    Icon: LocationMarkerIcon,
  },
  {
    title: 'Mobile No',
    content: PERSONAL_MOBILE_NO,
    Icon: PhoneIcon,
  },
  {
    title: 'E-mail',
    content: PERSONAL_EMAIL,
    Icon: MailIcon,
  },
];
