import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import cx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PageLayout } from '../layouts/page.layout';
import { SectionLayout } from '../layouts/section.layout';
import {
  formValidation,
  IContactFormValue,
  ResponseStatus,
} from '../modules/contact/contact.lib';
import { submitContactForm } from '../modules/contact/contact.service';
import { Button } from '../components/button';
import { TextField } from '../components/form/textfield';
import { Container } from '../components/container';

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormValue>();
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<ResponseStatus | null>(null);
  const [message, setMessage] = useState<string>('');

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
    <>
      <NextSeo
        title="tatSmartDev - Contact"
        description="A page which contains a contact form and some contact details."
      />
      <PageLayout
        title="Get in Touch"
        subtitle="Feel free to contact me anytimes"
      >
        <Container size="md">
          <SectionLayout>
            <div className="space-y-4">
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
                <div className="w-full text-center">
                  <Button
                    type="submit"
                    loading={loading}
                    loadingText="Submitting..."
                    aria-label="Submit"
                    endIcon={<PaperAirplaneIcon className="rotate-90" />}
                  >
                    Submit
                  </Button>
                </div>
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
          </SectionLayout>
        </Container>
      </PageLayout>
    </>
  );
}

export default ContactPage;
