import * as React from 'react';
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/solid';

export interface IContactInfo {
  title: string;
  content: string;
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export const contactInfo: IContactInfo[] = [
  {
    title: 'Name',
    content: 'Tat Tze Tey',
    Icon: UserIcon,
  },
  {
    title: 'Location',
    content: 'Selangor, Malaysia',
    Icon: LocationMarkerIcon,
  },
  {
    title: 'Mobile No',
    content: '+60 16 717 8068',
    Icon: PhoneIcon,
  },
  {
    title: 'E-mail',
    content: 'tattzetey@gmail.com',
    Icon: MailIcon,
  },
];
