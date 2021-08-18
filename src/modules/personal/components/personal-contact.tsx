import * as React from 'react';
import cx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { Button } from 'src/components/button';
import { Divider } from 'src/components/divider';
import { Section } from 'src/components/section';
import { TextField } from 'src/components/form/textfield';
import { submitContactForm } from 'src/services/api-personal.service';
import { contactInfo, IContactInfo } from '../personal-contact.data';
import {
  formValidation,
  IContactFormValue,
  ResponseStatus,
} from '../personal-contact.form';

export function PersonalContact() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <ContactForm />
        <ContactDetails />
      </div>
    </Section>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormValue>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<ResponseStatus | null>(null);
  const [message, setMessage] = React.useState<string>('');

  const handleSend: SubmitHandler<IContactFormValue> = async (data) => {
    setLoading(true);
    const res = await submitContactForm(data);
    if (res.status === 200) {
      setStatus(ResponseStatus.SUCCESS);
      setMessage(res.data.message);
    } else {
      setStatus(ResponseStatus.FAIL);
      setMessage(
        res.data.message ||
          'Failed to submit the form. Please use another method to contact me.',
      );
    }
    setLoading(false);
    reset();
  };

  return (
    <div className="w-full lg:col-span-7 space-y-4">
      <h1 className="typography-h4 leading-title">Message Me</h1>
      <form
        className="space-y-8"
        onSubmit={handleSubmit(handleSend)}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            id="name"
            label="Name"
            placeholder="Name"
            error={errors.name?.message}
            submitting={loading}
            autoComplete="none"
            {...register('name', formValidation.name)}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Email"
            error={errors.email?.message}
            submitting={loading}
            autoComplete="none"
            {...register('email', formValidation.email)}
          />
          <div className="sm:col-span-2">
            <TextField
              id="subject"
              label="Subject"
              placeholder="Subject"
              error={errors.subject?.message}
              submitting={loading}
              autoComplete="none"
              {...register('subject', formValidation.subject)}
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              label="Message"
              error={errors.message?.message}
              submitting={loading}
              render={(renderProps) => (
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  className={renderProps.className}
                  autoComplete="none"
                  {...register('message', formValidation.message)}
                />
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          loading={loading}
          loadingText="Submitting..."
          aria-label="Submit"
          endIcon={<PaperAirplaneIcon className="rotate-90" />}
        >
          Submit
        </Button>
      </form>
      {status && (
        <p
          className={cx(
            'text-xs font-medium',
            {
              'text-success': status === ResponseStatus.SUCCESS,
            },
            { 'text-error': status === ResponseStatus.FAIL },
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="w-full space-y-4 lg:col-span-5 lg:mt-0 lg:px-4">
      <h1 className="typography-h4 leading-title">Contact Info</h1>
      <p className="typography-p typography-secondary leading-desc">
        Always available for freelance work if the right project comes along,
        Feel free to contact me!
      </p>
      <ul className="w-full">
        {contactInfo.map((info) => (
          <ContactInfoItem
            key={info.title}
            title={info.title}
            content={info.content}
            Icon={info.Icon}
          />
        ))}
      </ul>
    </div>
  );
}

type ContactInfoItemProps = IContactInfo;

function ContactInfoItem({ title, content, Icon }: ContactInfoItemProps) {
  return (
    <li className="flex items-center">
      <Icon className="w-8 h-8 text-primary" />
      <Divider className="w-0.5 h-16 mx-8" color="secondary" />
      <div className="">
        <h1 className="typography-p leading-desc">{title}</h1>
        <p className="typography-small typography-secondary">{content}</p>
      </div>
    </li>
  );
}
