import * as React from 'react';
import cx from 'clsx';

export type TextFieldProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: string;
  submitting?: boolean;
  render?: (
    renderProps: React.ComponentPropsWithoutRef<'input'>,
    ref: React.Ref<HTMLInputElement>,
  ) => JSX.Element;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      error = '',
      submitting = false,
      className,
      render = (renderProps, ref) => <input {...renderProps} ref={ref} />,
      ...props
    },
    ref,
  ) => {
    const classes = cx(
      'appearance-none block px-2 pt-2 pb-1.5 w-full bg-darkgrey border-b-2 border-primary/0 rounded-md transition-colors ease-in-out focus:outline-none focus:border-primary active:outline-none active:border-primary',
      { 'opacity-50 pointer-events-none;': submitting },
    );

    return (
      <div className="w-full">
        <label
          className="mb-1 text-xs font-semibold uppercase text-lightgrey"
          htmlFor={id}
        >
          {label}
        </label>
        {render({ id, className: classes, ...props }, ref)}
        {error && (
          <span className="text-xs font-medium text-error">{error}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
